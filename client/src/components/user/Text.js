import React, {useState, useEffect} from "react";
import { FormControl, FormLabel, Slider } from '@material-ui/core';
import { useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

export const Text = ({text, marginBottom, color, fontSize, fontFamily, fontWeight, textAlign}) => {
	const { isActive, isHover, dom, connectors: {connect, drag}, selected, dragged, actions: {setProp} } = useNode((state) => ({
		selected: state.events.selected,
		dragged: state.events.dragged,
		isActive: state.events.selected,
		isHover: state.events.hovered,
		dom: state.dom
	}));

	const [editable, setEditable] = useState(false);

	useEffect(() => {selected && setEditable(true)}, [selected]);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  return (
		<div ref={ref => connect(drag(ref)) }>
			<ContentEditable
				disabled={!editable}
				html={text}
				onChange={e =>
					setProp(props => props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
				}
				tagName="p"
				style={{fontSize: `${fontSize}px`, marginBottom: `${marginBottom}px`, fontFamily, fontWeight, textAlign, color}}
			/>
		</div>
  )
}

const TextSettings = () => {
	const { actions: {setProp}, fontSize } = useNode(node => ({
		fontSize: node.data.props.fontSize
	}))

	return (
		<>
			<FormControl size="small" component="fieldset">
				<FormLabel component="legend">Font size</FormLabel>
				<Slider
					value={fontSize || 7}
					step={7}
					min={1}
					max={50}
					onChange={(_, value) => {
						setProp(props => props.fontSize = value);
					}}
				/>
			</FormControl>
		</>
	)
};

Text.craft = {
	props: {
		text: 'Hi',
		fontSize: 20
	},
	rules: {
		canDrag: node => node.data.props.text != 'Drag'
	},
	related: {
		settings: TextSettings
	}
};
