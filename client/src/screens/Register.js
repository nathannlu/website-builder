import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [user, setUser] = useState({name: '', email: '', password: '', password2: ''});
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
			<h1>Register</h1>
			<form noValidate onSubmit={onSubmit}>

				<div>
					<input
						onChange={onChange}
						value={user.name}
						error={errors.name}
						id="name"
						type="text"
					/>
					<label htmlFor="name">Name</label>
				</div>

				<div>
					<input
						onChange={onChange}
						value={user.email}
						error={errors.email}
						id="email"
						type="email"
					/>
					<label htmlFor="email">Email</label>
				</div>

				<div>
					<input
						onChange={onChange}
						value={user.password}
						error={errors.password}
						id="password"
						type="password"
					/>
					<label htmlFor="password">Password</label>
				</div>

				<div>
					<input
						onChange={onChange}
						value={user.password2}
						error={errors.password2}
						id="password2"
						type="password"
					/>
					<label htmlFor="password2">Confirm password</label>
				</div>

				<button>Sign up</button>

			</form>
		</div>
	)
};

export default Register;
