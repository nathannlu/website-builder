import React from 'react';
import { Fade, Typography, Box, TextField, Button } from '@material-ui/core';

const Title = props => {
	const onInputChange = e => {
		props.setNewRequest({...props.newRequest, ['title']: e.target.value});	
	}
	const onSubmit = () => {
		props.next();		
	}
	return (
		<Fade in={true}>
			<form onSubmit={onSubmit} style={{textAlign:'center'}}>
				<Box pb={4}>
					<Typography gutterBottom variant="h4">
						Hello user
					</Typography>
					<Typography variant="body1">
						Let's get you started on your request.
					</Typography>
				</Box>
				
				<Typography style={{fontWeight: 'bold'}} variant="body1">
					Name your request
				</Typography>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="title"
					label="Title"
					name="title"
					onChange={onInputChange}
					value={props.newRequest.title}
					autoFocus
				/>
			</form>
		</Fade>
	)
};

export default Title;
