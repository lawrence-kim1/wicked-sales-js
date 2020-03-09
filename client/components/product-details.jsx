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
      .catch(product => this.setState({ product }));
  }

  render() {
    const product = this.state.product;
    if (product) {
      return (
        <div className="container">
          <a href="#"> Back to catalog </a>
          <header>
            <div className="col-4">
              <img src={product.image} />
            </div>
            <div className="col-8">
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
              <h2>{product.shortDescription}</h2>
            </div>
          </header>
          <div className="col-12">
            {product.longDescription}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ProductDetails;
