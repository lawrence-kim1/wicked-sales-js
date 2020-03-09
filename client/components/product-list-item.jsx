import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col-4">
        <img />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p>Product Text</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
