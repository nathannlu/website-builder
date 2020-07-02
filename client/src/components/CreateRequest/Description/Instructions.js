import React, {useState, useEffect} from 'react';
import {TextField, Box, Link} from '@material-ui/core';

const Instructions = props => {
	const [instructions, setInstructions] = useState(['']);

	const onInputChange = e => {
		const {name, value} = e.target;

		setInstructions(prevState => {
			prevState[name] = value;
			return([...prevState]);
		})
	}

	useEffect(() => {
		props.setNewRequest(prevState => {
			prevState.description.content = instructions
			
			return({...prevState});
		})
	}, [instructions])

	const addInputField = () => {
		setInstructions(instructions.concat(''));
	}

	return (
		<form>
			{instructions.map((instruction, i) => (
				<TextField
					placeholder="Enter request instructions"
					margin="normal"
					fullWidth
					name={i}
					value={instruction}
					onChange={onInputChange}
				/>
			))}
			<Box mt={1}>
				<Link style={{cursor: 'pointer', textTransformation: 'none'}} align="center" onClick={addInputField}>Click to add a new line</Link>
			</Box>
		</form>
	)
};

export default Instructions;
