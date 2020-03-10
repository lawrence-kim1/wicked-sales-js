require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  select "productId",
         "name",
         "price",
         "image",
         "shortDescription"
    from "products";
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const values = [`${req.params.productId}`];
  const sql = `
  select *
    from "products"
   where "productId" = $1;
  `;
  if (parseInt(req.params.productId) < 0 ||
      isNaN(parseInt(req.params.productId))) {
    return next(new ClientError(
      'The productId is invalid',
      400
    ));
  }
  db.query(sql, values)
    .then(result => {
      if (!(result.rows[0])) {
        return next(new ClientError(
          'The product was not found.',
          404
        ));
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  const sql = `
  select *
    from "cartItems"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/cart/:productId', (req, res, next) => {
  if (parseInt(req.params.productId) < 0 ||
      isNaN(parseInt(req.params.productId))) {
    return next(new ClientError(
      'The productId is invalid',
      400
    ));
  }
  const values = [`${req.params.productId}`];
  const sql = `
      select "price"
        from "products"
       where "productId" = $1;
  `;
  db.query(sql, values)
    .then(result => {
      if (!(result.rows[0])) {
        throw new ClientError('The product was not found.', 404);
      }
      return db.query(`
        insert into "carts" ("cartId", "createdAt")
             values (default, default)
          returning "cartId";
      `)
        .then(cartRes => {
          return { price: result.rows[0].price, cartId: cartRes.rows[0].cartId };
        });
    })
    .then(cartObj => {
      req.session.cartId = cartObj.cartId;
      return db.query(`
        insert into "cartItems" ("cartId", "productId", "price")
             values ($1, $2, $3)
          returning "cartItemId";
      `, [cartObj.cartId, `${req.params.productId}`, cartObj.price])
        .then(cartItemRes => {
          return { cartItemId: cartItemRes.rows[0].cartItemId };
        });
    })
    .then(cartItem => {
      db.query(`
        select "c"."cartItemId",
               "c"."price",
               "p"."productId",
               "p"."image",
               "p"."name",
               "p"."shortDescription"
          from "cartItems" as "c"
          join "products" as "p" using ("productId")
         where "c"."cartItemId" = $1;
      `, [cartItem.cartItemId])
        .then(result => res.status(201).json(result.rows[0]));
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
