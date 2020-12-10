import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '../../atoms/TextField';

const EditComponentField = props => {
	return (
		<div>
			<h5>
				{props.title}
			</h5>
			<small>
				<FontAwesomeIcon className="mr-2" icon={['fas','info-circle']} />
				{props.subtitle}
			</small>
			<TextField
				name={props.name}
				onChange={props.onChange}
				defaultValue={props.defaultValue}
			/>
		</div>
	)
};

export default EditComponentField
