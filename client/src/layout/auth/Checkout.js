import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const Checkout = ({props}) => {
  const stripe = useStripe();
  const elements = useElements();
	const [clientSecret, setClientSecret] = useState('');
	
	const CARD_ELEMENT_OPTIONS = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#aab7c4",
				},
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	useEffect(() => {
		axios.get('/api/payments/secret').then(res => setClientSecret(res.data.client_secret));	
	}, [])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    
		const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
				console.log('Payment succeeded')
      }
    }

	};	

	return (
		<div className="h-screen flex flex-wrap">
			<div className="w-1/3 bg-gray-500"></div>	
			<div style={{backgroundColor: '#f6f6f4'}} className="w-2/3 pb-24">
				<div className="w-1/3 mx-auto flex flex-wrap h-full items-center">
					<div className="w-full">
						<h2 className="">Checkout</h2>

						<div className="border rounded my-8">
							<div className="p-6">
								<div className="w-full font-bold">Total</div>
								<span>$499</span>
							</div>
						</div>

						<hr />

						<form onSubmit={handleSubmit} className="mt-8">
							<div className="mb-8">
								<label className="block mb-4 font-bold" htmlFor="name">Cardholder Name</label>
								<input 
									id="name"
									name="name"
									type="text"
								/>
							</div>
							<div className="mb-12">
								<label className="block mb-4 font-bold">Card Number</label>
								<CardElement className="mb-8" opctions={CARD_ELEMENT_OPTIONS} />
							</div>

							<button className="btn btn-primary" type="submit" disabled={!stripe}>
								Subscribe	
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Checkout;
