import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card h-75"
          onClick={() => this.props.setView('details', { productId: this.props.productId })}
          style={{ cursor: 'pointer' }}>
          <img src={this.props.image} className="card-img-top h-50" alt={this.props.name}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <h5 className="card-subtitle text-muted mb-2">${this.props.price}</h5>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
