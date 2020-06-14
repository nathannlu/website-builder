import React from 'react';

const Request = ({request})  => {
	return (
		<div className="bg-gray-300 p-6 mb-6 flex">
			<img className="mr-4" src="https://via.placeholder.com/150" />	
			<div className="">
				<h4>{request.title}</h4>
				<div className="my-3 opacity-50">Request #{request._id} | by You | via Website | {!request.delivered ? 'Queued' : 'Delivered'}</div>
				{!request.delivered ? (
					''	
				) : (	
					<div className="text-green-500">Download files</div>
				)}
			</div>	
		</div>
	)
};

export default Request;
