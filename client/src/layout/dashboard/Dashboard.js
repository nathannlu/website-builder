import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal, {closeStyle} from 'simple-react-modal';

import DeliveredRequestOverview from '../../components/dashboard/DeliveredRequestOverview';
import DeliveredRequestRevision from '../../components/dashboard/DeliveredRequestRevision';

import Request from '../../components/dashboard/Request';
import { logoutUser } from '../../actions/authActions';

const Dashboard = props => {
	const [modalShow, setModalShow] = useState(false);
	const [requests, setRequests] = useState([]);	
	const [deliveredTab, setDeliveredTab] = useState(false);
	const [deliveredRequest, setDeliveredRequest] = useState({});
	const [requestOverviewStage, setRequestOverviewStage] = useState(0);

	const onLogoutClick = e => {
		e.preventDefault();
		props.logoutUser();
	}

	/*
	const addRequest = () => {
		axios.post('/api/requests').then(res => console.log(res));
	}*/

	const deleteRequest = id => {
		axios.delete(`/api/requests/${id}`).then(res => {
			if (res.status === 200) {
				setRequests(requests.filter(request => request._id !== id))
			} else {
				alert('Something went wrong. Please try again or contact support');
			}
		})
	}

	const updateConversation = (note) => {
		axios.put('/api/requests', note).then(res => console.log(res));
	}
	
	const onClickRequest = request => {
		setDeliveredRequest(request)
		setModalShow(true);
	}

	useEffect(() => {
		setRequestOverviewStage(0);	
	}, [modalShow])

	useEffect(() => {
		axios.get('/api/requests').then(res => {
			setRequests(res.data)
			console.log(res.data);
		});
	}, [])
	
	return (
		<div style={{backgroundColor: '#fbeeca'}} className="min-h-screen pb-16">
			<div className="container mx-auto">
		
				<div className="pt-16 pb-6 w-full">
					<h3>My Requests</h3>	
				</div>

				<div className="pt-16">
					<button 
						className={!deliveredTab ? 'btn mr-4' : 'btn opacity-50 mr-4'} 
						onClick={() => setDeliveredTab(false)}
					>
						Queued
					</button>

					<button 
						className={deliveredTab ? 'btn mr-4' : 'btn opacity-50 mr-4'} 
						onClick={() => setDeliveredTab(true)}
					>
						Delivered
					</button>
		
					{!deliveredTab ? (
						<div>
							{requests.filter(request => !request.delivered).length > 0 ? ( 
								<div>
									{requests.filter(request => !request.delivered).map((request, i) => (
										<div key={i}>	
											<Request deleteRequest={deleteRequest} request={request} />	
										</div>
									))}
								</div>
							) : (
								<div className="w-full text-center pt-16">
									<p className="pb-8">No designs queued</p>
									<Link to="/dashboard/create-request" className="btn btn-black">Make a design request here</Link>
								</div>
							)}
						</div>
					) : (
						<div>
							{requests.filter(request => request.delivered).length > 0 ? (
								<div>
									{requests.filter(request => request.delivered).map((request, i) => (
										<div key={i}>	
											<Request onClickRequest={onClickRequest} request={request} />	
										</div>
									))}
								</div>
							) : (
								<div className="w-full text-center pt-16">
									<p className="pb-8">Your work will arrive soon!</p>
								</div>
							)}
						</div>
					)}
				</div>

				<Modal 
					containerStyle={{width:'800px', padding: '4rem'}}
					closeOnOuterClick={true} 
					show={modalShow}
				>
					{
						{
							0: <DeliveredRequestOverview deliveredRequest={deliveredRequest} setRequestOverviewStage={setRequestOverviewStage} setModalShow={setModalShow} />,
							1: <DeliveredRequestRevision props={props} deliveredRequest={deliveredRequest} setRequestOverviewStage={setRequestOverviewStage} updateConversation={updateConversation} setModalShow={setModalShow} />
						}[requestOverviewStage]
					}
				</Modal>

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
