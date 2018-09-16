import React, { Component } from 'react';
import { CardElement, injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace', '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = { complete: false };
    // console.log('props', this.props);
    // this.submit = this.submit.bind(this)
    // this.handleSubmit = this.props.stripe.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async submit(ev) {
    // User Clicked submit`
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) this.setState({ complete: true });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({
      name: 'Name'
    });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) this.setState({ complete: true });

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      // <div className="checkout">
      //   <p>Would you like to complete the purchase?</p>
      //   <CardElement />
      //   <button onClick={this.submit}>Send</button>
      // </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(18)}
          />
        </label>

        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(18)}
          />
        </label>

        <label>
          CVC
          <CardCVCElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(18)}
          />
        </label>
        <label>
          Postal code
          <PostalCodeElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(18)}
          />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);