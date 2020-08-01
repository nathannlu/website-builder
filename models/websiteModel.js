const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebsiteModel = new Schema({
	title: {
		type: String,
		required: true, 
	},
	author: {
		type: String,
		required: true,
	},
	pages: {
		type: Array,
		default: {
			pageName: 'home'
		},
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Website = mongoose.model("Websites", WebsiteModel);
