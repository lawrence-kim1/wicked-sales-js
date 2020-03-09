import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col">
        <img />
        <div className="card-body">
          <h5 className="card-title">Product Name</h5>
          <p>Product Text</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
