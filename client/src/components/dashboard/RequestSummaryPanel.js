import React from 'react';
import RequestInstructions from '../RequestInstructions';
import RequestCustomText from '../RequestCustomText';
import RequestCustomAssets from '../RequestCustomAssets';
import RequestAssets from '../RequestAssets';
import RequestFiletypes from '../RequestFiletypes';

const RequestSummaryPanel = ({props, setFormStage, newRequest, setNewRequest, createNewRequest}) => {
	const onSubmit = e => {
		e.preventDefault();

		createNewRequest();
		console.log('submitted to designer');	
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="text-left">
				<button type="button" onClick={() => setFormStage(4)}>&larr; Back</button>
			</div>
			<div className="w-full mb-8">
				<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
			</div>

			<h3 className="font-bold mb-8">Summary</h3>	
			<hr />
		
			<section className="text-left py-8">
				<h4 className="pb-6 ">Dimensions</h4>
				<input />	
			</section>
			<hr />
			<section className="text-left py-8">
				<h4 className="pb-6 ">Description</h4>
				<p className="pb-6">
					Use sentences or paragraphs below to share your request. When you press enter, we'll create a new line for you. After you're done, we'll take each line and create a request checklist for your designer.
				</p>
				<RequestInstructions newRequest={newRequest} setNewRequest={setNewRequest} />
				
				<div className="py-8">
					<p className="font-bold pb-4">Does your design need to include text?</p>
					<RequestCustomText newRequest={newRequest} setNewRequest={setNewRequest} />
				</div>
				<div className="">
					<p className="font-bold pb-4 inline-block">Do you have any assets to upload?</p>
					<RequestCustomAssets newRequest={newRequest} setNewRequest={setNewRequest} />
				</div>
			</section>
			<hr />
			<section className="text-left py-8">
				<h4 className="pb-6">Assets</h4>
				<RequestAssets newRequest={newRequest} setNewRequest={setNewRequest} />	
			</section>

			<hr />
			<section className="text-left py-8">
				<h4 className="pb-6">File Types</h4>
				<RequestFiletypes newRequest={newRequest} setNewRequest={setNewRequest} />
			</section>

			<button className="btn btn-primary mt-6">Send to my designer</button>
		</form>
	)
};

export default RequestSummaryPanel;
