import React from 'react';

const LoginWrapper = props => {
	return (
		<div 
			className="bg-black min-h-screen" 
			style={{backgroundImage: 'url(login.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
		>
			<div className="bg-white min-h-screen w-2/5 py-48">
				<div className="w-2/3 mx-auto">
					{props.children}
				</div>
			</div>
		</div>
	)
};

export default LoginWrapper
