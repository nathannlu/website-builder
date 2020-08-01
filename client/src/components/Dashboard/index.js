import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Grid, Box, Button, TextField, Container,Tabs, Tab, Typography, CardContent, CardMedia, Card } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import axios from 'axios';

import Website from './Website';

const Dashboard = () => {
	const [requests, setRequests] = useState([]);
	const [tabOption, setTabOption] = useState(0);
	const [websites, setWebsites] = useState([]);
	const [newWebsite, setNewWebsite] = useState({})

	useEffect(() => {
		axios.get('/api/websites').then(res => {
			setWebsites(res.data);
		})
	}, [])


	const onChange = e => {
		const {name, value} = e.target;
		setNewWebsite({...newWebsite, [name]: value});
	}

	const createWebsite = () => {
		console.log(newWebsite);
		axios.post('/api/websites', newWebsite).then(res => console.log(res));
	}

	const onSubmit = e => {
		e.preventDefault();

		createWebsite();
	}

	return (
		<Container>
			<Box my={8}>
				<Typography gutterBottom variant="h5">Your websites</Typography>

				<Box display="flex">
					{websites.map((website, i) => (
						<Website key={i} title={website.title} />
					))}
				</Box>
			</Box>
			<form onSubmit={onSubmit} my={8}>
				<Typography variant="h4">Create a new website</Typography>
				
				<Typography>Name your website</Typography>
				<Box pt={3}>
					<TextField
						variant="outlined"
						label="URL"
						name="title"
						onChange={onChange}
					/>
					<Box py={2} className="border border-black px-4 bg-gray-500 inline-block">
						.artisanplatform.com
					</Box>
				</Box>
				<Button type="submit" variant="contained" color="primary">Create</Button>
			</form>
		</Container>
	)
};

export default Dashboard;
