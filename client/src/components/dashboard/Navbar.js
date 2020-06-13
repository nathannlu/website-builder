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
					<Link className="" to="/dashboard/create-request">Make a Request</Link>
					<Link className="ml-8" to="/dashboard">My Requests</Link>
					<Link className="ml-8" to="/dashboard/account">My Account</Link>

				</div>	
			
			</div>
		</div>
	)
};

export default Navbar
