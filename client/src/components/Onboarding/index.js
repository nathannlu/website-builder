import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions.js';

// Regular Expression formats for validating password
const lowercaseCheck = /(?=.*[a-z])/
const uppercaseCheck = /(?=.*[A-Z])/
const numberCheck = /(?=.*\d)/
const specialCharacterCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

const Onboarding = props => {
	// Sign up form state management
	const initialFormState = {
		name: '',
		email: '',
		password: '',
	}
	const [newUser, setNewUser] = useState(initialFormState)

	// Sign up form submission handler
	const onSubmit = e => {
		e.preventDefault();

		// @TODO Check current form stage input fields are all filled.

		props.registerUser(newUser)
		// @TODO Set button to loading 
	}

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
					/>
				</div>
			</div>
		</div>
	)
};

const Form = props => {
	// Handle show password
	const [isRevealPassword, setIsRevealPassword] = useState(false);
	
	// Handle password secure check
	const [isSecure, setIsSecure] = useState(false);

	// General form input change handler
	const onChange = e => {
		const { name, value } = e.target;

		props.setNewUser({...props.newUser, [name]: value })
	}

	// Verification check
	useEffect(() => {
		if( lowercaseCheck.test(props.newUser.password)
			&& uppercaseCheck.test(props.newUser.password)
			&& numberCheck.test(props.newUser.password)
			&& specialCharacterCheck.test(props.newUser.password)
			&& props.newUser.password.length >= 8 ) {
			setIsSecure(true)
		} else {
			setIsSecure(false)
		}
	}, [props.newUser.password])

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
						Name
					</label>
					<input 
						className="mt-3" 
						type="text" 
						id="name" 
						name="name" 
						onChange={onChange}
					/>
				</div>

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
								<span>Hide</span>
							</>
						) : (
							<>
								<span>Show</span>
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
				{ isSecure ? (
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
				<button type="submit" disabled={!isSecure} className="btn btn-primary">Sign Up</button>
			</form>
		</>
	)
};

const ResendEmail = () => {
	return (
		<div>
			<h1>
				Resend activation email
			</h1>
			<p>
				We sent you a message with a link to activate your account. If you didn’t receive it, you can re-enter your email address or try another address, and we’ll send you a new activation link.
			</p>
			
			<form>
				<div>
					<label>
						Username
					</label>
					<input />
				</div>

				<div>
					<label>
						Password
					</label>
					<input />
				</div>

				<div>
					<label>
						Email
					</label>
					<input />
				</div>

				<div>
					<label>
						Confirm Email
					</label>
					<input />
				</div>

				<button type="submit" />
			</form>
		</div>
	)
};

const Verification = () => {
	return (
		<div>
			<h1>
				Check your email
			</h1>
			<p>
				We’ve sent a message to extremefuzziness@hotmail.com with a link to activate your account.
			</p>

			<h3>
				Didn't get an email?
			</h3>
			<p>
				if you don’t see an email from us within a few minutes, a few things could have happened:
			</p>
			<li>
				The email is in your spam folder. (Sometimes things get lost in there.)
			</li>
			<li>
				The email address you entered had a mistake or typo. (Happens to the best of us.)
			</li>
			<li>
				You accidentally gave us another email address. (Usually a work or personal one instead of the one you meant.)
			</li>
			<li>
				We can’t deliver the email to this address. (Usually because of corporate firewalls or filtering.)
			</li>

			<a>Re-enter your email and try again</a>
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
