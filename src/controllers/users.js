const User = require('../models/users');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
};

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);

        req.login(registeredUser, err => {
            if (err) return next(err);

            req.flash('success', 'Welcome to your contact list!');
            res.redirect('/');
        });
    } catch (e) {
        console.log(e);
        req.flash('error', 'An error has occurred in registration.');
        res.redirect('register');
    }
}