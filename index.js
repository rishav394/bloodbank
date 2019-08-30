var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var mongoose = require('mongoose');
var userModel = require('./models/user');
require('dotenv').config();

const KEY = process.env.KEY;
var dburi = process.env.DBURI;

const escapeRegExp = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

mongoose.connect(dburi, { useNewUrlParser: true }, (err) => {
	if (err) throw err;
	else console.log('Connected to mongoDb');
});

app.use(express.static('public/js'));
app.use(express.static('public/css'));
app.use(express.static('public/img'));
app.use(express.static('public/json'));
app.use(cookieParser(KEY));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/register', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/register.html'));
});

app.post('/register', (req, res) => {
	userModel
		.findOne({ phone: req.body.phone })
		.then((user) => {
			if (user == null) {
				new userModel({
					name: req.body.name.toUpperCase(),
					bloodGroup: req.body.blood.toUpperCase() + req.body.rh,
					city: req.body.city.toUpperCase(),
					phone: req.body.phone,
					amount: req.body.amount || 0,
					address: req.body.address,
				})
					.save()
					.then((user) => {
						res.cookie('user', user.phone, {
							signed: KEY,
							maxAge: 7 * 24 * 3400,
						});
						res.redirect('/donate');
					})
					.catch((err) => {
						res.send(
							err.message + '\nPlease go Back and try again.',
						);
					});
			} else {
				res.cookie('user', user.phone, {
					signed: KEY,
					maxAge: 7 * 24 * 3400,
				});
				res.redirect('/donate');
			}
		})
		.catch((err) => {
			res.send(err.message);
		});
});

app.post('/donate', (req, res) => {
	if (req.body.amount == undefined || req.body.amount <= 0) {
		res.redirect('back');
		return;
	}
	userModel.findOne({ phone: req.signedCookies.user }, function(err, doc) {
		if (err) res.send(err);
		if (!doc) {
			res.redirect('/logout');
			console.error('WTF should not happen.');
			return;
		}
		doc.amount += parseFloat(req.body.amount);
		doc.save({
			validateBeforeSave: true,
		})
			.then(res.redirect('/donate'))
			.catch((err) => {
				res.send(err.message);
			});
	});
});

app.get('/donate', (req, res) => {
	if (req.signedCookies.user) {
		// Greet user and Ask how much to donate
		userModel
			.findOne({ phone: req.signedCookies.user })
			.then((user) => {
				if (user == null) {
					// Should not happen
					console.error('WTF should not happen.');
					res.redirect('/logout');
				} else {
					res.render('donate', {
						user: {
							name: user.name,
							amount: user.amount,
						},
					});
				}
			})
			.catch((err) => {
				console.error(err);
				res.send(err.message);
			});
	} else {
		res.redirect('/register');
	}
});

app.get('/bank', (req, res) => {
	if (req.signedCookies.user == null) {
		res.redirect('/register');
		return;
	}
	if (req.query.blood == undefined || req.query.blood == '') {
		req.query.blood = '';
		if (req.query.rh != undefined) {
			req.query.blood += escapeRegExp(req.query.rh);
		}
	}
	if (req.query.city == undefined) req.query.city = '';

	var query = {
		$and: [
			{ bloodGroup: { $regex: req.query.blood, $options: 'i' } },
			{ city: { $regex: req.query.city, $options: 'i' } },
			// { amount: { $ne: req.query.zeros } },
		],
	};
	userModel.find(query, function(err, docs) {
		if (err) res.send(err);
		res.render('bank', { docs: docs, logged: req.signedCookies.user });
	});
});

app.get('/logout', (req, res) => {
	res.clearCookie('user');
	res.redirect('/');
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('App listening on port ' + port + '!');
});
