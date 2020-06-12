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
