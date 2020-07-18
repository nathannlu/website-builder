import React from "react";
import {Paper, FormControl, FormLabel, Slider} from "@material-ui/core";
import ColorPicker from 'material-ui-color-picker';
import { useNode, useEditor } from '@craftjs/core';

export const Container = ({width, background, display, flexWrap, padding, children, paddingBottom, paddingLeft, paddingRight}) => {
	const { actions: {add}, query: {createNode, node}} = useEditor();
	const { id, connectors: {connect,drag} } = useNode();

  return (
    <div style={{display, width, flexWrap, margin: "0", background, paddingBottom: `${paddingBottom}px`, padding: `${padding}px`}}>
      {children}
    </div>
  )
}

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
};

Container.craft = {
	props: ContainerDefaultProps,
	related: {
		settings: ContainerSettings
	}
};
