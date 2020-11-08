import React, {useState, useEffect} from 'react';
import {Snackbar, Container, Link, Fade, CssBaseline, Grid, Box, TextField, Typography, Button} from '@material-ui/core';
import {LockOpen} from '@material-ui/icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

const Login = (props) => {
	const [user, setUser] = useState({name: '', email: '', password: '', password2: ''});
	const [errors, setErrors] = useState({});

	const onChange = e => {
		const { name, value } = e.target;

		setUser({...user, [name]: value});
	}

	const onSubmit = e => {
		e.preventDefault();
		props.loginUser(user);
	}

	useEffect(() => {
		if(props.auth.isAuthenticated) {
			props.history.push('/dashboard');	
		}
	}, [])

	useEffect(() => {
		if(props.auth.isAuthenticated) {
			props.history.push('/dashboard');	
		}
	}, [props])

	useEffect(() => {
		if (props.errors) {
			setErrors(props.errors);
		}
	}, [props.errors])

	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '150px', textAlign: 'center'}}>
					<Box my={3}>
						<LockOpen color="primary" style={{fontSize:"3rem"}} />
					</Box>
					<form noValidate onSubmit={onSubmit}>
						<Box mb={3}>
							<Typography style={{fontWeight: 'bold'}} gutterBottom component="h1" variant="h5">
								Sign In
							</Typography>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								value={user.email}
								onChange={onChange}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="password"
								label="Password"
								name="password"
								autoComplete="password"
								type="password"
								value={user.password}
								onChange={onChange}
							/>
							
						</Box>
						<Button type="submit" fullWidth variant="contained" color="primary">Sign in</Button>
						<Snackbar
							autoHideDuration={1000}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							open={!!errors.email || !!errors.emailnotfound}
							onClose={() => setErrors({})}
							message={<span>{errors.email || errors.emailnotfound}</span>}
						/>
						<Snackbar
							autoHideDuration={1000}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							open={!!errors.password || !!errors.passwordincorrect}
							onClose={() => setErrors({})}
							message={<span>{errors.password || errors.passwordincorrect}</span>}
						/>
					</form>
					<Box mt={3}>
						<Link color="black" href="/onboard">Don't have an account? Sign up</Link>
					</Box>
				</div>
			</Container>	
		</Fade>
	)
}

Login.propTypes ={
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
