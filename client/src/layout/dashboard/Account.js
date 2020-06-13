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
		<div>

			<h2>Account page</h2>
			<button className="btn btn-black my-4" onClick={onLogoutClick}>Logout</button>

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
