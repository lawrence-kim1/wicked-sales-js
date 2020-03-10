import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div className="card container">
        <img src={product.image} className="card-img-top h-50 w-50" />
        <h5 className="cart-title">{product.name}</h5>
        <h5 className="text-muted">${(product.price / 100).toFixed(2)}</h5>
        <h5>{product.desc}</h5>
      </div>
    );
  }
}

export default CartSummaryItem;
