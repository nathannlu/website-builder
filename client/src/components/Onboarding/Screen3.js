import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Fade, CssBaseline, Grid, Box, TextField, Typography, Button} from '@material-ui/core';
import {Lock, CheckCircleOutline} from '@material-ui/icons';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CardSection from '../CardSection';

const Content = props => {
	const theme = {
		spacing: 8
	}
	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '150px', textAlign: 'center'}}>
					<Box my={3}>
						<Lock color="primary" style={{fontSize:"3rem"}} />
					</Box>

					<Box my={3}>
						<Typography gutterBottom component="h4" variant="body2">
							STEP 3 OF 3
						</Typography>
						<Typography gutterBottom style={{fontWeight: 'bold'}} component="h1" variant="h5">
							Set up your payment.
						</Typography>
						<Typography gutterBottom component="p" variant="body1">
							Your membership starts as soon as you set up payment.
						</Typography>
						<Typography gutterBottom style={{fontWeight: 'bold'}} component="p" variant="body1">
							No commitments.
						</Typography>

					</Box>

					<Button fullWidth onClick={() => props.setStage(1)} variant="contained" color="primary">
						Continue
					</Button>
				</div>
			</Container>
		</Fade>
	)
};

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
			border: '1px solid rgba(0,0,0,.2)',
			borderRadius: '3px'
		},
		invalid: {
			color: "#fa755a",
			iconColor: "#fa755a",
		},
	},
};

const Form = props => {
	const stripe = useStripe();
	const elements = useElements();
	const onSubmit = e => {
		e.preventDefault();
		
		//props.setStage(2);
		createPaymentMethod(elements.getElement(CardElement), props.auth.user.stripeCustomerId,'price_1GzI2UKmTCfCxz2B1JkDshAO')
	}

	const createPaymentMethod = (cardElement, customerId, priceId) => {
		return stripe
			.createPaymentMethod({
				type: 'card',
				card: cardElement,
			})
			.then(result => {
				if(result.error) {
					console.log(result.error);
				} else {
					createSubscription({
						customerId: customerId,
						paymentMethodId: result.paymentMethod.id,
						priceId: priceId,
					})
				}
			})
	}

	const createSubscription = ({ customerId, paymentMethodId, priceId }) => {
		return (
			axios.post('/api/payments/create-subscription', {
				customerId, paymentMethodId, priceId
			})
			.then(res => {
				if(res.status == 200) {
					props.setStage(2);	
				} else {
					alert('Something went wrong. Please contact support');	
				}
			})
		)
	}

	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '64px', textAlign: 'left'}}>
					<form noValidate onSubmit={onSubmit}>
						<Box mb={3}>
							<Typography gutterBottom component="h4" variant="body2">
								STEP 3 OF 3
							</Typography>
							<Typography style={{fontWeight: 'bold'}} gutterBottom component="h1" variant="h5">
								Set up your credit or debit card.
							</Typography>
							<Box display="flex">
								<img style={{height:'25px', paddingRight: '5px'}} src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v2.svg" />
								<img style={{height:'25px'}} src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" />
							</Box>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="first"
									label="First Name"
									name="first"
								/>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="last"
									label="Last Name"
									name="last"
								/>
								<CardElement options={CARD_ELEMENT_OPTIONS} />
						</Box>

						<Button fullWidth type="submit" variant="contained" color="primary">
							Start membership	
						</Button>

					</form>
				</div>
			</Container>
		</Fade>
	)
};

const PostPayment = props => {
	const theme = {
		spacing: 8
	}
	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '150px', textAlign: 'center'}}>
					<Box my={3}>
						<CheckCircleOutline color="primary" style={{fontSize:"3rem"}} />
					</Box>

					<Box my={3}>
						<Typography gutterBottom component="h4" variant="body2">
							STEP 3 OF 3
						</Typography>
						<Typography gutterBottom style={{fontWeight: 'bold'}} component="h1" variant="h5">
							Success!
						</Typography>
						<Typography gutterBottom component="p" variant="body1">
							Your payment went through! You can now make design requests from your dashboard.
						</Typography>
					</Box>

					<Button fullWidth onClick={() => console.log('to dashboard')} variant="contained" color="primary">
						Go to dashboard	
					</Button>
				</div>
			</Container>
		</Fade>
	)
};

export default function(props) {
	const [stage, setStage] = useState(0);

	return {
			0: <Content setStage={setStage} />,
			1: <Form setStage={setStage} auth={props.auth} />,
			2: <PostPayment /> 
		}[stage]
};
