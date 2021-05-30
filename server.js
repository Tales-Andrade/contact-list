const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { globalMiddleware, anotherMiddleware } = require('./src/middlewares/middleware');

// Enables to receive req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Our Middlewares
app.use(globalMiddleware);
app.use(anotherMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Access on the link http://localhost:3000');
    console.log('Server has been executed on port 3000!');
});