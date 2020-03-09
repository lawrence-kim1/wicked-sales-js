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
        <div className="container">
          <a href="#"
            onClick={() => this.props.setView('catalog', {})}>
            Back to catalog
          </a>
          <header className="row">
            <img className="col-4" src={product.image} />
            <div className="col-8">
              <h1>{product.name}</h1>
              <h2>${(product.price / 100).toFixed(2)}</h2>
              <h2>{product.shortDescription}</h2>
            </div>
          </header>
          <div>
            {product.longDescription}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ProductDetails;
