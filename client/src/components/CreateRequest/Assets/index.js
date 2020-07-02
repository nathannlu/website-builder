import React, {useState, useEffect} from 'react';
import {Typography, Grid, Button, Box, Switch, Fade, TextField } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Assets = props => {
	const [hasCustomText, setHasCustomText] = useState(false);
	const [hasCustomAssets, setHasCustomAssets] = useState(false);
	return (
		<Fade in={true}>
			<Box align={props.summary ? 'left' : 'center'}>
				{!props.summary && (
				<Box fullWidth>
					<Box py={3}>
						<AddAPhotoIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'10px', fontSize:'50px', backgroundColor: '#585BF2'}} />
					</Box>
				</Box>
				)}

				<Box>
					<Typography gutterBottom variant="h4">
					</Typography>
				</Box>

				<Grid justify="center" display="flex">
					{props.summary && (
						<AddAPhotoIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'5px', fontSize:'20px', marginRight: '5px', backgroundColor: '#585BF2'}} />
					)}
					<Typography gutterBottom style={{display: 'inline-block'}} variant={props.summary ? 'h5' : 'h4'}>
						Do you need additional assets?
					</Typography>
				</Grid>
				<Box align="left">
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						label="Search for assets"
						name="assets"
					/>
				</Box>
			</Box>
		</Fade>
	)
};

export default Assets;
