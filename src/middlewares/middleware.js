module.exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'This is the value of the local variable';
    next();
}

module.exports.anotherMiddleware = (req, res, next) => {
    next();
}