import React, { useState, useEffect } from 'react';
import TextField from '../../atoms/TextField';

// Regular Expression formats for validating password
const lowercaseCheck = /(?=.*[a-z])/
const uppercaseCheck = /(?=.*[A-Z])/
const numberCheck = /(?=.*\d)/
const specialCharacterCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
const validatePassword = password => lowercaseCheck.test(password) && uppercaseCheck.test(password) && numberCheck.test(password) && specialCharacterCheck.test(password) && password.length >= 8 ? true : false


const PasswordField = props => {
	// Password validation for form button
	// Confirm password has lower & uppercase, numbers, and special characters
	useEffect(() => {
		if(validatePassword(props.password)) {
			props.setIsPasswordSecure(true)	
		} else {
			props.setIsPasswordSecure(false)
		}
	}, [props.password])

	return (
		<>
			<TextField
				name={props.name}
				type="password"
				label={props.label}
				onChange={props.onChange} 
				toggleVisibility
			/>
			<div className="mb-8" style={{fontSize: '1.2rem'}}>
			{ props.isPasswordSecure ? (
				<div className="px-6 py-4 rounded-sm" style={{backgroundColor: '#d8eacc'}}>
					<div style={{fontWeight: 600}}>
						Your password is secure and you're all set!
					</div>
				</div>
			) : (
				<div className="flex flex-wrap">
					<ul className="w-1/2">
						<li style={lowercaseCheck.test(props.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One lowercase character</li>
						<li style={uppercaseCheck.test(props.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One uppercase character</li>
						<li style={numberCheck.test(props.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One number</li>
					</ul>
					<ul className="w-1/2">
						<li style={specialCharacterCheck.test(props.password) ? {color: '#bdbbb9'} : {color: '#333'}}>One special character</li>
						<li style={props.password.length >= 8 ? {color: '#bdbbb9'} : {color: '#333'}}>8 characters minimum</li>
					</ul>
				</div>
			)}
			</div>
		</>
	)
};

export default PasswordField;

