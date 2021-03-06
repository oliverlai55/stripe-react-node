const app = require('express')();
require('dotenv').config();

const STRIPE_API_KEY = process.env.STRIPE_API_KEY;

const stripe = require('stripe')(STRIPE_API_KEY);

app.use(require('body-parser').text());

app.post('/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(9000, () => console.log('Listening on port 9000'));