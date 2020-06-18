import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Title = ({newRequest, onChange, setFormStage}) => {
	return (
		<div className="bg-gray-300 h-full flex flex-wrap p-16">
			<div className="w-full text-center">
				<label className="block mb-8" htmlFor="title">
					<h3>Title</h3>
				</label>
				<input 
					onChange={onChange}
					value={newRequest.title}
					id="title"
					name="title"
					type="text"
				/>
			</div>
			<div className="block self-end ml-auto btn btn-black">
				<button onClick={() => setFormStage(1)}>Next</button>
			</div>	
		</div>
	)
};

const Description = ({newRequest, onChange, setFormStage}) => {
	return (
		<div className="bg-gray-300 h-full flex flex-wrap p-16">
			<div className="w-full text-center">
				<label className="block mb-8" htmlFor="description">
					<h3>description</h3>
				</label>
				<input 
					onChange={onChange}
					value={newRequest.description}
					id="description"
					name="description"
					type="text"
				/>
			</div>
			<div className="block self-end ml-auto btn btn-black">
				<button onClick={() => setFormStage(2)}>Next</button>
			</div>	
		</div>
	)
};

const Dimensions = ({newRequest, onChange, setFormStage}) => {
	return (
		<div className="bg-gray-300 h-full flex flex-wrap p-16">
			<div className="w-full text-center">
				<label className="block mb-8" htmlFor="dimensions">
					<h3>dimensions</h3>
				</label>
				<input 
					onChange={onChange}
					value={newRequest.dimensions}
					id="dimensions"
					name="dimensions"
					type="text"
				/>	
			</div>
			<div className="block self-end ml-auto btn btn-black">
		<button type="submit" className="btn btn-black">Submit</button>
			</div>	
		</div>
	)

};


const CreateRequest = props => {
	const initialFormState = {
		title: '',
		description: '',
		dimensions: '',
	}
	const [newRequest, setNewRequest] = useState(initialFormState);
	const [formStage, setFormStage] = useState(0);

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
			<div className="container mx-auto">
				<div className="bg-gray-200 py-8 mb-24 w-full">
					<h3>Create Request</h3>	
				</div>

				<form style={{height: '500px'}} onSubmit={onSubmit}>
					{{
						0: <Title newRequest={newRequest} onChange={onChange} setFormStage={setFormStage} />,
						1: <Description newRequest={newRequest} onChange={onChange} setFormStage={setFormStage} />,
						2: <Dimensions newRequest={newRequest} onChange={onChange} setFormStage={setFormStage} />
					}[formStage]}
				</form>
			</div>	
		</div>
	)
};

export default CreateRequest
