import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = props => {
	const severity = {
		'success': {color:'#d8eacc', icon: ['far', 'check-circle']},
		'error': '',
		'warning': ''
	}[props.severity]

	return (
		<div className="p-6 flex flex-wrap items-center rounded" style={{backgroundColor: severity.color }}>
			<FontAwesomeIcon size="lg" icon={severity.icon} />
			<div className="flex-1 pl-6">
				{props.children}
			</div>
		</div>
	)
};

export default Alert
