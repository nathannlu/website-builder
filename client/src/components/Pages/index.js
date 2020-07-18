import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Card, CardContent, Container, Typography, Button, TextField } from '@material-ui/core';
import axios from 'axios';

const Pages = props => {
	const [website, setWebsite] = useState({pages: []});
	const [newPage, setNewPage] = useState({newPage:{}});

	const onPageInputChange = e => {
		const {name, value} = e.target;
		setNewPage(prevState => {
			prevState.newPage[name] = value

			return({...prevState});
		})
	}
	
	const createPage = () =>{
		console.log(newPage);
		axios.post('/api/websites/pages', newPage).then(res => console.log(res));	
	}

	const onPageInputSubmit = e => {
		e.preventDefault();
	
		setNewPage(prevState => {
			prevState.title = props.match.params.title;
			
			return({prevState});
		})

		createPage();
	}

	useEffect(() => {
		axios.get('/api/websites').then(res => {
			console.log(res.data);
			setWebsite(res.data.find(website => website.title == props.match.params.title));
		})
	}, [])

	return (
		<Container>
			<Box my={8}>
				<Typography gutterBottom variant="h6">
					Editing pages for {website.title}
				</Typography>
				
				<Box pt={3} display="flex" flexWrap="wrap">
					{website.pages.map((page, j) => (
						<Grid item xs={4}>
							<Box p={1}>
								<Card>
									<CardContent>
										<Typography variant="body1" gutterBottom style={{fontWeight: 'bold'}}>
											/{page.pageName}
										</Typography>
										<Button variant="contained" size="small"><Link to={`/dashboard/${website.title}/${page.pageName.toLowerCase()}`}>Edit page</Link></Button>
									</CardContent>
								</Card>
							</Box>
						</Grid>
					))}
				</Box>

			</Box>
			<form onSubmit={onPageInputSubmit} my={8}>
				<TextField
					variant="outlined"
					label="URL"
					name="pageName"
					onChange={onPageInputChange}
				/>
				<Button type="submit" variant="contained" color="primary">Create</Button>
			</form>
		</Container>
	)
};

export default Pages;
