const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: false 
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	stripeCustomerId: {
		type: String,
	},
	subscription: {
		type: Object,
	},
	websiteData: {
		type: String,
		default: '',
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model("Users", UserSchema);
