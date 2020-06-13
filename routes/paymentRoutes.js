const express = require('express');
const router = express.Router();
const keys = require('../config/keys');

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(keys.stripePrivate);


router.get('/secret', async (req, res) => {
	const paymentIntent = await stripe.paymentIntents.create({
		amount: 1099,
		currency: 'usd',
		// Verify your integration in this guide by including this parameter
		metadata: {integration_check: 'accept_a_payment'},
	});
	const intent = paymentIntent;
  
	res.json({client_secret: intent.client_secret});
});

module.exports = router;

