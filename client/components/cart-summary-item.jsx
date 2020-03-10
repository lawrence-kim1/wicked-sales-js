import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.desc}</p>
      </div>
    );
  }
}

export default CartSummaryItem;
