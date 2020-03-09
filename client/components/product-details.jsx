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
          <div onClick={() => this.props.setView('catalog', {})} style={{ cursor: 'pointer' }}>
            <p className="text-muted my-3">&lt; Back to catalog</p>
          </div>
          <header className="row">
            <img className="col-4" src={product.image} />
            <div className="col-8">
              <h1>{product.name}</h1>
              <p className="text-muted">${(product.price / 100).toFixed(2)}</p>
              <p>{product.shortDescription}</p>
            </div>
          </header>
          <div className="card-text mb-3">
            {product.longDescription}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ProductDetails;
