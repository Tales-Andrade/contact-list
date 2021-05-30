module.exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'This is the value of the local variable';
    next();
}

module.exports.anotherMiddleware = (req, res, next) => {
    next();
}

module.exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
}

module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}