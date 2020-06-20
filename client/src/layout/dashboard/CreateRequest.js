import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';
import axios from 'axios'
import RequestTitlePanel from '../../components/dashboard/RequestTitlePanel';
import RequestDimensionsPanel from '../../components/dashboard/RequestDimensionsPanel';
import RequestDescriptionPanel from '../../components/dashboard/RequestDescriptionPanel';
import RequestAssetsPanel from '../../components/dashboard/RequestAssetsPanel';
import RequestFiletypesPanel from '../../components/dashboard/RequestFiletypesPanel';
import RequestSummaryPanel from '../../components/dashboard/RequestSummaryPanel';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RequestFormManager = props => {
	const requestSchema = {
		title: '',
		author: {
			name: props.auth.user.name 
		},
		dimensions: {
			type: '',
			size: '',
		},
		description: {
			content: '',
			customText: '',
			customAssets: [] 
		},
		assets:{
			unsplashAssets: [],
			findForMeDescription: '',
		},
		filetypes: []
	}
	const [newRequest, setNewRequest] = useState(requestSchema);
	const [formStage, setFormStage] = useState(0);

	const createNewRequest = () => {
		axios.post('/api/requests', newRequest).then(res => { 
			if(res.status == 200) props.history.push('/dashboard');
		});
	}



	/*
	useEffect(() => {
		console.log(newRequest);
	}, [formStage])
	*/

	return (
		<div style={{backgroundColor: '#fbeeca'}} className="min-h-screen">
			<div className="container mx-auto text-center py-24">
				<p className="font-bold pb-8">Step {formStage}/5</p>	
				<div className="w-2/3 mx-auto bg-white shadow-xl p-16 rounded-lg">
					{{
						0: <RequestTitlePanel props={props} newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						1: <RequestDimensionsPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						2: <RequestDescriptionPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						3: <RequestAssetsPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						4: <RequestFiletypesPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						5: <RequestSummaryPanel createNewRequest={createNewRequest} newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />
					}[formStage]}
				</div>
			</div>
		</div>
	)
};

RequestFormManager.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
)(RequestFormManager);
