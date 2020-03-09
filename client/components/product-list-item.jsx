import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col-4">
        <img src={this.props.image} />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p>${this.props.price}</p>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
