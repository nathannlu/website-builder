import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../../atoms/TextField';
import PasswordField from '../../molecules/PasswordField';
import Button from '../../atoms/Button';

// Redux state management imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions.js';


// Regular Expression formats for validating password
const lowercaseCheck = /(?=.*[a-z])/
const uppercaseCheck = /(?=.*[A-Z])/
const numberCheck = /(?=.*\d)/
const specialCharacterCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
const validatePassword = password => lowercaseCheck.test(password) && uppercaseCheck.test(password) && numberCheck.test(password) && specialCharacterCheck.test(password) && password.length >= 8 ? true : false

const SignupForm = props => {
	// Sign up form state management
	const initialFormState = {
		name: '',
		email: '',
		password: '',
	}
	const [newUser, setNewUser] = useState(initialFormState)
	const [errors, setErrors] = useState({});
	const [pendingFormSubmission, setPendingFormSubmission] = useState(false);
	const [isPasswordSecure, setIsPasswordSecure] = useState(false);


	// Sign up form submission handler
	const onSubmit = async e => {
		e.preventDefault();

		setPendingFormSubmission(true);
		props.registerUser(newUser, props.history, function() {
			setPendingFormSubmission(false);
		})
	}

	const onChange = e => {
		const { name, value } = e.target;
		setNewUser({...newUser, [name]: value })
	}

	// Handle incoming errors from failed register attempts
	useEffect(() => {
		if(props.errors) {
			setErrors(props.errors);
		}
	}, [props.errors])

	// Reset errors when component mounts
	useEffect(() => {
		setErrors({});	
	}, []);

	return (
		<form onSubmit={onSubmit} className="mt-16">
			<TextField
				name="email"
				type="email"
				label="Email"
				onChange={onChange}
				errors={errors.email}
			/>
			<TextField
				name="name"
				type="text"
				label="Name"
				onChange={onChange}
				errors={errors.name}
			/>
			<PasswordField
				newUser={newUser}
				onChange={onChange}
				isPasswordSecure={isPasswordSecure}
				setIsPasswordSecure={setIsPasswordSecure}
			/>
			<Button
				type="submit"
				disabled={!isPasswordSecure}
				loading={pendingFormSubmission}
			>
				Sign Up
			</Button>
		</form>
	)
};

SignupForm.propTypes = {
	registerUser: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	errors: state.errors
});
	
export default connect(
	mapStateToProps,
	{ registerUser }
)(SignupForm);
