const express = require('express');
const router = express.Router({ mergeParams: true });
const { catchAsync, isLoggedIn, validateContact } = require('../middlewares/middleware');
const Contact = require('../models/contact');
const contacts = require('../controllers/contacts');

// Contact Routes
router.route('/')
    .get(catchAsync(contacts.index))
    .post(isLoggedIn, validateContact, catchAsync(contacts.createContact))

router.get('/new', isLoggedIn, contacts.renderNewForm);

module.exports = router;