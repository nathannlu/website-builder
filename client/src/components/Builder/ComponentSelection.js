import React from 'react';
import { Fade, Modal, Grid, Button, Container } from '@material-ui/core';
import { useEditor, useNode } from '@craftjs/core';
import { Biography } from '../user/Biography';
import { Features } from '../user/Features';
import { Header } from '../user/Header';
import { Footer } from '../user/Footer';

const ComponentSelection = props => {
	const { actions: {add, move}, query: {createNode, node} } = useEditor();

	const addComponent = (component) => {
		const nodeIndex = node('ROOT').get().data.nodes.findIndex(arrItem => arrItem == props.selectedNode) + 1
		const newComponent = createNode(React.createElement(component, {}));

		add(newComponent, 'ROOT');
		move(newComponent.id, 'ROOT', nodeIndex);

		console.log('Added', newComponent.id, 'to index', nodeIndex);

		props.setOpen(false);	
	}

	return (
		<Modal 
			style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
			onBackdropClick={() => props.setOpen(false)}
			open={props.open}
		>
			<Fade in={props.open}>
				<div className="container p-4 z-10 bg-white rounded">
					<Grid>
						<Button variant="contained" onClick={() => addComponent(Biography)}>
							Biography	
						</Button>
					</Grid>

					<Grid>
						<Button variant="contained" onClick={() => addComponent(Features)}>
							Features
						</Button>
					</Grid>

					<Grid>
						<Button variant="contained" onClick={() => addComponent(Header)}>
							Header
						</Button>
					</Grid>

					<Grid>
						<Button variant="contained" onClick={() => addComponent(Footer)}>
							Footer	
						</Button>
					</Grid>
				</div>
			</Fade>
		</Modal>
	)
};

export default ComponentSelection;
