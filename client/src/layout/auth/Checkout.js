import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const Checkout = ({props}) => {
  const stripe = useStripe();
  const elements = useElements();
	const [clientSecret, setClientSecret] = useState('');

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
			<div className="w-2/3 bg-gray-100">
				<div className="w-1/3 mx-auto flex flex-wrap h-full items-center">
					<div className="w-full">
						<h4>Checkout</h4>
						<div className="py-8">
							Total: $499
						</div>
						<form onSubmit={handleSubmit}>
							<CardElement />
							<button className="btn btn-black" type="submit" disabled={!stripe}>
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
