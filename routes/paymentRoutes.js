const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const User = require('../models/userModel');

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

router.post('/create-customer', async(req, res) => {
	// Create a new customer object
	const customer = await stripe.customers.create({
		email: req.body.email
	});

	User.findOneAndUpdate({email: req.body.email}, {stripeCustomerId: customer.id}, (err, updatedUser) => {
		if(err) {
			console.log(err);
		} else {
			res.status(200).send('success');
		}
	})
});

router.post('/create-subscription', async(req, res) => {
	try{
		await stripe.paymentMethods.attach(req.body.paymentMethodId, {
			customer: req.body.customerId,
		});
	} catch(error) {
		return res.status(402).send({error: {message: error.message} });
	}
	
	await stripe.customers.update(
		req.body.customerId,
		{
			invoice_settings: {
				default_payment_method: req.body.paymentMethodId,
			},
		}
	)

	const subscription = await stripe.subscriptions.create({
		customer: req.body.customerId,
		items: [{ price: req.body.priceId}],
		expand: ['latest_invoice.payment_intent'],
	})

	User.findOneAndUpdate({stripeCustomerId: req.body.customerId}, {subscription: subscription}, (err, updatedUser) => {
		if (err) console.log(err);

		res.status(200).send(subscription);
	})
});

module.exports = router;
