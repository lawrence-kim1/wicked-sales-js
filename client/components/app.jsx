import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  render() {
    const view = this.state.view;
    if (view.name === 'catalog') {
      return (
        <div className="container">
          <Header />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (view.name === 'details') {
      return (
        <ProductDetails product={view.params} setView={this.setView} />
      );
    }
  }
}
