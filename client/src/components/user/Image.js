import React from "react";
import {Paper, FormControl, FormLabel, Input, Slider} from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker';
import { useNode } from '@craftjs/core';

export const Image = ({background, width = '100%', children, src}) => {
	const { connectors: {connect,drag} } = useNode();
  return (
		<img style={{width, background, minHeight: '48px'}} className="min-h-full" src={src} ref={ref => connect(drag(ref))} />
  )
}

export const ImageSettings = () => {
	const { src, actions: {setProp} } = useNode(node => ({
		background: node.data.props.background,
		padding: node.data.props.padding,
		src: node.data.props.src
	}))
	return (
		<div>
			<FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Source</FormLabel>
        <Input defaultValue={src} onChange={(e) => setProp(props => props.src = e.target.value)} />
      </FormControl>
		</div>
	)
};

Image.craft = {
	related: {
		settings: ImageSettings
	}
};

/*
export const ContainerSettings = () => {
  const { background, padding, actions: {setProp} } = useNode(node => ({
    background: node.data.props.background,
    padding: node.data.props.padding
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker defaultValue={background || '#000'} onChange={color => {
          setProp(props => props.background = color)
        }} />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
      </FormControl>
    </div>
  )
}

export const ContainerDefaultProps = {
	background: '#fff',
	padding: 3
};

Container.craft = {
	props: ContainerDefaultProps,
	related: {
		settings: ContainerSettings
	}
};
*/
