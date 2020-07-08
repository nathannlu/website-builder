import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Container,Tabs, Tab, Typography, CardContent, Card } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import axios from 'axios';

const Dashboard = () => {
	const [requests, setRequests] = useState([]);
	const [tabOption, setTabOption] = useState(0);
	const [websites, setWebsites] = useState([
	]);
	const [newWebsite, setNewWebsite] = useState({})

	useEffect(() => {
		axios.get('/api/websites').then(res => {
			console.log(res.data);
			setWebsites(res.data);
		})
	}, [])

	const onTabChange = (e, newValue) => {
		setTabOption(newValue)
	}

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
			{websites.length > 0 ? (
				<Box my={8}>
					<Typography gutterBottom variant="h4">Edit your website</Typography>

					{websites.map((website, i) => (
						<Box style={{backgroundColor: 'lightgreen'}}>
							<Typography variant="h5">
								Website title: {website.title}
							</Typography>
							<Typography variant="body1">
								Pages:
							</Typography>

							<ol>
								{website.pages.map((page, j) => (
									<li>
										{page.pageName}
										<Link to={`/dashboard/${website.title}/${page.pageName.toLowerCase()}`}>Edit page</Link>
									</li>
								))}
							</ol>
						</Box>
					))}
				</Box>
			) : (
				<form onSubmit={onSubmit} my={8}>
					<Typography variant="h4">Create your first website</Typography>
					
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
			)}
		</Container>
	)
};

export default Dashboard;
