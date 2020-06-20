import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal';

const DeliveredRequestRevision = ({deliveredRequest, setRequestOverviewStage, setModalShow}) => {
	return (
		<div>
			<a style={closeStyle} onClick={() => setModalShow(false)}>X</a>	
			<div>
				<h4 className="mb-8">{deliveredRequest.title}</h4>

				<hr />
				<div className="my-8">
					<p className="font-bold pb-4">Submit for revision</p>
					<textarea placeholder="What would you like to see changed?"></textarea>
					<button className="btn btn-black">Submit for revision</button>
				</div>
				<hr />

				<div className="w-full mt-8">
					<a className="link" onClick={() => setRequestOverviewStage(0)}>&larr; Go back</a>
				</div>
			</div>
		</div>
	)
};

export default DeliveredRequestRevision;
