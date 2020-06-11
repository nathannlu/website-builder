import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<Link to="/">
				Logo here
			</Link>

			<Link to="/services">Services</Link>
			<Link to="/work">Work</Link>
			<Link to="/pricing">Pricing</Link>
			<Link to="/about">About</Link>

			<Link to="/login">Login</Link>
		</div>
	)
};

export default Navbar
