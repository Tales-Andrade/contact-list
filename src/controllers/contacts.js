const Contact = require('../models/contact');

module.exports.index = async (req, res) => {
    res.render('contacts/index');
}

module.exports.renderNewForm = (req, res) => {
    res.render('contacts/new');
}

module.exports.createContact = async (req, res, next) => {
    const contact = new Contact(req.body.contact);
    contact.user = req.user._id;
    await contact.save();
    req.flash('success', 'Successfully created a new contact!');
    //res.redirect(`/contacts/${contact._id}`);
    res.redirect('/');
}