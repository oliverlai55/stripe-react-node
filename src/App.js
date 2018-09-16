import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_u4xe0pnznOmQyQ86eBu0tqzV">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
