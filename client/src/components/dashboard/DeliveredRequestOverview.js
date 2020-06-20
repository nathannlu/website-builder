import React from 'react';
import Conversation from '../../components/dashboard/Conversation';
import Modal, {closeStyle} from 'simple-react-modal';

const DeliveredRequestOverview = ({deliveredRequest, setRequestOverviewStage, setModalShow}) => {
	const sample_conversation = [
		{author: 'Charles Mullany', content: 'I want a logo done'},
		{author: 'Nathan Lu', content: 'ok'}
	]
	return (
		<div>
			<a style={closeStyle} onClick={() => setModalShow(false)}>X</a>	
			<div>
				<h4 className="mb-8">{deliveredRequest.title}</h4>

				<hr />

				<div className="py-8">
					<p><span className="font-bold">Submitted:</span> {deliveredRequest.createdAt}</p>
					<p><span className="font-bold">By:</span> {deliveredRequest.author.name}</p>
					<p><span className="font-bold">Last Updated:</span> {deliveredRequest.updatedAt}</p>
				</div>

				<button className="btn btn-black w-full mb-8">Download all current files</button>

				<div className="w-full flex flex-wrap mb-8">
					<div className="w-1/5 px-4">
						<img className="ticket_thumbnail" src="https://cdn.filestackcontent.com/rtH4XinR3KDK3nE7fN0g" />	
						<label className="font-bold">JPG</label>
					</div>
					<div className="w-1/5 px-4">
						<img className="ticket_thumbnail" src="https://cdn.filestackcontent.com/rtH4XinR3KDK3nE7fN0g" />	
						<label className="font-bold">JPG</label>
					</div>
					<div className="w-1/5 px-4">
						<img className="ticket_thumbnail" src="https://cdn.filestackcontent.com/rtH4XinR3KDK3nE7fN0g" />	
						<label className="font-bold">JPG</label>
					</div>
				</div>

				<div className="w-full mb-8">
					<Conversation conversation={deliveredRequest.conversation} />
				</div>

				<hr />
				<div className="w-full mt-8">
					<a className="link" onClick={() => setRequestOverviewStage(1)}>Resubmit for revision &rarr;</a>
				</div>
			</div>
		</div>	
	)
};

export default DeliveredRequestOverview;
