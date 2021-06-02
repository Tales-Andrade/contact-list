const { contactSchema } = require('../../schemas.js');
const ExpressError = require('../../public/assets/js/ExpressError');
const Contact = require('../models/contact');

module.exports.globalMiddleware = (req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.currentUser = req.user;
    next();
}

module.exports.checkCsrfError = (err, req, res, next) => {
    console.log(err);
    if (err) {
        return res.render('404');
    }

    next();
}

module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

module.exports.catchAsync = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isUser = async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact.user.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/contacts/${req.params.id}`);
    }

    next();
}

module.exports.validateContact = (req, res, next) => {
    const { error } = contactSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}