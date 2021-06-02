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

router.route('/:id')
    .get(catchAsync(contacts.showContact))
    .put(isLoggedIn, validateContact, catchAsync(contacts.updateContact))
    .delete(isLoggedIn, catchAsync(contacts.deleteContact))

router.get('/:id/edit', isLoggedIn, catchAsync(contacts.renderEditForm))

module.exports = router;