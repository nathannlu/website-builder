import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import SignupWrapper from '../../templates/SignupWrapper';
import PasswordField from '../../molecules/PasswordField';

const Reset = props => {
	// With token, I will need to verify it is valid 
	const { token, id } = qs.parse(props.location.search.substring(1));

	const initialFormState = {
		newPassword: '',
		confirmPassword: '',
	}
	const [passwordReset, setPasswordReset] = useState(initialFormState);
	const [isPasswordSecure, setIsPasswordSecure] = useState(false);
	const [isTokenVerified, setIsTokenVerified] = useState(false);
	const [loading, setLoading] = useState(true);
	
	const onChange = e => {
		const { name, value } = e.target;	

		setPasswordReset({...passwordReset, [name]: value});
	}

	// Validate token on page load
	useEffect(() => {

		// Send userID and token to backend to validate token
		axios
			.post('/api/users/reset/validate', {token, id})
			.then(res => {
				if (res.status == 200) {
					console.log('Verified token');	
					setIsTokenVerified(true);
				};
			})
			.catch(err => {
				console.log('Not verified token');
			})
			.then(() => setLoading(false));
	}, [])

	const onSubmit = e => {
		e.preventDefault();
		const { newPassword } = passwordReset

		axios
			.post('/api/users/reset', {token, id, newPassword})
			.then(res => {
				if(res.status == 200) {
					console.log('Password changed!');
				}
			})
			.catch(err => {
				// Very unlikely to happen
				console.log('Failed to change password');
			})
	}

	return (
		<SignupWrapper>
			{
				loading ? 'loading' :
					isTokenVerified ? (
						<>
						<h1>
							Reset Your Password
						</h1>
						<p className="mb-3">
							Almost done. Enter your new password, and you're good to go.
						</p>

						<form onSubmit={onSubmit} className="mt-16">
							<PasswordField 
								name="newPassword"
								label="New password"
								password={passwordReset.newPassword}
								onChange={onChange}
								isPasswordSecure={isPasswordSecure}
								setIsPasswordSecure={setIsPasswordSecure}
							/>

							<TextField
								name="confirmPassword"	
								label="Confirm new password"
								type="password"
								onChange={onChange}
							/>

							<Button type="submit" disabled={!(isPasswordSecure && passwordReset.newPassword == passwordReset.confirmPassword)}>
								Reset Password
							</Button>
						</form>
						</>	
					) : (
						<>
							Invalid token
						</>
					)
			}
		</SignupWrapper>
	)
};

export default Reset;
