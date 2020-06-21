import React, {useState, useEffect} from 'react';

const RequestInstructions = props => {
	const [description, setDescription] = useState(['']); 

	const onSubmit = e => {
		e.preventDefault();
	}

	const onChange = e => {
		const {name, value} = e.target;
		setDescription(prevState => {
			prevState[name] = value;
			return([...prevState]);
		})
	}

	const addInputField = () => {
		setDescription(description.concat(''));
	}

	useEffect(() => {
		props.setNewRequest(prevState =>{
			prevState.description.content = description;

			return({...prevState});
		})
	}, [description])

	useEffect(() => {
		if (props.newRequest.description.content.length > 0) setDescription(props.newRequest.description.content);
	}, [])

	return (
		<form onSubmit={onSubmit}>
			{
				description.map((e, i) => (
					<div key={i}>
						<input className="input-underlined mt-6" placeholder="Enter request instructions" onChange={onChange} name={i} value={description[i]} type="text" />
					</div>
				))
			}
			<button className="input-underlined text-left mt-6 text-gray-500" type="button" onClick={() => addInputField()}>Click to add another line</button>
		</form>
	)
};

export default RequestInstructions;
