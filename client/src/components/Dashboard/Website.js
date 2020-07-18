import React from 'react';
import { Grid, Card, CardContent, CardMedia, Button, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Website = props => {
	return (
		<Grid item xs={4}>
			<Box px={2}>
				<Card>
					<img
						src="https://app.unicornplatform.com/static/static/media/website_mockup.a8335ee9.png"
						style={{backgroundColor:"#4d61fc", height: '15rem', width: '100%', objectFit: 'cover'}}
					/>
					<CardContent>
						<Box pb={2} pt={1}>
							<Typography variant="body1"style={{fontWeight: 'bold'}}>
								{props.title}
							</Typography>
						</Box>
						<Button variant="contained" color="primary"><Link to={`/dashboard/${props.title}`}>Edit website pages</Link></Button>
					</CardContent>
				</Card>
			</Box>
		</Grid>	
	)
};

export default Website;
