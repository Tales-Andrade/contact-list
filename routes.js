const express = require('express');
const route = express.Router();
const home = require('./src/controllers/home');
const contact = require('./src/controllers/contact');

// Home Routes 
route.get('/', home.mainPage);
route.post('/', home.form);

// Contact Routes
route.get('/contact', contact.mainPage);

module.exports = route;