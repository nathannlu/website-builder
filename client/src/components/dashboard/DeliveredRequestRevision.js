import React, {useState, useEffect} from 'react';
import Modal, {closeStyle} from 'simple-react-modal';

const DeliveredRequestRevision = ({props, deliveredRequest, setRequestOverviewStage, updateConversation, setModalShow}) => {
	const initialFormState = {
		requestId:deliveredRequest._id,
		author: {
			name: props.auth.user.name,
			id: props.auth.user.id 
		},
		content: '',
	}
	const [newNote, setNewNote] = useState(initialFormState);

	const onChange = e => {
		const {name, value} = e.target
		setNewNote({...newNote, [name]: value});
	}

	const onSubmit = e => {
		updateConversation(newNote);
	}

	return (
		<div>
			<a style={closeStyle} onClick={() => setModalShow(false)}>X</a>	
			<div>
				<h4 className="mb-8">{deliveredRequest.title}</h4>

				<hr />
				<form onSubmit={onSubmit} className="my-8">
					<p className="font-bold pb-4">Submit for revision</p>
					<textarea name="content" value={newNote.content} onChange={onChange} placeholder="What would you like to see changed?"></textarea>
					<button className="btn btn-black">Submit for revision</button>
				</form>
				<hr />

				<div className="w-full mt-8">
					<a className="link" onClick={() => setRequestOverviewStage(0)}>&larr; Go back</a>
				</div>
			</div>
		</div>
	)
};

export default DeliveredRequestRevision;
