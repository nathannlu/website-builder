import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Alert from '../../atoms/Alert';
import Button from '../../atoms/Button';
import TextField from '../../atoms/TextField';
import ForgotPasswordForm from '../../organisms/ForgotPasswordForm';
import Success from '../../organisms/ForgotPasswordForm/Success';
import SignupWrapper from '../../templates/SignupWrapper';

const ForgotPassword = props => {
	const [onSuccess, setOnSuccess] = useState({
		success: false,
		email: ''
	});

	return (
		<SignupWrapper>
			{onSuccess.success ? <Success email={onSuccess.email} /> 
			: (
				<>
					<h1>
						Reset Your Password
					</h1>
					<p className="mb-3">
						Fear not. We’ll email you instructions to reset your password. If you don’t have access to your email anymore, please contact support.
					</p>
					<ForgotPasswordForm setOnSuccess={setOnSuccess} />
				</>
			)}
		</SignupWrapper>
	)
};

export default ForgotPassword;

