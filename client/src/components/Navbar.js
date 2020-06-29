import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<img src='/logo-white.png' style={{height: '30px'}} />
				</IconButton>
				<Box ml="auto">
					<Button color="inherit" variant="outlined">Login</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
};

export default Navbar
