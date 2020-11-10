import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../atoms/Alert';

const Success = props => {
	return (
		<>
			<h1>
				Done And Done!
			</h1>

			<Alert severity="success">
				<h6>
					Success!
				</h6>
				We've sent an email to {props.email} with password reset instructions.
			</Alert>

			<p className="mt-8">
				If the email doesn't show up soon, check your spam folder. We sent it from <span style={{fontWeight: 600}}>support@agentsquare.com</span>.
			</p>
			<Link to="/login" className="inline-block btn btn-primary mt-8">Return to login</Link>
		</>	
	)
};

export default Success;
