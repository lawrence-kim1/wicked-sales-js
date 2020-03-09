import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.setView('catalog', {})}>Wicked Sales</h1>
        <img />
      </div>
    );
  }
}

export default Header;
