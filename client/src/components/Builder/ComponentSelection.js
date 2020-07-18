import React from 'react';
import { Modal, Grid, Button, Container } from '@material-ui/core';
import { useEditor, useNode } from '@craftjs/core';
import { Biography } from '../user/Biography';
import { Features } from '../user/Features';

const ComponentSelection = props => {
	const { actions: {add, move}, query: {createNode, node} } = useEditor();


	return (
		<Modal 
			style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
			onBackdropClick={() => props.setOpen(false)}
			open={props.open}
		>
			<div className="container z-10 bg-white">
				<Grid>
					<Button variant="contained" onClick={() => {
						const nodeIndex = node('ROOT').get().data.nodes.findIndex(arrItem => arrItem == props.selectedNode) + 1
						const newComponent = createNode(React.createElement(Biography, {}));

						add(newComponent, 'ROOT');
						move(newComponent.id, 'ROOT', nodeIndex);

						console.log('Added', newComponent.id, 'to index', nodeIndex);

						props.setOpen(false);
					}}>
						Biography	
					</Button>
				</Grid>

				<Grid>
					<Button variant="contained" onClick={() => {
						const nodeIndex = node('ROOT').get().data.nodes.findIndex(arrItem => arrItem == props.selectedNode) + 1
						const newComponent = createNode(React.createElement(Features, {}));

						add(newComponent, 'ROOT');
						move(newComponent.id, 'ROOT', nodeIndex);

						console.log('Added', newComponent.id, 'to index', nodeIndex);

						props.setOpen(false);
					}}>
						Features
					</Button>
				</Grid>

				<Grid>
					<Button variant="contained" onClick={() => {
						const nodeIndex = node('ROOT').get().data.nodes.findIndex(arrItem => arrItem == props.selectedNode)
						
						//	move(props.selectedNode,'ROOT', nodeIndex);
						
						props.setOpen(false);
					}}>
						penis
					</Button>
				</Grid>
			</div>
		</Modal>
	)
};

export default ComponentSelection;
