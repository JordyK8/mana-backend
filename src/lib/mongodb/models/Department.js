const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: false,
    }],
})
const Department = db.model('Department', departmentSchema);

module.exports = Department;