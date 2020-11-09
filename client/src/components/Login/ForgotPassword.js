import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = props => {

	const onChange = e => {
		const { name, value } = e.target;

	}

	return (
		<div className="bg-black min-h-screen">
			<div className="bg-white min-h-screen w-3/5 py-48">
				<div className="w-2/3 mx-auto">
					<h1>
						Reset Your Password
					</h1>
					<p className="mb-3">
						Fear not. We’ll email you instructions to reset your password. If you don’t have access to your email anymore, please contact support.
					</p>
					<form className="mt-16">
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
							{/*
								props.errors.email && (
									<span style={{color: '#a73205', fontSize: '1.4rem', fontWeight: 600}}>
										{props.errors.email}
									</span>
								)
								*/}
						</div>
						<div className="flex items-center mt-16">
							<button type="submit" className="btn btn-primary"> 
								Reset Password
							</button>
							<Link to="/login" className="link ml-8">Return to login</Link>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
};

export default ForgotPassword

