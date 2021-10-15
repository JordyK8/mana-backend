const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }],
})
const Team = db.model('Team', teamSchema);

module.exports = Team;