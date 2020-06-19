import React from 'react';

const RequestDimensionsPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
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
			
			<div style={{backgroundColor: '#f6f6f4'}} className="rounded-lg border p-8 w-1/3 mx-auto">
				<h4 className="pb-4">Custom</h4>
				<img className="mx-auto py-8" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				<small className="pb-4 inline-block">What are the dimensions</small>	
				<input type="text" onChange={onChange} value={newRequest.dimensions.size} name="size" />
			</div>

			<button className="btn mt-8 btn-primary">Continue</button>
		</form>
	)
}

export default RequestDimensionsPanel;
