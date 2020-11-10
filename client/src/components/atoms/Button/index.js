import React from 'react';

const Button = props => {
	return (
		<button 
			type={props.type}
			style={props.loading ? {pointerEvents: 'none'} : {}} 
			disabled={props.disabled} 
			className={`btn btn-primary flex items-center ${props.fullWidth && 'w-full'}`}
		>
			{!props.loading ? (
				<span className={props.fullWidth && 'mx-auto'}>{props.children}</span>
			) : (
				<>
					<svg class="spinner" viewBox="0 0 50 50">
						<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
					</svg>
					<span className={props.fullWidth ? 'mx-auto' : 'ml-3 mr-8'}>
						Please Wait...
					</span>
				</>
			)}
		</button>
	)
};

export default Button
