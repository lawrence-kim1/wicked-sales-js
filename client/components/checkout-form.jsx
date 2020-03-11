import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.setName = this.setName.bind(this);
    this.setCreditCard = this.setCreditCard.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  setCreditCard(event) {
    this.setState({ creditCard: event.target.value });
  }

  setShippingAddress(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{3,4}$/;
    if (!regex.test(this.state.creditCard)) return;
    if (!this.state.name) return;
    if (!this.state.creditCard) return;
    if (!this.state.shippingAddress) return;
    this.props.placeOrder(this.state);
  }

  render() {
    let itemTotal = 0;
    this.props.cart.forEach(product => {
      itemTotal += product.price;
    });

    return (
      <form className="container"
        onSubmit={this.submitForm}>
        <h1 className="mb-3">My Cart</h1>
        <h5 className="text-muted mb-3">
          Order Total: ${(itemTotal / 100).toFixed(2)}
        </h5>
        <div className="d-flex flex-column mb-3 form-group">
          <label htmlFor="name" >Name</label>
          <input type="text"
            id="name"
            placeholder="Name"
            className="form-control"
            onChange={this.setName} />
        </div>
        <div className="d-flex flex-column mb-3 form-group">
          <label htmlFor="credit">Credit Card</label>
          <input type="text"
            id="credit"
            placeholder="Credit Card Number"
            className="form-control"
            onChange={this.setCreditCard}
            minLength="18"
            maxLength="19" />
        </div>
        <div className="d-flex flex-column mb-3 form-group">
          <label htmlFor="shipping">Shipping Address</label>
          <textarea id="shipping"
            className="form-control"
            rows="5"
            onChange={this.setShippingAddress} />
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted"
            onClick={() => this.props.setView('catalog', {})}
            style={{ cursor: 'pointer' }}>
            &lt; Continue Shopping
          </p>
          <button className="btn btn-primary" type="submit">
            Place Order
          </button>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
