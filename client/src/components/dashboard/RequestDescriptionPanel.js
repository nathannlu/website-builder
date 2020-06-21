import React, {useState, useEffect} from 'react';
import ReactFilestack from 'filestack-react';
import RequestInstructions from '../RequestInstructions';
import RequestCustomText from '../RequestCustomText';
import RequestCustomAssets from '../RequestCustomAssets';
import Switch from 'react-switch';
import axios from 'axios';

const RequestDescriptionPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
	const [checkedCustomAssets, setCheckedCustomAssets] = useState(false);

	const onSubmit = e => {
		e.preventDefault();
	}

	const continueButtonHandler = () => {
		setFormStage(3);
		console.log(newRequest);
	}

	return (
		<div>
			<div className="text-left">
					<button type="button" onClick={() => setFormStage(1)}>&larr; Back</button>
			</div>
			<section className="mb-16">
				<div className="w-full mb-8">
					<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				</div>

				<div className="mb-8">
					<h3 className="font-bold mb-6">What are you looking for?</h3>	
					<p>
						Use sentences or paragraphs below to share your request. When you press enter, we'll create a new line for you. After you're done, we'll take each line and create a request checklist for your designer.
					</p>
				</div>
				<RequestInstructions newRequest={newRequest} setNewRequest={setNewRequest} />
			</section>
			
			<section className="mb-12 text-left">
				<h4 className="pr-8 pb-6">Does your design need to include text?</h4>
				<RequestCustomText newRequest={newRequest} setNewRequest={setNewRequest} />
			</section>

			<section className="mb-16 text-left">
				<h4 className="pr-8 pb-6">Do you have any assets to upload?</h4>
				<RequestCustomAssets newRequest={newRequest} setNewRequest={setNewRequest} />
			</section>

			<button onClick={() => continueButtonHandler()} className="btn mt-8 btn-primary">Continue</button>
		</div>
	)
};			
export default RequestDescriptionPanel;
