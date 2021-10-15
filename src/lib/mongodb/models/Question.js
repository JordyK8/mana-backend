const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const questionSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    hint: {
        type: String,
        required: true
    },
    type: {
        enum: ['open', 'multiple'],
        default: 'open'
    },
    choices: [{
        name: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            required: false,
        }
    }],
    answer: {
        type: String,
        required: true,
        
    },
    scoreWeight: {
        type: Number,
        required: true,
    }
})
const Question = db.model('Question', questionSchema);

module.exports = Question;