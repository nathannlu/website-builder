import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="w-full pt-16 pb-8 text-white" style={{backgroundColor: '#00465a'}}>
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
