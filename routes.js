const express = require('express');
const route = express.Router();
const home = require('./src/controllers/home');
const login = require('./src/controllers/login');

// Home Routes 
route.get('/', home.index);

// Login Routes
route.get('/login/index', login.index);
route.post('/login/register', login.register);

module.exports = route;