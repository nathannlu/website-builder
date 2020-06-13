import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Request from '../../components/dashboard/Request';
import { logoutUser } from '../../actions/authActions';

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
		
				<div className="bg-gray-200 py-8 w-full">
					<h3>My Requests</h3>	
				</div>

				<div className="pt-24">
					<button className="btn mr-4" onClick={() => setDeliveredTab(false)}>Queued</button>
					<button className="btn" onClick={() => setDeliveredTab(true)}>Delivered</button>
		
					{!deliveredTab ? (
						<div>
							{requests.filter(request => !request.delivered).map((request, i) => (
								<div key={i}>	
									<Request request={request} />	
								</div>
							))}
						</div>
					) : (
						<div>
							{requests.filter(request => request.delivered).map((request, i) => (
								<div key={i}>	
									<Request request={request} />	
								</div>
							))}
						</div>
					)}
				</div>
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
