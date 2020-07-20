import React from 'react';
import {Image} from './Image';
import {Text} from './Text';
import {useNode } from '@craftjs/core';
import {Fade, TextField, Paper, FormControl, FormLabel, Slider} from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker';


export const Header = props => {
	const { connectors: {connect,drag} } = useNode();

	return (
		<Fade in={true}>
			<header style={{height: '400px'}} className="bg-black top-0 left-0 w-full relative" ref={ref => connect(drag(ref)) }>
				<Image opacity={.5} src="https://images.unsplash.com/photo-1559305289-4c31700ba9cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80" />
				<div className="absolute top-0 left-0" style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
					<Text fontSize={40} fontWeight="bold" fontFamily="Times" color='white' text={props.title} />
					<Text fontSize={16} color="white" text={props.subtitle} />
					
					<input
						className="shadow"
						style={{padding: '20px', margin: 0, marginTop: '10px', width: '100%', borderRadius: '3px', overflow: 'hidden'}} 
						placeholder="Enter an address"
					/>
				</div>	
			</header>
		</Fade>
	)
};

export const HeaderSettings = () => {
  const { title, subtitle, actions: {setProp} } = useNode(node => ({
    title: node.data.props.title,
    subtitle: node.data.props.subtitle,
  }));

	const onChange = e => {
		const {name, value} = e.target;		
		setProp(props => {
			props[name] = value;	
		});
	}

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Title</FormLabel>
				<TextField
					variant="outlined"
					margin="normal"
					name="title"
					defaultValue={title}
					onChange={onChange}
				/>
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Subtitle</FormLabel>
				<TextField
					variant="outlined"
					margin="normal"
					name="subtitle"
					defaultValue={subtitle}
					onChange={onChange}
				/>
      </FormControl>
    </div>
  )
}

export const HeaderDefaultProps = {
	title: 'Adrienne Kenny',
	subtitle: "Let's find your dream home.",
};

Header.craft = {
	props: HeaderDefaultProps,
	related: {
		settings: HeaderSettings 
	}
};
