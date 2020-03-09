import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    const listItems = this.state.products.map(product => {
      return (
        <ProductListItem key={product}/>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {listItems}
        </div>
      </div>
    );
  }
}

export default ProductList;
