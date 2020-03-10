import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  render() {
    const cartList = this.props.cart.map(product => {
      return <CartSummaryItem key={product.cartItemId} product={product} />;
    });

    return (
      <div className="container">
        {cartList}
      </div>
    );
  }
}

export default CartSummary;
