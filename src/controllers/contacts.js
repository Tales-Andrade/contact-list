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
    res.redirect(`/contacts/${contact._id}`);
}

module.exports.renderEditForm = async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        req.flash('error', 'Cannot find that contact!');
        return res.redirect('/contacts');
    }

    res.render('contacts/edit', { contact });
}

module.exports.updateContact = async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { ...req.body.contact });
    await contact.save();
    req.flash('success', 'Successfully updated contact!');
    res.redirect(`/contacts/${contact._id}`);
}