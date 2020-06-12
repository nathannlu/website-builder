import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

const Dashboard = props => {
	const [requests, setRequests] = useState([]);	
	const [deliveredTab, setDeliveredTab] = useState(false);

	const onLogoutClick = e => {
		e.preventDefault();
		props.logoutUser();
	}

	const addRequest = () => {
		axios.post('/api/requests').then(res => console.log(res));
	}

	useEffect(() => {
		axios.get('/api/requests').then(res => setRequests(res.data));
	}, [])
	
	return (
		<div>
			<div className="container mx-auto">
				<button className="btn btn-black my-4" onClick={onLogoutClick}>Logout</button>
		
				<h2>Your Design Requests</h2>
				<button className="btn mr-4" onClick={() => setDeliveredTab(false)}>Queued</button>
				<button className="btn" onClick={() => setDeliveredTab(true)}>Delivered</button>
	
				{/*!deliveredTab ? (
					<div>
						Queued files go here 
					</div>
				) : (
					<div>
						Delivered requests go her
					</div>
				)*/}
				{requests.map((request, i) => (
					<div key={i}>
						{request.title} - delivered: {request.delivered.toString()}
					</div>
				))}

				<button className="btn btn-black my-4" onClick={addRequest}>New request</button>
			</div>
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
