import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  render() {
    const cartList = this.state.cart.map(product => {
      return <CartSummaryItem key={product.productId} />;
    });

    return (
      { cartList }
    );
  }
}

export default CartSummary;
