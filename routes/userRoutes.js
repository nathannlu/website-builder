const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

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

// @route GET api/user
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

// @route PUT api/user
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


module.exports = router;
