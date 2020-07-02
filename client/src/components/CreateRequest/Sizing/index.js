import React, {useState, useEffect} from 'react';
import { Fade, Grid, Card, CardActionArea, CardContent, Typography, Link, Button, Box, Select, FormControl, TextField, MenuItem } from '@material-ui/core';
import FormatSizeIcon from '@material-ui/icons/FormatSize';

const ads = [
	{type: 'Social Media Ad', size: '1080x1080'},
	{type: 'Post', size: '1200x628'},
	{type: 'Single Image Ad', size: '1200x628'}
]

const branding = [
	{type: 'Cover Photo', size: '820x312'},
	{type: 'Profile Photo', size: '1080x1080'},
	{type: 'Business Card', size: '1050x600'}
]

	
const AdSizing = ({selected, setSelected, type}) => {
	return (
		<Box display="flex">
			{type.map((graphic, i) => (
				<Grid key={i} sm={4} item>
					<Box p={1}>
						<Card 
							style={graphic.type == selected.type ? {backgroundColor: '#3F51B5', color: 'white'} : {}}
						>
							<CardActionArea onClick={() => setSelected(graphic)}>
								<CardContent>
									<Typography variant="h6">
										{graphic.type}	
									</Typography>
									<Typography style={{opacity: .5}} variant="body2">
										{graphic.size}	
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Box>
				</Grid>
			))}
		</Box>
	)
};

const Sizing = props => {
	const [type, setType] = useState('Ad');
	const [changeRequestType, setChangeRequestType] = useState(false)
	const [selected, setSelected] = useState(props.newRequest.dimensions);

	const onSelectChange = e => {
		setType(e.target.value);
	}

	useEffect(() => {
		props.setNewRequest({...props.newRequest, ['dimensions']: selected});
	}, [selected])

	return (
		<Fade in={true}> 
			<Box align={props.summary ? 'left' : 'center'}>
				{!props.summary && (
					<Box fullWidth>
						<Box py={3}>
							<FormatSizeIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'10px', fontSize:'50px', backgroundColor: '#585BF2'}} />
						</Box>
					</Box>
				)}
			
				<Grid justify="center" display="flex">
					{props.summary && (
						<FormatSizeIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'5px', fontSize:'20px', marginRight: '5px', backgroundColor: '#585BF2'}} />
					)}
					<Typography gutterBottom style={{display: 'inline-block'}} variant={props.summary ? 'h5' : 'h4'}>
						What size should your design be?	
					</Typography>
				</Grid>

				<Box align="left" pb={3}>
					{ changeRequestType ? (
					<FormControl>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={type}
							onChange={onSelectChange}
						>
							<MenuItem value={'Ad'}>Ad</MenuItem>
							<MenuItem value={'Branding'}>Branding</MenuItem>
							<MenuItem value={'Custom'}>Custom</MenuItem>
						</Select>
					</FormControl>
					) : (
						<Box>
							<Typography style={{fontWeight: 'bold'}} variant="body1">
								{type}
							</Typography>
							<Typography variant="body1">
								Not right? <Link onClick={() => setChangeRequestType(true)}>Change request type</Link>
							</Typography>
						</Box>
					)}
				</Box>

				{{
					'Ad': <AdSizing type={ads} selected={selected} setSelected={setSelected} />,
					'Branding': <AdSizing type={branding} selected={selected} setSelected={setSelected} />,
					'Custom': <TextField variant="outlined" fullWidth placeholder="e.g. 8.5''x11''"/>
				}[type]}
			</Box>
		</Fade>
	)
};

export default Sizing;
