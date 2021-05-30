module.exports.mainPage = (req, res) => {
    res.render('index', {
        title: 'This is the home page title',
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return
}

module.exports.form = (req, res) => {
    res.send(req.body);
    return;
}