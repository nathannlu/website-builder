import React, {useState, useEffect} from 'react';
import RequestDescriptionPanel from '../../components/dashboard/RequestDescriptionPanel';
import RequestAssetsPanel from '../../components/dashboard/RequestAssetsPanel';
import RequestFiletypesPanel from '../../components/dashboard/RequestFiletypesPanel';
import RequestSummaryPanel from '../../components/dashboard/RequestSummaryPanel';
import Switch from 'react-switch';

const RequestTitle = ({props, setFormStage, newRequest, setNewRequest}) =>{
	const onSubmit = e => {
		e.preventDefault();
		
		setFormStage(1);	
	}

	const onChange = e => {
		const {name, value} = e.target;
		setNewRequest({...newRequest, [name]: value});
	}

	return (
		<div>
			<h2 className="py-16">
				Hello props.auth.user.name!
			</h2>
			<p>
				Let's get you started on your first request.
			</p>

			<form onSubmit={onSubmit}>
				<label className="font-bold">
					Name your request
				</label>
				<input type="text" name="title" onChange={onChange} value={newRequest.title} />
				<div className="py-6">
					<b>Pro Tip:</b> Include a design type in your name
					<br />Like flyer, t-shirt, Facebook ad, etc.
				</div>
			</form>
		</div>
	)
};

const RequestDimensions = ({props, setFormStage, newRequest, setNewRequest}) => {
	const onSubmit = e => {
		e.preventDefault();

		setFormStage(2);	
	}

	const onChange = e => {
		const {name, value} = e.target;
		setNewRequest((prevState) => {
			prevState['dimensions'][name] = value	
			return({...prevState});
		})
	}

	return (
		<form onSubmit={onSubmit} >
			<div className="text-left">
				<button type="button" onClick={() => setFormStage(0)}>&larr; Back</button>
			</div>
			<div className="w-full mb-8">
				<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
			</div>
			
			<h3 className="font-bold mb-8">What size should your design be?</h3>
			
			<div style={{backgroundColor: '#fbeeca'}} className="rounded-lg p-8 w-1/3 mx-auto">
				<h4 className="pb-4">Custom</h4>
				<small>What are the dimensions</small>	
				<input type="text" onChange={onChange} value={newRequest.dimensions.size} name="size" />
			</div>

			<button className="btn mt-8 btn-primary">Continue</button>
		</form>
	)
};

const RequestFormManager = props => {
	const requestSchema = {
		title: '',
		dimensions: {
			type: '',
			size: '',
		},
		description: {
			content: '',
			customText: '',
			customAssets: ''
		},
		assets:{
			unsplashAssets: [],
			findForMeDescription: '',
		},
		filetypes: []
	}
	const [newRequest, setNewRequest] = useState(requestSchema);
	const [formStage, setFormStage] = useState(2);
	
	useEffect(() => {
		console.log(newRequest);
	}, [formStage])

	return (
		<div style={{backgroundColor: '#f6f6f4'}} className="h-screen">
			<div className="container mx-auto text-center py-24">
				Currently on stage {formStage}
				<div className="w-2/3 mx-auto bg-white shadow-xl p-16 rounded-lg">
					{{
						0: <RequestTitle newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						1: <RequestDimensions newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						2: <RequestDescriptionPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						3: <RequestAssetsPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						4: <RequestFiletypesPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />,
						5: <RequestSummaryPanel newRequest={newRequest} setNewRequest={setNewRequest} setFormStage={setFormStage} />
					}[formStage]}
				</div>
			</div>
		</div>
	)
};

export default RequestFormManager;
