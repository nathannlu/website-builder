import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

import Register from './Register';
import PaymentPlan from './PaymentPlan';
import Checkout from './Checkout';

const Onboarding = props => {
	const [onboardingStage, setOnboardingStage] = useState(0);

	useEffect(() => {
		if(props.auth.isAuthenticated) {
			// Needs to check if user has paid	
			setOnboardingStage(1);
			console.log(`Logged in as ${props.auth.user.name}`);
		}
	}, [props.auth])
	
	return (
		<div>
			{{
				0: <Register props={props} />,
				1: <PaymentPlan props={props} setOnboardingStage={setOnboardingStage} />,
				2: <Checkout props={props} />
			}[onboardingStage]}
		</div>
	)
};


Onboarding.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Onboarding));
