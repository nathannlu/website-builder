import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

import Button from '../../atoms/Button';
import ResetPasswordForm from '../../organisms/ResetPasswordForm';
import Success from '../../organisms/ResetPasswordForm/Success';
import SignupWrapper from '../../templates/SignupWrapper';

const Reset = props => {
	// With token, I will need to verify it is valid 
	const { token, id } = qs.parse(props.location.search.substring(1));

	const [isTokenVerified, setIsTokenVerified] = useState(false);
	const [loading, setLoading] = useState(true);
	const [onSuccess, setOnSuccess] = useState({
		success: false
	});

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

	return (
		<SignupWrapper>
			{
				loading ? (
					<div className="flex flex-wrap w-full items-center justify-center" style={{paddingTop: '40%'}}>
						<svg class="spinner" style={{height: '50px'}} viewBox="0 0 50 50">
							<circle class="path" style={{stroke: '#333'}} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
						</svg>
					</div>
				) : isTokenVerified ? 
						onSuccess.success ? (
							<Success />		
						) : (
							<>
								<h1>
									Reset Your Password
								</h1>
								<p>
									Almost done. Enter your new password, and you're good to go.
								</p>
								<ResetPasswordForm 
									token={token} 
									id={id} 
									setOnSuccess={setOnSuccess}
								/>	
							</>
						)
					: (
						<>
							Invalid token
						</>
					)
			}
		</SignupWrapper>
	)
};

export default Reset;
