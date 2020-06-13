import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CreateRequest = props => {
	const initialFormState = {
		title: '',
		description: '',
		dimensions: '',
	}
	const [newRequest, setNewRequest] = useState(initialFormState);

	const onChange = e => {
    const { name, value } = e.target;
    
    setNewRequest({ ...newRequest, [name]: value });
  }

	const onSubmit = e => {
		e.preventDefault();
		
		console.log(newRequest);
		axios.post('/api/requests', newRequest).then(res => { 
			if(res.status == 200) props.history.push('/dashboard');
		});
	}
	return (
		<div>
			<h2>Create Request</h2>
			<form onSubmit={onSubmit}>
			 	
				<div>
					<input 
						onChange={onChange}
						value={newRequest.title}
						id="title"
						name="title"
						type="text"
					/>
					<label htmlFor="title">Title</label>
				</div>
				<div>
					<input 
						onChange={onChange}
						value={newRequest.description}
						id="description"
						name="description"
						type="text"
					/>
					<label htmlFor="description">description</label>
				</div>
				<div>
					<input 
						onChange={onChange}
						value={newRequest.dimensions}
						id="dimensions"
						name="dimensions"
						type="text"
					/>
					<label htmlFor="dimensions">dimensions</label>
				</div>
				<button type="submit" className="btn btn-black">Submit</button>
			</form>
		</div>
	)
};

export default CreateRequest
