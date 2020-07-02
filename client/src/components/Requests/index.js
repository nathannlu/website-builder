import React, {useEffect, useState} from 'react';
import {Box, Container,Tabs, Tab, Typography, CardContent, Card } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import axios from 'axios';

const Requests = () => {
	const [requests, setRequests] = useState([]);
	const [tabOption, setTabOption] = useState(0);

	useEffect(() => {
		axios.get('/api/requests').then(res => {
			setRequests(res.data)
			console.log(res.data);
		});
	}, [])

	const onTabChange = (e, newValue) => {
		setTabOption(newValue)
	}

	return (
		<Container>
			<Box my={8}>
				<Typography variant="h4">My Requests</Typography>
			</Box>
			
			<Box>
				<Tabs
					value={tabOption}
					indicatorColor="primary"
					textColor="primary"
					onChange={onTabChange}
				>
					<Tab label="Queued" />
					<Tab label="Delivered" />
				</Tabs>
			</Box>
			
			<Box>
				{
					requests.map(request => (
						<Box my={3}>
							<Card>
								<CardContent style={{display: 'flex'}}>
									<DescriptionIcon style={{marginRight: '10px', backgroundColor: 'rgb(88, 91, 242)', fontSize: '50px', padding:'10px',borderRadius: '5px', color: 'rgb(230, 230, 253)'}} />
									<Box>
										<Typography style={{fontWeight: 'bold'}} variant="h6">
											{request.title}
										</Typography>
										<Typography variant="body1">
											By {request.author.name}
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Box>
					))
				}
			</Box>
		</Container>
	)
};

export default Requests;
