const Contact = require('../models/contact');

module.exports.index = async (req, res) => {
    res.render('contacts/index');
}

module.exports.renderNewForm = (req, res) => {
    res.render('contacts/new');
}

module.exports.createContact = async (req, res, next) => {
    const contact = new Contact(req.body.contact);
    await contact.save();
    req.flash('success', 'Successfully created a new contact!');
    res.redirect('/');
}