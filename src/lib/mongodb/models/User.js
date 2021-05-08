const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
const User = db.model('User', userSchema);

module.exports = User;