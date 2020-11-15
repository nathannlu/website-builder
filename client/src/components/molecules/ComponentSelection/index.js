import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ComponentSelection = props => {

	const openComponentSelection = selectedNodeId => {
		props.setSelectedNode(selectedNodeId);
		document.body.style.overflow = 'hidden';
		props.setOpen(true);
	}

	const closeComponentSelection = () => {
		props.setSelectedNode(null);
		document.body.style.overflow = '';
		props.setOpen(false);
	}

	return (
		<div className="fixed z-10 inset-0 transition-opacity items-center justify-center" style={props.open ? {display: 'flex'} : {display: 'none'}}>

      <div onClick={closeComponentSelection}  className="absolute inset-0 bg-black opacity-75"></div>

			<div style={{height: '90vh'}} className="relative w-4/5 mx-auto bg-white rounded">
				<div className="px-16 py-8 flex items-center border-b">
					<h6>
						Add a component
					</h6>

					<FontAwesomeIcon className="ml-auto cursor-pointer" onClick={closeComponentSelection} icon={['fas', 'times']} />
				</div>

				<div className="px-16 py-8">
					<div className="my-8">
						<h5>
							Hero header
						</h5>
						<small>
							Place a hero header at the top of each of your pages. It contains the main call to action and crucial info.
						</small>
					</div>

					<div>
						<div className="w-1/4 rounded overflow-hidden border shadow-lg">
							<img src="https://app.unicornplatform.com/static/img/thumbs/header/60.jpg" />		
						</div>
					</div>
				</div>
			</div>
			
    </div>
	)
};

export default ComponentSelection
