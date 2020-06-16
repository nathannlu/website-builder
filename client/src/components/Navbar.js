import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="w-full pt-16 pb-8" style={{backgroundColor: '#fbeeca'}}>
			<div className="container mx-auto flex flex-wrap items-center">
				<div className="inline-block flex items-center">		
					<Link to="/">
						<img src="/logo.png" style={{height: '35px'}} />	
					</Link>
					<Link className="ml-16" to="/work">Work</Link>
					<Link className="ml-16" to="/pricing">Pricing</Link>

				</div>

				<div className="ml-auto inline-block">
					{/*<Link to="/services">Services</Link>*/}
							{/*<Link className="ml-8" to="/about">About</Link>*/}

					<Link className="inline-block ml-16" to="/login">Login</Link>

				</div>	
			
			</div>
		</div>
	)
};

export default Navbar
