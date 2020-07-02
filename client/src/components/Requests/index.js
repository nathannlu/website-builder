import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Requests = () => {
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		axios.get('/api/requests').then(res => {
			setRequests(res.data)
			console.log(res.data);
		});
	}, [])

	return (
		<div>
			requests go ehre
		</div>
	)
};

export default Requests;
