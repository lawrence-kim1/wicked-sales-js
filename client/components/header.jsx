import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1 className="ml-5 mb-5 d-flex flex-wrap justify-content-between">
          <p onClick={() => this.props.setView('catalog', {})}
            style={{ cursor: 'pointer' }}>
            Wicked Sales
          </p>
          <div className="d-flex flex-wrap align-items-center">
            <i className="fas fa-shopping-cart fa-xs mr-2"></i>
            <p className="mr-5">{this.props.cartItemCount}</p>
          </div>
        </h1>
      </div>
    );
  }
}

export default Header;
