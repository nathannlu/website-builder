import React from 'react';
import { logoutUser } from '../../actions/authActions';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Account = props => {
	const onLogoutClick = e => {
		e.preventDefault();
		props.logoutUser();
	}

	return (
		<div style={{backgroundColor: '#fbeeca'}} className="min-h-screen pb-16">
			<div className="container mx-auto">
				<h3 className="pt-16 pb-6 w-full">Account page</h3>
				<h4>Personal Information</h4>

				<div className="pt-8">
					<p><span className="font-bold">Name: </span>{props.auth.user.name}</p>
				</div>
				<div className="pb-8">
					<p><span className="font-bold">Email: </span>{props.auth.user.email}</p>
				</div>

				<button className="btn btn-black my-4" onClick={onLogoutClick}>Logout</button>
			</div>
		</div>
	)
};

Account.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Account);
