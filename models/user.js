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
		validate: {
			validator: function(v) {
				return /(A|B|AB|O)[+-]/.test(v);
			},
			message: (props) => `${props.value} is not a valid Blood Group!`,
		},
		required: [true, 'Need your Blood Group.'],
	},
	city: {
		type: String,
		required: [true, 'Need your city.'],
	},
	phone: {
		type: Number,
		get: (v) => Math.floor(v),
		set: (v) => Math.floor(v),
		// validate: {
		// 	vali
		// },
		required: [true, 'Need your stupid number mate.'],
	},
	amount: {
		type: Number,
		default: 0,
		validate: {
			validator: function(v) {
				return v >= 0;
			},
			message: (props) =>
				`${props.value} is not a valid amount to Donate!`,
		},
	},
});

const UserModel = mongoose.model('user', mySchema);

module.exports = UserModel;
