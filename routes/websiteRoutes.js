const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


// Load models
const User = require('../models/userModel');
const Website = require('../models/websiteModel');

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

// @route GET api/websites/
// @desc Fetches all websites belonging to user 
// @access Private 
router.get('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			Website.find({author: authorizedData.id}, (err, foundWebsites) => {
				if (err) console.log(err);

				res.status(200).json(foundWebsites);
			})
		}
	})
});

// @route GET api/websites/:pageName
// @desc Fetches specific website page 
// @access Private 
router.get('/:title/:pageName', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			Website.findOne(
			{
				'author': authorizedData.id, 
				'title': req.params.title,
				'pages': {$elemMatch: {'pageName': req.params.pageName}}
			}, (err, websiteData) => {
				if (err) console.log(err);
				
				res.status(200).json(websiteData);
			})
		}
	})
});

// @route POST api/websites/
// @desc Creates new website with default page "home" 
// @access Private 
router.post('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			console.log(err);
			res.sendStatus(403);
		} else {
			let data = req.body
			data.author = authorizedData.id

			Website.create(data, (err, newWebsite) => {
				if (err) console.log(err);
				res.status(200).json('success');
			})		
		}
	})
});

// @route POST api/websites/pages
// @desc Creates new page with req.body 
// @access Private 
router.post('/pages', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			console.log(err);
			res.sendStatus(403);
		} else {
			var data = {
				pageName: req.body.newPage.pageName.toLowerCase()
			}

			Website.findOneAndUpdate({author: authorizedData.id, title: req.body.title}, {$push: {pages: data}}, (err, updatedWebsite) => {
				if(err) console.log(err)

				res.status(200).json('success');
			})
		}
	})
});

// @route PUT api/websites/
// @desc Takes in pageName and pageData from body to update a user's web page. 
// @access Private 
router.put('/', checkToken, (req, res) => {
	jwt.verify(req.token, keys.secretOrKey, async (err, authorizedData) => {
		if (err) {
			console.log(err);
			res.sendStatus(403);
		} else {
			Website.findOneAndUpdate(
			{
				'author': authorizedData.id, 
				'title':  req.body.title,
				'pages': {$elemMatch: {'pageName': req.body.pageName}}
			},
			{
				$set: {'pages.$.pageData': req.body.pageData}	
			},
			{
				'new': true, 'safe': true, 'upsert': true	
			}, (err, updatedWebsite) => {
				if (err) console.log(err);

				res.status(200).json('success');
			})
		}
	})
});

module.exports = router;
