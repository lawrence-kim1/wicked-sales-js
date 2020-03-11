import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: ''
    };
  }

  render() {
    let itemTotal = 0;
    this.props.cart.forEach(product => {
      itemTotal += product.price;
    });

    return (
      <form className="container">
        <h1 className="mb-3">My Cart</h1>
        <h5 className="text-muted mb-3">
          Order Total: ${(itemTotal / 100).toFixed(2)}
        </h5>
        <div className="d-flex flex-column mb-3 form-group">
          <label htmlFor="name" >Name</label>
          <input type="text"
            id="name"
            placeholder="Name"
            className="form-control" />
        </div>
        <div className="d-flex flex-column mb-3 form-group">
          <label htmlFor="credit">Credit Card</label>
          <input type="number"
            id="credit"
            placeholder="Credit Card Number"
            className="form-control" />
        </div>
        <div className="d-flex flex-column mb-3 form-group">
          <label htmlFor="shipping">Shipping Address</label>
          <textarea id="shipping" className="form-control" rows="5"></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted"
            onClick={() => this.setState('catalog', {})}
            style={{ cursor: 'pointer' }}>
            &lt; Continue Shopping
          </p>
          <button className="btn btn-primary">Place Order</button>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
