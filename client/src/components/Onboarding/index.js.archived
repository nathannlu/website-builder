import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions.js';
import PropTypes from 'prop-types';
import CardSection from '../CardSection';

import Registration from './Screen1';
import Plans from './Screen2';
import Checkout from './Screen3';

const Onboarding = props => {
	const [stage, setStage] = useState(0);

	useEffect(() => {
		if(props.auth.isAuthenticated) {
			setStage(1);
		}

		console.log(props.auth);
	}, [props.auth])

	return {
		0:<Registration setStage={setStage} errors={props.errors} registerUser={props.registerUser} />,
		1:<Plans setStage={setStage} />,
		2:<Checkout auth={props.auth} />
	}[stage]
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

