import React from "react";
import {Fade, Paper, FormControl, FormLabel, Slider} from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker';
import { Container } from './Container';
import { Text } from "./Text";
import { Image } from './Image';
import { Button } from "./Button";
import { WidthHalf } from './Layout';
import {useNode, Element} from '@craftjs/core';

export const Features = () => {
	const { connectors: {connect,drag} } = useNode();

	return (
		<Fade in={true}>
			<div style={{padding: '40px'}} className="container mx-auto relative bg-white" ref={ref => connect(drag(ref)) }>
				<div className="text-center">
					<Text fontSize={35} marginBottom={40} fontFamily="Times" fontWeight="bold" text="How can I help you?" />
				</div>
				<div className="flex flex-wrap">
					<div class="w-full md:w-1/2 pb-24 px-8 text-center">
						<Image src="https://nathannlu.github.io/adrienne-kenny.github.io/img/buy.png" alt="" />
						<Text fontSize={30} marginBottom={10} fontFamily="Times" fontWeight="bold" text="I want to sell my home" />
						<Text fontSize={16} marginBottom={20} text="Buying is a huge decision. Whether you are a first time home buyer, purchasing your second or third, or investing in a vacation property, we understand that it’s hard to find a place you can truly call “home”." />
						<Button size="small" variant="outlined" color="primary">
							See your options
						</Button>
					</div>
					<div class="w-full md:w-1/2 pb-16 px-8 text-center">
						<Image src="https://nathannlu.github.io/adrienne-kenny.github.io/img/sell.png" alt="" />
						<Text fontSize={30} marginBottom={10} fontFamily="Times" fontWeight="bold" text="I want to sell my home" />
						<Text fontSize={16} marginBottom={20} text="Selling a home is tough, but it shouldn’t be a chore. With the help of a good real estate agent, setting the price, preparing, and marketing the home effectively to attract buyers is easy. And it only takes one phone call." />
						<Button size="small" variant="outlined" color="primary">
							See your options
						</Button>
					</div>
				</div>
			</div>
		</Fade>
	)
};

