import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';

const ForgotPasswordForm = props => {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState({});
	const [pendingFormSubmission, setPendingFormSubmission] = useState(false);

	const onChange = e => {
		setEmail(e.target.value);
	}

	const onSubmit = e => {
		e.preventDefault();

		setPendingFormSubmission(true);
		axios
			.post('/api/users/forgot', {email})
			.then(res => {
				if(res.status == 200) {
					props.setOnSuccess(prevState => {
						prevState.email = email
						prevState.success = true

						return {...prevState}
					});
				}
			})
			.catch(err => {
				setErrors(err.response.data);
			})
			.then(() => setPendingFormSubmission(false))
	}

	// Reset errors when component mounts
	useEffect(() => {
		setErrors({});	
	}, [])


	return (
		<form onSubmit={onSubmit} className="mt-16">
			<TextField
				label="Email"
				type="email"
				id="email"
				name="email"
				onChange={onChange}
				errors={errors.email || errors.emailnotfound}
			/>
			<div className="flex items-center mt-16">
				<Button
					type="submit"
					loading={pendingFormSubmission}
				>
					Reset Password
				</Button>
				<Link to="/login" className="link ml-8">Return to login</Link>
			</div>
		</form>
	)
};

export default ForgotPasswordForm;
