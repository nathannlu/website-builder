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
				Your password has been updated
			</Alert>

			<Link to="/login" className="inline-block btn btn-primary mt-8">Return to login</Link>
		</>	
	)
};

export default Success;
