import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputField = props => {
	const [isRevealPassword, setIsRevealPassword] = useState(false);

	return (
		<div className="mb-8">
			<label htmlFor={props.name}>
				{props.label} 
			</label>
			{props.toggleVisibility && (
				<label 
					onClick={() => setIsRevealPassword(!isRevealPassword)} 
					className="link float-right cursor-pointer"
				>
					{isRevealPassword ? (
						<>
							<FontAwesomeIcon icon="eye-slash" />
							<span className="ml-6">Hide</span>
						</>
					) : (
						<>
							<FontAwesomeIcon icon="eye" />
							<span className="ml-6">Show</span>
						</>
					)}
				</label>
			)}
			<input 
				className="mt-3" 
				type={props.toggleVisibility ? isRevealPassword ? 'text' : 'password' : props.type}
				id={props.name}
				name={props.name}
				onChange={props.onChange}
			/>
			{
				props.errors && (
					<span style={{color: '#a73205', fontSize: '1.4rem', fontWeight: 600}}>
						{props.errors}
					</span>
				)
			}
		</div>
	)
};

export default InputField;
