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
});

module.exports = User = mongoose.model("Requests", RequestSchema);
