import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(cart => this.setState({ cart }));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(cartItem => this.setState({ cart: this.state.cart.concat(cartItem) }));
  }

  placeOrder(order) {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })
      .then(() => this.setState({ cart: [] }))
      .then(() => this.setView('catalog', {}));
  }

  render() {
    const view = this.state.view;
    switch (view.name) {
      case 'catalog': return (
        <div>
          <Header
            setView={this.setView}
            cartItemCount={this.state.cart.length} />
          <ProductList setView={this.setView} />
        </div>
      );
      case 'details': return (
        <div>
          <Header
            setView={this.setView}
            cartItemCount={this.state.cart.length} />
          <ProductDetails
            product={view.params}
            setView={this.setView}
            addToCart={this.addToCart} />
        </div>
      );
      case 'cart': return (
        <div>
          <Header
            setView={this.setView}
            cartItemCount={this.state.cart.length} />
          <CartSummary cart={this.state.cart} setView={this.setView} />
        </div>
      );
      case 'checkout': return (
        <div>
          <Header
            setView={this.setView}
            cartItemCount={this.state.cart.length} />
          <CheckoutForm
            cart={this.state.cart}
            setView={this.setView}
            placeOrder={this.placeOrder} />
        </div>
      );
      default:
        return null;
    }
  }
}
