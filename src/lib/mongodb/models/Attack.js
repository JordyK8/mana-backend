const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const attackSchema = new Schema({
    intencity: {
        type: String,
        required: true
    },
    start: {
        type: Number,
        required: true
    },
    end: {
        type: Number,
        required: true
    }
})
const Attack = db.model('Attack', attackSchema);

module.exports = Attack;