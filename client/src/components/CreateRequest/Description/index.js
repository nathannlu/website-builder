import React, {useState, useEffect} from 'react';
import { Typography, Grid, TextField, Button, Box, Switch, Fade } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

import Instructions from './Instructions';
import CustomAssets from './CustomAssets';

const Description = props => {
	const [hasCustomText, setHasCustomText] = useState(false);
	const [hasCustomAssets, setHasCustomAssets] = useState(false);

	const handleCustomTextInput = e => {
		const {name, value} = e.target
		props.setNewRequest(prevState => {
			prevState.description[name] = value	

			return({...prevState})
		})
	}

	return (
		<Fade in={true}>
			<Box align={props.summary ? 'left' : 'center'}>
				{!props.summary && (
				<Box fullWidth>
					<Box py={3}>
						<DescriptionIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'10px', fontSize:'50px', backgroundColor: '#585BF2'}} />
					</Box>
				</Box>
				)}

				<Box pb={4}>
					<Grid justify="center" display="flex">
						{props.summary && (
							<DescriptionIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'5px', fontSize:'20px', marginRight: '5px', backgroundColor: '#585BF2'}} />
						)}
						<Typography gutterBottom style={{display: 'inline-block'}} variant={props.summary ? 'h5' : 'h4'}>
							What are you looking for?
						</Typography>
					</Grid>
					<Typography variant="body1">
						Use sentences or paragraphs below to share your request. When you press enter, we'll create a new line for you. After you're done, we'll take each line and create a request checklist for your designer.
					</Typography>
					<Instructions newRequest={props.newRequest} setNewRequest={props.setNewRequest} />
				</Box>

				<Box align="left">
					<Box pb={4}>
						<Typography variant="h5">
							Does your design need to include text?
						</Typography>

						<Switch
							checked={hasCustomText}
							onChange={e => setHasCustomText(e.target.checked)}
						/>
						{hasCustomText ? 'Yes' : 'No'}
						<Box>
							{hasCustomText && (
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									placeholder="What is the exact copy you want on your design?"
									multiline
									rows={5}
									value={props.newRequest.description.customText}
									onChange={handleCustomTextInput} 
									name="customText"
								/>
							)}
						</Box>
					</Box>

					<Box>
						<CustomAssets newRequest={props.newRequest} setNewRequest={props.setNewRequest} />

						{/*
						<Typography variant="h5">
							Do you have any assets to upload?
						</Typography>

						<Switch
							checked={hasCustomAssets}
							onChange={e => setHasCustomAssets(e.target.checked)}
							name=""
						/>
						{hasCustomAssets ? 'Yes' : 'No'}
						<Box>
							{hasCustomAssets && (
								<Button variant="contained" color="secondary">
									Add files
								</Button>
							)}
						</Box>

					*/}
					</Box>
				</Box>
			</Box>
		</Fade>
	)
};

export default Description;
