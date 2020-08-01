import React, {useEffect} from "react";
import {Fade, Box, Typography, TextField, Paper, FormControl, FormLabel, Slider} from "@material-ui/core";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ColorPicker from 'material-ui-color-picker';
import { Container } from './Container';
import { Text } from "./Text";
import { Image } from './Image';
import { Button } from "./Button";
import { WidthHalf } from './Layout';
import {useNode, Element} from '@craftjs/core';

export const Biography = props => {
	const { connectors: {connect,drag} } = useNode();

	return (
		<Fade in={true}>
			<div style={{padding: '40px'}} className="relative bg-white" ref={ref => connect(ref) }>
				<div className="container mx-auto flex flex-wrap">
					<div className="w-full md:w-1/2">
						<div className="w-full md:w-4/5">
							<Image src={props.src} />
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<Text fontSize={35} fontFamily="Times" fontWeight="bold" text={props.title} />
						<Text fontSize={16} text={props.textarea} />
					</div>
				</div>
			</div>
		</Fade>
	)
};

export const BiographySettings = () => {
  const { title, textarea, src, actions: {setProp} } = useNode(node => ({
    title: node.data.props.title,
    textarea: node.data.props.textarea,
		src: node.data.props.src
  }));

	const onChange = e => {
		const {name, value} = e.target;		
		setProp(props => {
			props[name] = value;	
		});
	}

  return (
    <Box>
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
						Text Content	
					</Typography>
					<Typography variant="body2" className="items-center">
						<InfoOutlinedIcon className="mr-1" />
						Enter the text content:
					</Typography>
					<TextField
						variant="outlined"
						margin="normal"
						name="textarea"
						multiline
						defaultValue={textarea}
						onChange={onChange}
					/>
				</FormControl>
			</Box>

			<Box>
				<FormControl fullWidth margin="normal" component="fieldset">
					<Typography style={{fontWeight: 'bold'}} gutterBottom variant="h5">
						Image	
					</Typography>
					<Typography variant="body2" className="items-center">
						<InfoOutlinedIcon className="mr-1" />
						Enter the image link:
					</Typography>
					<TextField
						variant="outlined"
						margin="normal"
						name="src"
						defaultValue={src}
						onChange={onChange}
					/>
				</FormControl>
			</Box>
    </Box>
  )
}


export const BiographyDefaultProps = {
	title: 'Meet Adrienne',
	textarea: "I’m a left-coaster, born and raised, and have called Vancouver home for almost 20 years. My love for all things West Coast always shines through. When not working and living the city life you’ll find me in the mountains or near the water. I started my career in sales over a dozen years ago. Over that period of time I have learned how to interact with clients in order be able to match their present life situation with their dreams and the realities of the market place. The key is to explore my client's situation and discover not only the things that they know they want (4 bedrooms, West side etc.) but also things that they might not have thought about, (Do you like gardening? What would your ideal garden look like etc.). This process helps me to focus my search and minimize the time my client spends looking at properties that are never going to work.",
	src: "https://mdata.sothebysrealty.ca/images/agents/agent_726_1450975562.jpeg",
};

Biography.craft = {
	props: BiographyDefaultProps,
	related: {
		settings: BiographySettings 
	}
};

