module.exports.globalMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
}

module.exports.anotherMiddleware = (req, res, next) => {
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