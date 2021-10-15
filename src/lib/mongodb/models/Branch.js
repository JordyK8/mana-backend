const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const branchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true,
        default: 'Amsterdam/Europe',
    },
    departments: [{
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: false,
    }],
})
const Branch = db.model('Branch', branchSchema);

module.exports = Branch;