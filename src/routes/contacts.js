const express = require('express');
const router = express.Router({ mergeParams: true });
const { catchAsync, isLoggedIn, isUser, validateContact } = require('../middlewares/middleware');
const Contact = require('../models/contact');
const contacts = require('../controllers/contacts');

// Contact Routes
router.route('/')
    .get(catchAsync(contacts.index))
    .post(isLoggedIn, validateContact, catchAsync(contacts.createContact))

router.get('/new', isLoggedIn, contacts.renderNewForm);

router.route('/:id')
    .get(catchAsync(contacts.showContact))
    .put(isLoggedIn, isUser, validateContact, catchAsync(contacts.updateContact))
    .delete(isLoggedIn, isUser, catchAsync(contacts.deleteContact))

router.get('/:id/edit', isLoggedIn, isUser, catchAsync(contacts.renderEditForm))

module.exports = router;