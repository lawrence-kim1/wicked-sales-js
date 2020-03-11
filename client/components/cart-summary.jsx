import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  render() {
    const cartList = this.props.cart.map(product => {
      return <CartSummaryItem key={product.cartItemId} product={product} />;
    });
    let itemTotal = 0;
    this.props.cart.forEach(product => {
      itemTotal += product.price;
    });

    return (
      <div className="container">
        <p className="text-muted w-25 my-3"
          style={{ cursor: 'pointer' }}
          onClick={() => this.props.setView('catalog', {})}>
          &lt; Back to catalog
        </p>
        <h1 className="mb-3">
          My Cart
        </h1>
        {cartList}
        <div className="d-flex justify-content-between">
          <h2 className="mb-5">
            Item Total: ${(itemTotal / 100).toFixed(2)}
          </h2>
          <button className="btn btn-primary"
            onClick={() => this.props.setView('checkout', {})}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default CartSummary;
