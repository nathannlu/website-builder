import React, {useState, useEffect} from 'react';
import {Snackbar, Container, Fade, CssBaseline, Grid, Box, TextField, Typography, Button} from '@material-ui/core';
import {ExitToApp} from '@material-ui/icons';

const Content = props => {
	const theme = {
		spacing: 8
	}
	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '150px', textAlign: 'center'}}>
					<Box my={3}>
						<ExitToApp color="primary" style={{fontSize:"3rem"}} />
					</Box>

					<Box my={3}>
						<Typography gutterBottom component="h4" variant="body2">
							STEP 1 OF 3
						</Typography>
						<Typography gutterBottom style={{fontWeight: 'bold'}} component="h1" variant="h5">
							Finish setting up your account
						</Typography>
						<Typography gutterBottom component="p" variant="body1">
							Graaphic is personalized for you. Create a password to start ordering designs.
						</Typography>
					</Box>

					<Button fullWidth onClick={() => props.setStage(1)} variant="contained" color="primary">
						Continue
					</Button>
				</div>
			</Container>
		</Fade>
	)
};

const Form = props => {
	const [user, setUser] = useState({name: '', email: '', password: '', password2: ''});
	const [errors, setErrors] = useState({});

	const onChange = e => {
		const { name, value } = e.target;

		setUser({...user, [name]: value});
	}

	const onSubmit = e => {
		e.preventDefault();
		props.registerUser(user);
	}

	useEffect(() => {
		if (props.errors) {
			setErrors(props.errors);
		}
	}, [props.errors])

	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '64px', textAlign: 'left'}}>
					<form noValidate onSubmit={onSubmit}>
						<Box mb={3}>
							<Typography gutterBottom component="h4" variant="body2">
								STEP 1 OF 3
							</Typography>
							<Typography style={{fontWeight: 'bold'}} gutterBottom component="h1" variant="h5">
								Create a password to start your membership!
							</Typography>
							<Typography gutterBottom component="p" variant="body1">
								Just a few more steps and you're done!
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
								type="password"
								name="password"
								autoComplete="current-password"
								value={user.password}
								onChange={onChange}
							/>

						</Box>

						<Button fullWidth type="submit" variant="contained" color="primary">
							Continue
						</Button>
          <Snackbar
            autoHideDuration={1000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={!!errors.email}
            onClose={() => setErrors({})}
            message={<span>{errors.email}</span>}
          />
					<Snackbar
            autoHideDuration={1000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={!!errors.password}
            onClose={() => setErrors({})}
            message={<span>{errors.password}</span>}
          />
					</form>
				</div>
			</Container>
		</Fade>
	)
};

export default function(props) {
	const [stage, setStage] = useState(0);

	const onRegistrationComplete = () => {
		props.setStage(1);
	};

	return {
			0: <Content setStage={setStage} />,
			1: <Form errors={props.errors} registerUser={props.registerUser} onRegistrationComplete={onRegistrationComplete} />
		}[stage]
};
