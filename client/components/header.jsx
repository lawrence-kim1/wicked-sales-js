import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1 style={{ cursor: 'pointer' }}
          onClick={() => this.props.setView('catalog', {})}
          className="ml-5 mb-5">
          Wicked Sales
        </h1>
      </div>
    );
  }
}

export default Header;
