import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from '../../organisms/LoginForm';
import LoginWrapper from '../../templates/LoginWrapper';

const Login = props => {
	// Handle existing JWT token
	useEffect(() => {
		if(props.auth.isAuthenticated) {
			props.history.push('/dashboard');
		}
	}, [props])

	return (
		<LoginWrapper>
			<h1>
				Log In
			</h1>
			<p className="mb-3">
				Need a Agentsquare account? <Link className="link" to="/signup">Create an account</Link>
			</p>

			<LoginForm />

			<div className="text-center mt-16">
				<Link to="/login/forgot" className="link">Forgot password?</Link>
			</div>
		</LoginWrapper>
	)
};

Login.propTypes ={
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Login);
