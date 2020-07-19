import React from 'react';
import {Image} from './Image';
import {Text} from './Text';
import {useNode } from '@craftjs/core';
import { Fade } from '@material-ui/core';

export const Header = () => {
	const { connectors: {connect,drag} } = useNode();

	return (
		<Fade in={true}>
			<header style={{height: '400px'}} className="bg-black top-0 left-0 w-full relative" ref={ref => connect(drag(ref)) }>
				<Image opacity={.5} src="https://images.unsplash.com/photo-1559305289-4c31700ba9cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80" />
				<div className="absolute top-0 left-0" style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
					<Text fontSize={40} fontWeight="bold" fontFamily="Times" color='white' text="Adrienne Kenny" />
					<Text fontSize={16} color="white" text="Let's find your dream home." />
					
					<input
						className="shadow"
						style={{padding: '20px', margin: 0, marginTop: '10px', width: '100%', borderRadius: '3px', overflow: 'hidden'}} 
						placeholder="Enter an address"
					/>
				</div>	
			</header>
		</Fade>
	)
};

