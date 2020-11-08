import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = props => {
	// User form handler
	const initialFormState = {
		email: '',	
		password: ''
	}
	const [user, setUser] = useState(initialFormState);

	// Handle show password
	const [isRevealPassword, setIsRevealPassword] = useState(false);

	// Handle form input 
	const onChange = e => {
		const { name, value } = e.target;

		setUser({...user, [name]: value});
	}

	// Login form submission handler
	const onSubmit = e => {
		e.preventDefault();

		props.loginUser(user);
	}

	// Handle existing JWT token
	useEffect(() => {
		if(props.auth.isAuthenticated) {
			props.history.push('/dashboard');
		}
	}, [props])

	return (
		<div className="bg-black min-h-screen">
			<div className="bg-white min-h-screen w-2/5 py-48">
				<div className="w-2/3 mx-auto">
					<h1>
						Log In
					</h1>
					<p className="mb-3">
						Need a Mailchimp account? <Link className="link" to="/signup">Create an account</Link>
					</p>

					<form onSubmit={onSubmit} className="mt-16">
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

						<div className="mb-12">
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

						<button className="btn btn-primary w-full" type="submit">
							Log In
						</button>
					</form>
				</div>
			</div>
		</div>
	)
};

Login.propTypes ={
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
