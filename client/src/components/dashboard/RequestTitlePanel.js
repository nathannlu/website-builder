import React from 'react';

const RequestTitlePanel = ({props, setFormStage, newRequest, setNewRequest}) =>{
	const onSubmit = e => {
		e.preventDefault();
		if(newRequest.title.length > 0) {
			setFormStage(1);	
		} else {
			alert('Title cannot be left empty.')
		}
	}

	const onChange = e => {
		const {name, value} = e.target;
		setNewRequest({...newRequest, [name]: value});
	}

	return (
		<div>
			<h2 className="pt-16 pb-4">
				Hello {props.auth.user.name}!
			</h2>
			<p className="pb-8">
				Let's get you started on your request.
			</p>

			<form onSubmit={onSubmit}>
				<div className="font-bold pb-4">
					Name your request
				</div>
				<input type="text" name="title" onChange={onChange} value={newRequest.title} />
				<div className="py-6">
					<b>Pro Tip:</b> Include a design type in your name
					<br />Like flyer, t-shirt, Facebook ad, etc.
				</div>
			</form>
		</div>
	)
};

export default RequestTitlePanel;
