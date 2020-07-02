import React from 'react';
import { Link } from 'react-router-dom';
import { Link as NavLink, AppBar, Box, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<img src='/logo-white.png' style={{height: '30px'}} />
				</IconButton>
				<Box ml="auto">
					<NavLink>
						<Link to="/dashboard/create-request">Make a Request</Link>
					</NavLink>

					<NavLink>
						<Link to="/dashboard">My Requests</Link>
					</NavLink>

					<NavLink>
						<Link to="/dashboard/account">Account</Link>
					</NavLink>
				</Box>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar
