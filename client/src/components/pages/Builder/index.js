// Module imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

import {Editor, useEditor, Frame, Element} from '@craftjs/core';
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';

// Component imports
import { RenderNode } from './RenderNode';
import Viewport from './Viewport';

// User component imports
import { Container } from '../../user/Container';
import { Button } from '../../user/Button';
import { Image } from '../../user/Image';
import { Text } from '../../user/Text';
import { Biography } from '../../user/Biography';
import { Header } from '../../user/Header';
import { Footer } from '../../user/Footer';
import { Features } from '../../user/Features';
import { MLS } from '../../user/MLS';

import UserComponents from '../../user';

const App = props => {
	const [websiteData, setWebsiteData] = useState('');			// Website data to load
	const [enabled, setEnabled] = useState(false);					// Editor enabler
	const [open, setOpen] = useState(false);								// Modal opener
	const [selectedNode, setSelectedNode] = useState('');		// Saves component node id to determine which node the modal was opened from
	const [openDrawer, setOpenDrawer] = useState(false);		// Component editing drawer handler	


	// Save website data to database
	const saveToDatabase = data => {
		console.log('Saving to:', pageName);
		axios.put('/api/websites/', {pageData: data, pageName: pageName, title: title}).then(res => console.log(res));
	}

	// Handle component modal opening
	const openComponentSelection = selectedNodeId => {
		setSelectedNode(selectedNodeId);
		document.body.style.overflow = 'hidden';
		setOpen(true);
	}

	const openComponentEditor = selectedNodeId => {
		setSelectedNode(selectedNodeId);
		setOpenDrawer(true);
	}
	

	// Used to query DB for page data
	const {title, pageName} = props.match.params;

	// Load website data on load
	useEffect(() => {
		axios.get(`/api/websites/${title}/${pageName}`).then(res => {
			const base64 = res.data.pages.find(page => page.pageName === pageName).pageData
			const uint8array = lz.decodeBase64(base64);
			const json = lz.decompress(uint8array);
			
			setWebsiteData(json);
			setEnabled(true);
		});
	}, []);

	return (

			<Editor 
				onRender={render => RenderNode(render, openComponentSelection, openComponentEditor)} 
				resolver={UserComponents}
			>
				<Viewport 
					open={open}
					setOpen={setOpen}
					selectedNode={selectedNode}
					setSelectedNode={setSelectedNode}
					saveToDatabase={saveToDatabase}
					openDrawer={openDrawer}
					setOpenDrawer={setOpenDrawer}
				>
					{enabled && (
						<Frame data={websiteData}>
							<Element 
								is={Container} 
								className="bg-white relative website" 
								canvas
							>
								<Element is={Header} />
								<Element is={Biography} />
								<Element is={Footer} />
							</Element>
						</Frame>
					)}
				</Viewport>
			</Editor>
	);
};

App.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(App);
