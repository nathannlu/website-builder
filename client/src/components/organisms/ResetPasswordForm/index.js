import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import PasswordField from '../../molecules/PasswordField';

const ResetPasswordForm = props => {
	const initialFormState = {
		newPassword: '',
		confirmPassword: '',
	}
	const [passwordReset, setPasswordReset] = useState(initialFormState);
	const [isPasswordSecure, setIsPasswordSecure] = useState(false);
	const [errors, setErrors] = useState({});
	
	const onChange = e => {
		const { name, value } = e.target;	

		setPasswordReset({...passwordReset, [name]: value});
	}

	const onSubmit = e => {
		e.preventDefault();
		const { newPassword } = passwordReset

		axios
			.post('/api/users/reset', {
				token: props.token, 
				id: props.id, 
				newPassword: newPassword
			})
			.then(res => {
				if(res.status == 200) {
					props.setOnSuccess(prevState => {
						prevState.success = true;
						
						return {...prevState}
					});
				}
			})
			.catch(err => {
				// Very unlikely to happen
				console.log('Failed to change password');
			})
	}

	// Reset errors when component mounts
	useEffect(() => {
		setErrors({});	
	}, [])

	return (
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
	)
};

export default ResetPasswordForm;
