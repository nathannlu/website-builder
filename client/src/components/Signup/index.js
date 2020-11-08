import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Regular Expression formats for validating password
const lowercaseCheck = /(?=.*[a-z])/
const uppercaseCheck = /(?=.*[A-Z])/
const numberCheck = /(?=.*\d)/
const specialCharacterCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
const validatePassword = password => lowercaseCheck.test(password) && uppercaseCheck.test(password) && numberCheck.test(password) && specialCharacterCheck.test(password) && password.length >= 8 ? true : false

const Signup = props => {
	// Sign up form state management
	const initialFormState = {
		name: '',
		email: '',
		password: '',
	}
	const [newUser, setNewUser] = useState(initialFormState)
	const [isPasswordSecure, setIsPasswordSecure] = useState(false);
	const [errors, setErrors] = useState({});
	const [pendingFormSubmission, setPendingFormSubmission] = useState(false);

	// Sign up form submission handler
	const onSubmit = async e => {
		e.preventDefault();

		setPendingFormSubmission(true);
		props.registerUser(newUser, props.history, function() {
			setPendingFormSubmission(false);
		})
	}

	// Password validation for form button
	// Confirm password has lower & uppercase, numbers, and special characters
	useEffect(() => {
		if(validatePassword(newUser.password)) {
			setIsPasswordSecure(true)	
		} else {
			setIsPasswordSecure(false)
		}
	}, [newUser.password])

	// Handle incoming errors from failed register attempts
	useEffect(() => {
		if(props.errors) {
			setErrors(props.errors);
		}
	}, [props.errors])

	// Check if user is logged in
	useEffect(() => {
		if(props.auth.isAuthenticated) {
			console.log("User is logged in")
		}
	}, [props.auth])

	return (
		<div className="bg-black min-h-screen">
			<div className="bg-white h-full w-3/5 py-48">
				<div className="w-2/3 mx-auto">
					<Form 
						onSubmit={onSubmit} 
						newUser={newUser} 
						setNewUser={setNewUser} 
						isPasswordSecure={isPasswordSecure}
						errors={errors}
						pendingFormSubmission={pendingFormSubmission}
					/>
				</div>
			</div>
		</div>
	)
};

const Form = props => {
	// Handle show password
	const [isRevealPassword, setIsRevealPassword] = useState(false);

	// General form input change handler
	const onChange = e => {
		const { name, value } = e.target;

		props.setNewUser({...props.newUser, [name]: value })
	}


	return (
		<>
			<h1>
				Welcome to Agentsquare 
			</h1>
			<p className="mb-3">
				Find your people. Engage your customers. Build your brand. Do it all with Agentsquare’s Web Building Platform. 
			</p>
			<p>
				Already have an account? <Link className="link" to="/login">Log in</Link>
			</p>

			<form onSubmit={props.onSubmit} className="mt-16">
				<div className="mb-8">
					<label for="email">
						Email
					</label>
					<input 
						className="mt-3" 
						type="email" 
						id="email" 
						name="email" 
						onChange={onChange}
					/>
					{
						props.errors.email && (
							<span style={{color: '#a73205', fontSize: '1.4rem', fontWeight: 600}}>
								{props.errors.email}
							</span>
						)
					}
				</div>

				<div className="mb-8">
					<label for="email">
						Name
					</label>
					<input 
						className="mt-3" 
						type="text" 
						id="name" 
						name="name" 
						onChange={onChange}
					/>
					{
						props.errors.name && (
							<span style={{color: '#a73205', fontSize: '1.4rem', fontWeight: 600}}>
								{props.errors.name}
							</span>
						)
					}
				</div>

				<div className="mb-8">
					<label for="password">
						Password
					</label>
					<label 
						onClick={() => setIsRevealPassword(!isRevealPassword)} 
						className="link float-right cursor-pointer"
					>
						{isRevealPassword ? (
							<>
								<FontAwesomeIcon icon="eye-slash" />
								<span className="ml-6">Hide</span>
							</>
						) : (
							<>
								<FontAwesomeIcon icon="eye" />
								<span className="ml-6">Show</span>
							</>
						)}
					</label>
					<input 
						className="mt-3" 
						type={isRevealPassword ? 'text' : 'password'} 
						id="password" 
						name="password" 
						onChange={onChange}
					/>
				</div>

				<div className="mb-8" style={{fontSize: '1.2rem'}}>
				{ props.isPasswordSecure ? (
					<div className="px-6 py-4 rounded-sm" style={{backgroundColor: '#d8eacc'}}>
						<div style={{fontWeight: 600}}>
							Your password is secure and you're all set!
						</div>
					</div>
				) : (
					<div className="flex flex-wrap">
						<ul className="w-1/2">
							<li style={lowercaseCheck.test(props.newUser.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One lowercase character</li>
							<li style={uppercaseCheck.test(props.newUser.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One uppercase character</li>
							<li style={numberCheck.test(props.newUser.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One number</li>
						</ul>
						<ul className="w-1/2">
							<li style={specialCharacterCheck.test(props.newUser.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One special character</li>
							<li style={props.newUser.password.length >= 8 ? {color: '#bdbbb9'} : {color: '#333'}}>8 characters minimum</li>
						</ul>
					</div>
				)}
				</div>
				<button type="submit" style={props.pendingFormSubmission ? {pointerEvents: 'none'} : {}} disabled={!props.isPasswordSecure} className="btn btn-primary flex items-center">
					{!props.pendingFormSubmission ? (
						<>Sign Up</>
					) : (
						<>
							<svg class="spinner" viewBox="0 0 50 50">
								<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
							</svg>
							<span className="ml-3 mr-8">
								Please Wait...
							</span>
						</>
					)}
				</button>
			</form>
		</>
	)
};

Signup.propTypes = {
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
)(withRouter(Signup));
