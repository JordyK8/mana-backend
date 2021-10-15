const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const quizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: false,
    }],
    passingScore: {
        type: Number,
        required: true,
    }
})
const Quiz = db.model('Quiz', quizSchema);

module.exports = Quiz;