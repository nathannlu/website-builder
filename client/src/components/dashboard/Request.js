import React from 'react';

const Request = ({request, onClickRequest, deleteRequest})  => {
	return (
		<div className="shadow-xl rounded bg-white p-6 mb-6 flex">
			<img className="pl-4 py-4 pr-12" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
			<div className="">
				<a className="cursor-pointer hover:underlined" onClick={() => request.delivered ? onClickRequest(request) : ''}>
					<h4>{request.title}</h4>
				</a>
				<div className="my-3 opacity-50">Request #{request._id} | by You | via Website | {!request.delivered ? 'Queued' : 'Delivered'}</div>
				{!request.delivered ? (
					<div onClick={() => deleteRequest(request._id)} className="text-red-500">Delete request</div>
				) : (	
					<div className="text-green-500">Download files</div>
				)}
			</div>	
		</div>
	)
};

export default Request;
