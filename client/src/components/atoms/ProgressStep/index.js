import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProgressStep = props => {
	return (
		<div 
			className="flex-1 text-center py-6"
			style={props.active ? {borderBottom: '2px solid #000', opacity: 1} : {borderBottom: '2px solid #000', opacity: .3}}
		>
			<h6 style={{fontSize: '1.4rem'}}>
				{props.children} 
				{props.active && <FontAwesomeIcon className="ml-2" icon={['fas', 'check']} /> }
			</h6>
		</div>
	)
};

export default ProgressStep;
