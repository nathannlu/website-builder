import React, {useState, useEffect} from 'react';
import {Grid, Typography, Button, Box, Switch, Fade } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const Description = props => {
	const [jpg, setJpg] = useState(false);
	const [png, setPng] = useState(false);
	const [pdf, setPdf] = useState(false);

	useEffect(() => {
		let files = {
			jpg,
			png,
			pdf
		}
		props.setNewRequest({...props.newRequest, ['filetypes']: files})	
	}, [jpg, png, pdf])

	return (
		<Fade in={true}>
			<Box align={props.summary ? 'left' : 'center'}>
				{!props.summary && (
					<Box py={3}>
						<FileCopyIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'10px', fontSize:'50px', backgroundColor: '#585BF2'}} />
					</Box>
				)}

				<Grid justify="center" display="flex">
					{props.summary && (
						<FileCopyIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'5px', fontSize:'20px', marginRight: '5px', backgroundColor: '#585BF2'}} />
					)}
					<Typography gutterBottom style={{display: 'inline-block'}} variant={props.summary ? 'h5' : 'h4'}>
						What file types do you need?
					</Typography>
				</Grid>

				<Box>
					<Switch
						checked={jpg}
						onChange={e => setJpg(e.target.checked)}
						name=""
					/>
					.jpg
				</Box>

				<Box>
					<Switch
						checked={png}
						onChange={e => setPng(e.target.checked)}
					/>
					.png
				</Box>

				<Box>
					<Switch
						checked={pdf}
						onChange={e => setPdf(e.target.checked)}
					/>
					.pdf
				</Box>
			</Box>
		</Fade>
	)
};

export default Description;
