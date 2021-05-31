const Login = require('../models/LoginModel');

module.exports.index = (req, res) => {
    return res.render('login');
}

module.exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Your user was successfully registered.')
        req.session.save(function () {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}