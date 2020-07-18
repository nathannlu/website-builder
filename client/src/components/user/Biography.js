import React from "react";
import {Fade, Paper, FormControl, FormLabel, Slider} from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker';
import { Container } from './Container';
import { Text } from "./Text";
import { Image } from './Image';
import { Button } from "./Button";
import { WidthHalf } from './Layout';
import {useNode, Element} from '@craftjs/core';

export const Biography = () => {
	const { connectors: {connect,drag} } = useNode();

	return (
		<Fade in={true}>
			<div style={{padding: '40px'}} className="relative bg-white" ref={ref => connect(ref) }>
				<div className="flex flex-wrap">
					<div className="w-1/2">
						<Image src="https://mdata.sothebysrealty.ca/images/agents/agent_726_1450975562.jpeg" />
					</div>
					<div className="w-1/2 pl-8">
						<Text fontSize={24} fontFamily="Times" fontWeight="bold" text="Meet Adrienne" />
						<Text fontSize={16} text="I’m a left-coaster, born and raised, and have called Vancouver home for almost 20 years. My love for all things West Coast always shines through. When not working and living the city life you’ll find me in the mountains or near the water. I started my career in sales over a dozen years ago. Over that period of time I have learned how to interact with clients in order be able to match their present life situation with their dreams and the realities of the market place. The key is to explore my client's situation and discover not only the things that they know they want (4 bedrooms, West side etc.) but also things that they might not have thought about, (Do you like gardening? What would your ideal garden look like etc.). This process helps me to focus my search and minimize the time my client spends looking at properties that are never going to work." />
					</div>
				</div>
			</div>
		</Fade>
	)
};


{/*
export const ContainerDefaultProps = {
	background: '#fff',
	padding: 0
};

Container.craft = {
	props: ContainerDefaultProps,
	related: {
		settings: ContainerSettings
	}
};
*/} 
