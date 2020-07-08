import React, {useState, useEffect} from 'react';
import {Button as MaterialButton, FormControlLabel, Switch, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar} from '@material-ui/core';
import {Editor, useEditor, Frame, Element} from '@craftjs/core';
import axios from 'axios';
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';

import { Toolbox } from './Toolbox';
import { SettingsPanel } from './SettingsPanel';
import { Topbar } from './Topbar';
import Navbar from './Navbar';

import { Container } from '../user/Container';
import { WidthHalf } from '../user/Layout';
import { Button } from '../user/Button';
import { Image } from '../user/Image';
import { Text } from '../user/Text';

import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';


const Header = props => {
	return (
		<Element is={Container} background="transparent" canvas>
			<Text fontSize={40} fontWeight="bold" fontFamily="Times" color='white' text="Adrienne Kenny" />
			<Text fontSize={16} color="white" text="Let's find your dream home." />
		</Element>
	)
};

const App = props => {
	const [websiteData, setWebsiteData] = useState('');
	const [enabled, setEnabled] = useState(false);
	const {title, pageName} = props.match.params;

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

	const saveToDatabase = data => {
		console.log(pageName);
		axios.put('/api/websites/', {pageData: data, pageName: pageName, title: title}).then(res => console.log(res));
	}

	return (
		<div>
			<Editor resolver={{Image, Button, Text, Container, WidthHalf}}>
				<Navbar saveToDatabase={saveToDatabase} />	
				<div className="flex flex-wrap w-screen fixed h-screen">
					<div className="w-24 bg-white">
						hi	
					</div>
					<div className="flex-1 h-full" style={{backgroundColor: '#E0E0E0'}}>
						<div className="h-full w-full overflow-auto pt-8 pb-40">
						{enabled && (
						<Frame data={websiteData}>
							<div className="mx-auto" style={{width: '800px'}}>
							<Element is={Container} canvas className="bg-white relative" >
								<header style={{height: '400px'}} className="bg-black top-0 left-0 w-full relative">
									{/*
									<video className="w-full h-full" style={{objectFit: 'cover', opacity: .5}} autoPlay muted loop>
										<source src="https://nathannlu.github.io/adrienne-kenny.github.io/img/video.mp4" type="video/mp4" />
										<source src="https://nathannlu.github.io/adrienne-kenny.github.io/img/video.webm" type="video/mp4" />
									</video>
									*/}
									<div className="absolute top-0 left-0" style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
										<Element is={Container} background="transparent" canvas>
											<Text fontSize={40} fontWeight="bold" fontFamily="Times" color='white' text="Adrienne Kenny" />
											<Text fontSize={16} color="white" text="Let's find your dream home." />
										</Element>
									</div>	
								</header>

								<Element is={Container} padding={40} background="#fff" canvas>
									<div className="flex flex-wrap">
										<Element is={WidthHalf} canvas>
											<Image src="https://mdata.sothebysrealty.ca/images/agents/agent_726_1450975562.jpeg" />
										</Element>
										<Element is={WidthHalf} canvas>
											<Text fontSize={24} fontFamily="Times" fontWeight="bold" text="Meet Adrienne" />
											<Text fontSize={16} text="I’m a left-coaster, born and raised, and have called Vancouver home for almost 20 years. My love for all things West Coast always shines through. When not working and living the city life you’ll find me in the mountains or near the water. I started my career in sales over a dozen years ago. Over that period of time I have learned how to interact with clients in order be able to match their present life situation with their dreams and the realities of the market place. The key is to explore my client's situation and discover not only the things that they know they want (4 bedrooms, West side etc.) but also things that they might not have thought about, (Do you like gardening? What would your ideal garden look like etc.). This process helps me to focus my search and minimize the time my client spends looking at properties that are never going to work." />
										</Element>
									</div>
									<Button size="small" variant="outlined">Click</Button>
									<Element is={Container} padding={6} background="#999" canvas>
										<Text size="small" text="It's me again!" />
									</Element>
								</Element>
							</Element>
							</div>
						</Frame>
						)}
						</div>
					</div>
					<div className="bg-white" style={{width: '280px'}}>
						<Toolbox />
						<SettingsPanel />
					</div>
				</div>
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
