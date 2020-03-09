import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    const productId = this.props.product.productId;
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(product => this.setState({ product }));
  }

  render() {
    const product = this.state.product;
    if (product) {
      return (
        <div className="container card">
          <div>
            <p onClick={() => this.props.setView('catalog', {})}
              style={{ cursor: 'pointer' }}
              className="text-muted my-3 w-25">
                &lt; Back to catalog
            </p>
          </div>
          <header className="row mb-5">
            <img className="col-4" src={product.image} />
            <div className="col-8">
              <h1>{product.name}</h1>
              <h5 className="text-muted">${(product.price / 100).toFixed(2)}</h5>
              <p>{product.shortDescription}</p>
            </div>
          </header>
          <div className="card-text mb-5">
            {product.longDescription}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ProductDetails;
