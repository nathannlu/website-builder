import React from "react";
import {Paper, Fade, FormControl, FormLabel, Slider} from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker';
import { Container } from './Container';
import { Text } from "./Text";
import { Image } from './Image';
import { Button } from "./Button";
import { WidthHalf } from './Layout';
import {useNode, Element} from '@craftjs/core';

export const Footer = () => {
	const { connectors: {connect, drag} } = useNode();

	return (
		<Fade in={true}>
			<footer ref={ref =>connect(drag(ref)) } class="mx-auto bg-white relative container text-center">
				<hr />
				<small>© 2019 Adrienne Kenny | Vancouver Real Estate. All rights reserved.</small>
				<hr />
				<Image src="https://nathannlu.github.io/adrienne-kenny.github.io/img/footer.png" style="transform: translateY(5%)" alt="" />
			</footer>		
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
