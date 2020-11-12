import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignupForm from '../../organisms/SignupForm';
import Success from '../../organisms/SignupForm/Success';
import SignupWrapper from '../../templates/SignupWrapper';

const Signup = props => {
	const [onSuccess, setOnSuccess] = useState({success:true});
	// Check if user is logged in
	useEffect(() => {
		if(props.auth.isAuthenticated) {
			props.history.push('/dashboard');
		}
	}, [props.auth])

	return (
		<SignupWrapper>
			{
				onSuccess.success ? (
					<Success />
				) : (
					<>
						<h1>
							Welcome to Agentsquare 
						</h1>
						<p className="mb-3">
							Find your people. Engage your customers. Build your brand. Do it all with Agentsquare’s Web Building Platform. 
						</p>
						<p>
							Already have an account? <Link className="link" to="/login">Log in</Link>
						</p>
						<SignupForm history={props.history} />
					</>
				)
			}
		</SignupWrapper>
	)
};

Signup.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});
	
export default connect(
	mapStateToProps
)(withRouter(Signup));
