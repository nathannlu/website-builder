import React, { useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

const Register = ({props}) => {
	const [user, setUser] = useState({name: '', email: '', password: '', password2: ''});
	const [errors, setErrors] = useState({});	
	

  const onChange = e => {
    const { name, value } = e.target;
   	
    setUser({ ...user, [name]: value });
  }

	const onSubmit = e => {
		e.preventDefault();

		props.registerUser(user, props.history);
	}

	useEffect(() => {
		if(props.errors) {
			setErrors(props.errors);
		}
	}, [props.errors])

	return (
		<div>
			<h1>Register</h1>
			<form noValidate onSubmit={onSubmit}>
				<div>
					<input
						onChange={onChange}
						value={user.name}
						error={errors.name}
						id="name"
						name="name"
						type="text"
						classnames={classnames("", {
							invalid: errors.name
						})}
					/>
					<label htmlFor="name">Name</label>
					<span>{errors.name}</span>
				</div>
				<div>
					<input
						onChange={onChange}
						value={user.email}
						error={errors.email}
						id="email"
						name="email"
						type="email"
						classnames={classnames("", {
							invalid: errors.email
						})}
					/>
					<label htmlFor="email">Email</label>
					<span>{errors.email}</span>
				</div>
				<div>
					<input
						onChange={onChange}
						value={user.password}
						error={errors.password}
						id="password"
						name="password"
						type="password"
						classnames={classnames("", {
							invalid: errors.password
						})}
					/>
					<label htmlFor="password">Password</label>
					<span>{errors.password}</span>
				</div>
				<div>
					<input
						onChange={onChange}
						value={user.password2}
						error={errors.password2}
						id="password2"
						name="password2"
						type="password"
						classnames={classnames("", {
							invalid: errors.password2
						})}
					/>
					<label htmlFor="password2">Confirm password</label>
					<span>{errors.password2}</span>
				</div>
				<button>Sign up</button>
			</form>
		</div>
	)
};

const PaymentPlan = ({props, setOnboardingStage}) => {
	return (
		<div>
			plans

			<button onClick={() => setOnboardingStage(2)}>Next</button>
		</div>
	)
};

const Checkout = ({props}) => {
	return (
		<div>
			Checkout page
		</div>
	)
};

const Onboarding = props => {
	const [onboardingStage, setOnboardingStage] = useState(0);

	useEffect(() => {
		if(props.auth.isAuthenticated) {
			// Needs to check if user has paid	
			setOnboardingStage(1);
			console.log(`Logged in as ${props.auth.user.name}`);
		}
	}, [props.auth])
	
	return (
		<div>
			{{
				0: <Register props={props} />,
				1: <PaymentPlan props={props} setOnboardingStage={setOnboardingStage} />,
				2: <Checkout props={props} />
			}[onboardingStage]}
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
