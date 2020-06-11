import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
	
const Login = () => {
	const [user, setUser] = useState({email: '', password: ''});
	const [errors, setErrors] = useState({});

	const onChange = e => {
		setUser({ [e.target.id]: e.target.value });
	}

	const onSubmit = e => {
		e.preventDefault();

		console.log(user);
	}

	return (
		<div>
			<h1>Login</h1>
			<form noValidate onSubmit={onSubmit}>
				<div>
					<input 
						onChange={onChange}
						value={user.email}
						id="email"
						type="email"
					/>
					<label htmlFor="email">Email</label>
				</div>

				<div>
					<input 
						onChange={onChange}
						value={user.password}
						id="password"
						type="password"
					/>
					<label htmlFor="password">Password</label>
				</div>
				
				<button>Login</button>
			</form>
		</div>
	)
};

export default Login;
