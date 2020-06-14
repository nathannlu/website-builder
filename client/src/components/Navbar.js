import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="w-full pt-12 pb-8">
			<div className="container mx-auto flex flex-wrap items-center">
				<div className="inline-block">		
					<Link to="/">
						<h4 className="font-bold">Graaphic</h4>	
					</Link>
				</div>

				<div className="ml-auto inline-block">
					{/*<Link to="/services">Services</Link>*/}
					<Link className="ml-16" to="/work">Work</Link>
					<Link className="ml-16" to="/pricing">Pricing</Link>
					{/*<Link className="ml-8" to="/about">About</Link>*/}

					<Link className="inline-block ml-16" to="/login">Login</Link>

				</div>	
			
			</div>
		</div>
	)
};

export default Navbar
