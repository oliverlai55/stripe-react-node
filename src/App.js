import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    // };
    // window.addEventListener('resize', () => {
    //   if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
    //     this.setState({ elementFontSize: '14px' });
    //   } else if (
    //     window.innerWidth >= 450 &&
    //     this.state.elementFontSize !== '18px'
    //   ) {
    //     this.setState({ elementFontSize: '18px' });
    //   }
    // });
  }
  render() {
    // const { elementFontSize } = this.state;
    return (
      <StripeProvider apiKey="pk_test_u4xe0pnznOmQyQ86eBu0tqzV">
        <div className="Checkout">
          <h1>Stripe Checkout Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
