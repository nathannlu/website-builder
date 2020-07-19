import React, {useState, useEffect} from 'react';
import { Drawer, Box, Chip, Grid, Typography, Button, FormControl, FormLabel, Slider } from "@material-ui/core";
import { useEditor } from '@craftjs/core';

export const SettingsPanel = props => {
	const { actions, selected, connectors: {select} } = useEditor((state, query) => {
		const currentNodeId = state.events.selected;
		let selected;


		if (currentNodeId) {
			selected = {
				id: currentNodeId,
				name: state.nodes[currentNodeId].data.name,
				settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
				isDeletable: query.node(currentNodeId).isDeletable()
			};
		}

		return { selected };
	})

	const handleClose = () => {
		props.setOpenDrawer(false)
		actions.selectNode(null);
	}


	return selected ? (
		<Drawer anchor="right" open={props.openDrawer} onClose={handleClose}>
			<div className="p-4">
				{ selected.name}
				{
					selected.settings && React.createElement(selected.settings) 
				}
				{
					selected.isDeletable ? (
						<Button
							variant="contained"
							color="default"
							onClick={() => {
								actions.delete(selected.id);
							}}
						>
							Delete
						</Button>
					) : null 
				}
			</div>
		</Drawer>
	) : null
};
