import React from 'react';
import {Image} from './Image';
import {Text} from './Text';
import {useNode } from '@craftjs/core';
import {Fade, Typography, Box, TextField, Paper, FormControl, FormLabel, Slider} from "@material-ui/core";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ColorPicker from 'material-ui-color-picker';


export const Header = props => {
	const { connectors: {connect,drag} } = useNode();

	return (
		<Fade in={true}>
			<header style={{height: '750px'}} className="bg-black top-0 left-0 w-full relative overflow-hidden" ref={ref => connect(drag(ref)) }>
				<Image opacity={.5} src={props.background} />
				<div className="absolute top-0 left-0" style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
					<Text fontSize={40} fontWeight="bold" fontFamily="Times" color='white' text={props.title} />
					<Text fontSize={16} color="white" text={props.subtitle} />
					
					<input
						className="shadow"
						style={{padding: '20px', margin: 0, marginTop: '10px', width: '100%', borderRadius: '3px', overflow: 'hidden'}} 
						placeholder="MLS search"
					/>
				</div>	
			</header>
		</Fade>
	)
};

export const HeaderSettings = () => {
  const { title, subtitle, background, actions: {setProp} } = useNode(node => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
		background: node.data.props.background
  }));

	const onChange = e => {
		const {name, value} = e.target;		
		setProp(props => {
			props[name] = value;	
		});
	}

  return (
    <div>
			<Box pb={3}>
				<FormControl fullWidth margin="normal" component="fieldset">
					<Typography style={{fontWeight: 'bold'}} gutterBottom variant="h5">
						Title
					</Typography>
					<Typography variant="body2" className="items-center">
						<InfoOutlinedIcon className="mr-1" />
						Enter the title:
					</Typography>
					<TextField
						variant="outlined"
						margin="normal"
						name="title"
						defaultValue={title}
						onChange={onChange}
					/>
				</FormControl>
			</Box>

			<Box pb={3}>
				<FormControl fullWidth margin="normal" component="fieldset">
					<Typography style={{fontWeight: 'bold'}} gutterBottom variant="h5">
						Subtitle
					</Typography>
					<Typography variant="body2" className="items-center">
						<InfoOutlinedIcon className="mr-1" />
						Enter the subtitle:
					</Typography>
					<TextField
						variant="outlined"
						margin="normal"
						name="subtitle"
						defaultValue={subtitle}
						onChange={onChange}
					/>
				</FormControl>
			</Box>

			<Box>
				<FormControl fullWidth margin="normal" component="fieldset">
					<Typography style={{fontWeight: 'bold'}} gutterBottom variant="h5">
						Background Image	
					</Typography>
					<Typography variant="body2" className="items-center">
						<InfoOutlinedIcon className="mr-1" />
						Enter link to background image:
					</Typography>
					<TextField
						variant="outlined"
						margin="normal"
						name="background"
						defaultValue={background}
						onChange={onChange}
					/>
				</FormControl>
			</Box>
    </div>
  )
}

export const HeaderDefaultProps = {
	title: 'Adrienne Kenny',
	subtitle: "Let's find your dream home.",
	background: 'https://images.unsplash.com/photo-1559305289-4c31700ba9cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80',
};

Header.craft = {
	props: HeaderDefaultProps,
	related: {
		settings: HeaderSettings 
	}
};
