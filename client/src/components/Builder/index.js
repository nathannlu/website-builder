// Module imports
import React, {useState, useEffect} from 'react';
import { Modal, Grid, Box, Button as MaterialButton, FormControlLabel, Switch, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar} from '@material-ui/core'; 
import {Editor, useEditor, Frame, Element} from '@craftjs/core';
import axios from 'axios';
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

// Component imports
import { SettingsPanel } from './SettingsPanel';
import Navbar from './Navbar';
import ComponentSelection from './ComponentSelection';
import { Toolbox } from './Toolbox';
import { RenderNode } from './RenderNode';
import Viewport from './Viewport';

// User component imports
import { Container } from '../user/Container';
import { Button } from '../user/Button';
import { Image } from '../user/Image';
import { Text } from '../user/Text';
import { Biography } from '../user/Biography';
import { Header } from '../user/Header';
import { Footer } from '../user/Footer';
import { Features } from '../user/Features';


const App = props => {
	const [websiteData, setWebsiteData] = useState('');			// Website data to load
	const [enabled, setEnabled] = useState(false);					// Editor enabler
	const [open, setOpen] = useState(false);								// Modal opener
	const [selectedNode, setSelectedNode] = useState('');		// Saves component node id to determine which node the modal was opened from

	// Used to query DB for page data
	const {title, pageName} = props.match.params;

	// Save website data to database
	const saveToDatabase = data => {
		console.log(pageName);
		axios.put('/api/websites/', {pageData: data, pageName: pageName, title: title}).then(res => console.log(res));
	}

	// Handle component modal opening
	const openComponentSelection = selectedNodeId => {
		setOpen(true);
		setSelectedNode(selectedNodeId);
	}
	
	// Load website data on load
	useEffect(() => {
		axios.get(`/api/websites/${title}/${pageName}`).then(res => {
			const base64 = res.data.pages.find(page => page.pageName === pageName).pageData
			const uint8array = lz.decodeBase64(base64);
			const json = lz.decompress(uint8array);

			console.log(json);
			setWebsiteData(json);
			setEnabled(true);
		});
	}, []);

	return (
		<div>
			<Editor 
				onRender={render => RenderNode(render, openComponentSelection)} 
				resolver={{Image, Biography, Header, Footer, Features, Button, Text, Container}}
			>
				<Viewport 
					open={open}
					setOpen={setOpen}
					selectedNode={selectedNode}
					saveToDatabase={saveToDatabase}
				>
					{enabled && (
						<Frame data={websiteData}>
							<Element 
								is={Container} 
								className="bg-white relative" 
								canvas
							>
								<Element is={Biography} />
							</Element>
						</Frame>
					)}
				</Viewport>
			</Editor>
		</div>
	);
};

App.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(App);
