import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div className="ml-5 mb-5 d-flex flex-wrap justify-content-between">
          <h1 onClick={() => this.props.setView('catalog', {})}
            style={{ cursor: 'pointer' }}>
            Wicked Sales
          </h1>
          <div className="d-flex flex-wrap align-items-center"
            onClick={() => this.props.setView('cart', {})}
            style={{ cursor: 'pointer' }}>
            <h5 className="mr-2">{this.props.cartItemCount} {this.props.cartItemCount === 1 ? 'item' : 'items'}</h5>
            <i className="fas fa-shopping-cart fa-2x mr-5"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
