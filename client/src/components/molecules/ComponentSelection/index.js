import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEditor, useNode } from '@craftjs/core';

import { Features } from '../../user/Features'

const ComponentSelection = props => {
	const { actions: {add, move}, query: {createNode, node} } = useEditor();

	const addComponent = component => {
		// Finds the index of the component in the DOM tree with the 'add a component' button
		const nodeIndex = node('ROOT').get().data.nodes.findIndex(arrItem => arrItem == props.selectedNode) + 1

		// Creates new component with parameters 
		const newComponent = createNode(React.createElement(component, {}));

		// Adds component to the DOM tree 
		add(newComponent, 'ROOT');

		// Adding a component adds to top of the DOM tree.
		// We need to move the new component underneath the 'add a component' button.
		move(newComponent.id, 'ROOT', nodeIndex);
		// console.log('Added', newComponent.id, 'to index', nodeIndex);
		
		closeComponentSelection();
	}


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
						<button 
							onClick={() => addComponent(Features)}
							className="w-1/4 rounded overflow-hidden border shadow-lg"
						>
							<img src="https://app.unicornplatform.com/static/img/thumbs/header/60.jpg" />		
						</button>
					</div>
				</div>
			</div>
			
    </div>
	)
};

export default ComponentSelection
