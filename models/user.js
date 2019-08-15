const mongoose = require('mongoose');
const schema = mongoose.Schema;
var mySchema = new schema({
	name: {
		type: String,
		// Bug :down:
		// unique: [true, 'A donor with that name and number already exists.'],
		required: [true, 'Need your stupid name mate.'],
	},
	bloodGroup: {
		type: String,
		enum: ['A-', 'B-', 'AB-', 'O-', 'A+', 'B+', 'AB+', 'O+'],
		required: [true, 'Need your stupic name bro.'],
	},
	city: {
		type: String,
		required: [true, 'Need your city.'],
	},
	phone: {
		type: Number,
		required: [true, 'Need your stupid number mate.'],
	},
	amount: {
		type: Number,
		default: 0,
	},
});

const UserModel = mongoose.model('user', mySchema);

module.exports = UserModel;
