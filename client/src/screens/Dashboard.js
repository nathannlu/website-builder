import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

const Dashboard = props => {
	const [requests, setRequests] = useState([]);	

	const onLogoutClick = e => {
		e.preventDefault();
		props.logoutUser();
	}

	const newRequest = () => {
		axios.post('/api/requests').then(res => console.log(res));
	}

	useEffect(() => {
		axios.get('/api/requests').then(res => setRequests(res.data));
	}, [])
	
	return (
		<div>
			<h1>User Dashboard</h1>
			<p>Your design requests</p>
			{requests.map((request, i) => (
				<div key={i}>
					{request.title}
				</div>
			))}

			<button onClick={newRequest}>New request</button>
			<button onClick={onLogoutClick}>Logout</button>
		</div>
	)
};

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Dashboard);
