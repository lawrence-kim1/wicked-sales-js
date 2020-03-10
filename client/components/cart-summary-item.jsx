import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div className="card mb-5">
        <div className="row h-75">
          <img src={product.image} className="col-4" style={{ height: '250px' }} />
          <div className="col-8 d-flex flex-column justify-content-center">
            <h2 className="card-title">{product.name}</h2>
            <h5 className="text-muted">${(product.price / 100).toFixed(2)}</h5>
            <p>{product.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
