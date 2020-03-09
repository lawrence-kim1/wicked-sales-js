import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
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
