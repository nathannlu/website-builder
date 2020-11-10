const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const nodemailer = require('nodemailer');

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const validateForgotPasswordInput = require('../validation/forgotpassword');

// Load User model
const User = require('../models/userModel');

const checkToken = (req, res, next) => {
	const header = req.headers['authorization'];

	if (typeof header !== 'undefined') {
		const bearer = header.split(' ');
		const token = bearer[1];

		req.token = token;
		next();
	} else {
		// If header is undefined return Forbidden(403)
		res.sendStatus(403);	
	}
};


// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation 
	if(!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({email: 'Email already exists'});
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});

			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) throw err;
					newUser.password = hash;
					newUser.save().then(user => res.json(user)).catch(err => console.log(err));
				});
			});
		}
	});
});


// @route POST api/users/verify-token
// @desc Takes in token and checks if it is valid 
// @access Public
router.post('/verify-token', (req, res) => {
	const { token } = req.body;
	const decoded = jwt.verify(token.split(' ')[1], keys.secretOrKey)

	User.findById(decoded.id).then(user => {
		if(user) {
			res.json(token);	
		} else {
			res.json(null);
		}
	})
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
	// Form validaiton
	const { errors, isValid } = validateLoginInput(req.body);

	// Check vaidation
	if(!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user exidts
		if (!user) {
			return res.status(404).json({ emailnotfound: "Email not found" });
		}

		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name,
					email: email,
					stripeCustomerId: user.stripeCustomerId
				};

				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token 
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect"});
			}
		});
	});
});

// @route GET api/users
// @desc Fetches user data 
// @access Private 
router.get('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			console.log('authorized data:', authorizedData)
			User.findById(authorizedData.id, (err, foundUser) =>{
				err && console.log(err);

				res.status(200).json(foundUser);
			})
		}
	})
});

// @route PUT api/users
// @desc Saves website to user
// @access Private 
router.put('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			User.findByIdAndUpdate(authorizedData.id, {websiteData: req.body.websiteData}, (err) => {
				if (err) console.log(err);

				res.status(200).json('success');
			})
		}
	})
});

// @route POST api/users/forgot
// @desc Sends email with JWT link to change password
// @access Public 
router.post('/forgot', (req, res) => {
	// Form validation
	const { errors, isValid } = validateForgotPasswordInput(req.body);

	// Check validation 
	if(!isValid) {
		return res.status(400).json(errors);
	}

	if (req.body.email) {
		User.findOne({email: req.body.email}, (err, foundUser) => {
			if (foundUser) {
				console.log(foundUser);

				const payload = {
					id: foundUser.id,
					email: foundUser.email
				}

				// Make this a one-time-use token by using the user's
				// current password hash from the database, and combine it
				// with the user's created date to make a very unique secret key!
				// For example:
				// const secret = foundUser.password + '-' + foundUser.date.getTime();
				const secret = foundUser.password

				const token = jwt.sign(
					payload, 
					secret,
					{
						expiresIn: 31556926
					}
				);

				// Send email containing link to reset password
				const transporter = nodemailer.createTransport({
					host: 'smtp.gmail.com',
					port: 465,
					secure: true,
					auth: {
						user: 'support@agentsquare.ca',
						pass: 'CanFISHfly?'
					}
				});

				const mailOptions = {
					from: 'support@agentsquare.ca',
					to: foundUser.email,
					subject: 'Reset your Agentsquare password',
					html: `<a href="http://localhost:3000/login/reset?token=${token}&id=${foundUser.id}">Reset your password</a>`
				}
				transporter.sendMail(mailOptions, (err, response) => {
					if(err) {
						console.log('Error sending mail:', err);
						res.sendStatus(403)
					} else {
						res.sendStatus(200)
					}
				});
			} else {
				// Check if user exidts
				return res.status(404).json({ emailnotfound: "Email not found" });
			}
		})
	} else {
		res.sendStatus(400);
	}
});

// @route POST api/users/reset/validate
// @desc Validates token from hashed password signed JWT token from front end
// @access Public 
router.post('/reset/validate', (req, res) => {
	const { id, token } = req.body;

	// Find JWT secret with ID
	User.findById(id, (err, foundUser) => {
		if (err) res.sendStatus(404);

		jwt.verify(
			token,
			foundUser.password,
			(err, decoded) => {
				if (err) {
					res.sendStatus(404)
				} else {
					res.sendStatus(200)
				}
			}
		)
	})
});

// @route POST api/users/reset/
// @desc Validates token from hashed password signed JWT token from front end
router.post('/reset', (req, res) => {	
	const { id, token, newPassword } = req.body;

	// Find JWT secret with ID
	User.findById(id, (err, foundUser) => {
		if (err) res.sendStatus(404);

		// Verify token of incoming request
		jwt.verify(
			token,
			foundUser.password,
			(err, decoded) => {
				if (err) {
					res.sendStatus(404)
				} else {

					// Hash password before saving in database
					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(newPassword, salt, (err, hash) => {
							User.findByIdAndUpdate(id, {
								password: hash	
							}, (err, updatedUser) => {
								if (err) {
									res.sendStatus(400)
								}	else {
									res.sendStatus(200)
								}
							})
						});
					});
					
					// Holy shit look at this callback hell bruh

				}
			}
		)
	})
});

module.exports = router;
