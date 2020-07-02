import React from 'react';
import { Fade, Typography, Box, TextField, Button } from '@material-ui/core';

const Title = props => {
	const onInputChange = e => {
		props.setNewRequest({...props.newRequest, ['title']: e.target.value});	
	}

	return (
		<Fade in={true}>
			<form onSubmit={e => e.preventDefault()} style={{textAlign:'center'}}>
				<Box pb={4}>
					<Typography gutterBottom variant="h4">
						Hello {props.user.name}
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
