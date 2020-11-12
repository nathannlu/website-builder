import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

const Dashboard = props => {
	return (
		<div className="container mx-auto pt-40">
			<h1>
				Dashboard
			</h1>
			<Link className="btn btn-primary" to="/dashboard/sites/new">Create website</Link>
			<button onClick={() => props.logoutUser()}>
				Logout
			</button>
		</div>
	)
};

Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,	
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser } 
)(Dashboard);
