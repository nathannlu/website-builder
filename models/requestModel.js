const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
	author: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	dimensions: {
		type: Object,
		required: true
	},
	description: {
		content: String,
		customAssets: Array,
		customText: String,
	},
	assets: {
		unsplashAssets: Array,
		findForMeDescription: String,
	},
	filetypes: Array,
	delivered: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model("Requests", RequestSchema);
