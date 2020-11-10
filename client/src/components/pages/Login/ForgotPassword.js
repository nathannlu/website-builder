import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import SignupWrapper from '../../templates/SignupWrapper';

const ForgotPassword = props => {
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
					console.log('ass');	

					// @TODO Load success page
				}
			})
			.catch(err => {
// 				setErrors({email: 'Please enter a value'});
				setErrors({email: 'A user with this email does not exist'});
			})
			.then(() => setPendingFormSubmission(false))
	}

	// Reset errors when component mounts
	useEffect(() => {
		setErrors({});	
	}, [])

	return (
		<SignupWrapper>
			<h1>
				Reset Your Password
			</h1>
			<p className="mb-3">
				Fear not. We’ll email you instructions to reset your password. If you don’t have access to your email anymore, please contact support.
			</p>
			<form onSubmit={onSubmit} className="mt-16">
				<TextField
					label="Email"
					type="email"
					id="email"
					name="email"
					onChange={onChange}
					errors={errors.email}
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
		</SignupWrapper>
	)
};

export default ForgotPassword

