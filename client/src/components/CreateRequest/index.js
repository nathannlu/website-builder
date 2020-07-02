import React, {useState, useEffect} from 'react';
import {Divider, Box, Fade, Grid, Button, CardContent, Container, Card, Link } from '@material-ui/core';
import VerticalStepper from './VerticalStepper';

import Title from './Title';
import Sizing from './Sizing';
import Description from './Description';
import Assets from './Assets';
import FileTypes from './FileTypes';

const Summary = ({newRequest, setNewRequest}) => {
	return (
		<div>
				<Title newRequest={newRequest} setNewRequest={setNewRequest} summary />,
			<Divider style={{margin: '50px 0'}} />
				<Sizing newRequest={newRequest} setNewRequest={setNewRequest} summary />,
			<Divider style={{margin: '50px 0'}} />
				<Description newRequest={newRequest} setNewRequest={setNewRequest} summary />
			<Divider style={{margin: '50px 0'}} />
				<Assets newRequest={newRequest} setNewRequest={setNewRequest} summary />
			<Divider style={{margin: '50px 0'}} />
				<FileTypes newRequest={newRequest} setNewRequest={setNewRequest} summary />
		</div>
	)
};

export default function() {
	const initialRequestState = {
		title: '',
		dimensions: {
			type: '',
			size: '',
		},
		description: {
			content: [],
			customText: '',
			customAssets: []
		},
		assets: {
			unsplashAssets: [],
		},
		filetypes: [],
	};
	const [newRequest, setNewRequest] = useState(initialRequestState);
	const [activeStep, setActiveStep] = useState(0); 
	const steps = [
		'Name',
		'Dimensions',
		'Description',
		'Assets',
		'File Types',
		'Summary'
	];

	const theme = {
		sizing: 8
	};

	const next = () => {
		console.log(newRequest);
		setActiveStep(prevState => {
			prevState = prevState + 1;	
			return (prevState);
		})
	}

	const back = () => {
		setActiveStep(prevState => {
			prevState = prevState - 1;	
			return (prevState);
		})
	}

	return (
		<Container maxWidth="lg" component="main">
			<Box display="flex" style={{marginTop: '100px', paddingBottom: '40px'}}>
				<Grid xs={2}>
					<VerticalStepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
				</Grid>
				<Grid xs={9}>
					<Card>
						<Box p={8}>
							{activeStep !== 0 && <Link onClick={back}>Back</Link>} 
							{{
								0: <Title newRequest={newRequest} setNewRequest={setNewRequest} />,
								1: <Sizing newRequest={newRequest} setNewRequest={setNewRequest} />,
								2: <Description newRequest={newRequest} setNewRequest={setNewRequest} />,
								3: <Assets newRequest={newRequest} setNewRequest={setNewRequest} />,
								4: <FileTypes newRequest={newRequest} setNewRequest={setNewRequest} />,
								5: <Summary newRequest={newRequest} setNewRequest={setNewRequest} />
							}[activeStep]}
							<Box align="center" mt={3}>
								<Button variant="contained" color="primary" onClick={next}>Continue</Button>
							</Box>
						</Box>
					</Card>
				</Grid>
			</Box>
		</Container>
	);
};


