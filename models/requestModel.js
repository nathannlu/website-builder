const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
	author: {
		id: String,
		name: String,
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
		content: Array,
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
	conversation: {
		type: Array
	},
}, {
	timestamps: true
});

module.exports = User = mongoose.model("Requests", RequestSchema);
