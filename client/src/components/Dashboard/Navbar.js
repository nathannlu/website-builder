import React from 'react';
import { Link } from 'react-router-dom';
import { Link as NavLink, AppBar, Box, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					Website Builder
				</IconButton>
				<Box ml="auto">
					<Link style={{color: 'white', textDecoration: 'none', marginLeft: '30px'}} to="/dashboard/">Dashboard</Link>
					<Link style={{color: 'white', textDecoration: 'none', marginLeft: '30px'}} to="/dashboard/account">Account</Link>
				</Box>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar
