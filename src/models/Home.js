const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

const Home = mongoose.model('Home', HomeSchema);

module.exports = Home;