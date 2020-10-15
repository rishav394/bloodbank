const mongoose = require('mongoose');
var names = require('./names.json');
var addresses = require('./addresses.json');
var cities = require('./cities.json');
var phones = require('./phone.json');
var bloods = require('./bloods.json');

const userModel = require('../models/user');

mongoose.connection.on('open', () => {
  populate();
});

require('../index.js');

const populate = () => {
  console.log('Ready to populate!');
  phones = [...new Set(phones)];
  phones.forEach((phone) => {
    new userModel({
      name: names[Math.floor(Math.random() * names.length)],
      bloodGroup: bloods[Math.floor(Math.random() * bloods.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      phone: phone,
      amount: Math.floor(Math.random() * 10),
      address: addresses[Math.floor(Math.random() * addresses.length)],
    })
      .save()
      .then((user) => {
        console.log(user.phone, ' added!');
      });
  });
  require('fs').writeFile(
    __dirname + '/phone.json',
    JSON.stringify(phones, null, 4),
    'utf8',
    (err) => {
      if (err) console.log(err);
    }
  );
  console.log('Finished Populating!');
};
