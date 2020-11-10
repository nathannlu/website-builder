import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';

import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';

const LoginForm = props => {
	// User form handler
	const initialFormState = {
		email: '',	
		password: ''
	}
	const [user, setUser] = useState(initialFormState);
	const [pendingFormSubmission, setPendingFormSubmission] = useState(false);
	const [errors, setErrors] = useState({email: '', emailnotfound: '', password: '', passwordincorrect: ''});

	// Handle form input 
	const onChange = e => {
		const { name, value } = e.target;

		setUser({...user, [name]: value});
	}

	// Login form submission handler
	const onSubmit = e => {
		e.preventDefault();
	
		setPendingFormSubmission(true);
		props.loginUser(user, function() {
			setPendingFormSubmission(false);
		});
	}

	// Handle incoming errors from failed login attempts
	useEffect(() => {
		if(props.errors) {
			setErrors(props.errors);
		}
	}, [props.errors])

	// Reset errors when component mounts
	useEffect(() => {
		setErrors({});	
	}, [])

	return (
		<form onSubmit={onSubmit} className="mt-16">
			<TextField
				name="email"
				type="email"
				label="Email"
				onChange={onChange}
			/>
			<TextField
				name="password"
				type="password"
				label="Password"
				onChange={onChange}
				toggleVisibility
			/>
			<Button
				type="submit"
				loading={pendingFormSubmission}
				fullWidth
			>
				Log In
			</Button>
			{/*
			<button type="submit" style={pendingFormSubmission ? {pointerEvents: 'none'} : {}} className="btn btn-primary w-full flex items-center">
				{!pendingFormSubmission ? (
					<span className="mx-auto">Log In</span>
				) : (
					<>
						<svg class="spinner" viewBox="0 0 50 50">
							<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
						</svg>
						<span className="mx-auto">
							Please Wait...
						</span>
					</>
				)}
			</button>
			*/}

		</form>	
	)
};

LoginForm.propTypes ={
	loginUser: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(LoginForm);
