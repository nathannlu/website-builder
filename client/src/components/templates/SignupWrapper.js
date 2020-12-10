import React from 'react';

const SignupWrapper = props => {
	return (
		<div 
			className="bg-black min-h-screen"
			style={{backgroundImage: 'url(splash.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
		>
			<div className="bg-white min-h-screen w-3/5 py-48">
				<div className="w-2/3 mx-auto">
					{props.children}
				</div>
			</div>
		</div>
	)
};

export default SignupWrapper;
