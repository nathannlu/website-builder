import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="w-full bg-green-500 text-white py-8">
			<div className="container mx-auto">
				<div className="inline-block">		
					<Link to="/">
						<h5>Graaphic</h5>	
					</Link>
				</div>

				<div className="float-right inline-block">
					{/*<Link to="/services">Services</Link>*/}
					<Link className="ml-8" to="/work">Work</Link>
					<Link className="ml-8" to="/pricing">Pricing</Link>
					{/*<Link className="ml-8" to="/about">About</Link>*/}

					<Link className="btn btn-black ml-8" to="/login">Login</Link>

				</div>	
			
			</div>
		</div>
	)
};

export default Navbar
