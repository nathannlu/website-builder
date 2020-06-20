const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Load User model
const Request = require('../models/requestModel');

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

// @route GET api/requests
// @desc Finds all requests belonging to logged in user
// @access Private 
router.get('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			// If error send Forbidden (403)	
			res.sendStatus(403);
		} else {
			// If token is successfully verified, we can send the data
			const userRequests = await Request.find({'author.id': authorizedData.id})
			res.status(200).json(userRequests)
		}
	})
});


// @route POST api/requests
// @desc Creates a design request
// @access Private 
router.post('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			req.body.author.id = authorizedData.id
			console.log(req.body);	
			Request.create(req.body).then((err, newRequest) => {
				if(err) console.log(err);

				console.log(newRequest);
				res.status(200).json('success');
			})
		}
	})
});


// @route PUT api/requests
// @desc Updates design request 
// @access Private 
router.put('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			const newNote = {
				author: req.body.author,
				content: req.body.content
			}

			Request.findByIdAndUpdate(req.body.requestId, {delivered: false, $push: {conversation: newNote}}).then((newlyUpdated, err) => {
				if (err) console.log(err);
				console.log(newlyUpdated);

				res.status(200).json('success');
			})
		}
	})
});


module.exports = router;
