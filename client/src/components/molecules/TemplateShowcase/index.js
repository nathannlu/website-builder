import React from 'react';
import './style.css'

const TemplateShowcase = props => {
	return (
		<div 
			onClick={props.onClick} 
			className="template-showcase flex-1 rounded"
		>
			<div className="template-showcase__preview">
				<div className="template-showcase__header">
					<div className="template-showcase__header--dot"></div>
					<div className="template-showcase__header--dot"></div>
					<div className="template-showcase__header--dot"></div>
				</div>
				<div
					className="template-showcase__img" 
					style={{backgroundImage:`url(${props.src})`}}
				></div>
			</div>

			<div className="mt-12">
				{props.children}
			</div>
		</div>
	)
};

export default TemplateShowcase;

