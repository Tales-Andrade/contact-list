const express = require('express');
const router = express.Router({ mergeParams: true });
const passport = require('passport');
const { catchAsync } = require('../middlewares/middleware');
const users = require('../controllers/users');

// Register Routes
router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

// Login Routes
router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

// Logout Routes
router.get('/logout', users.logout);

module.exports = router;