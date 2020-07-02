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
					<Link style={{color: 'white', textDecoration: 'none'}} to="/dashboard/create-request">Make a Request</Link>

					<Link style={{color: 'white', textDecoration: 'none', marginLeft: '30px'}} to="/dashboard">My Requests</Link>

					<Link style={{color: 'white', textDecoration: 'none', marginLeft: '30px'}} to="/dashboard/account">Account</Link>
				</Box>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar
