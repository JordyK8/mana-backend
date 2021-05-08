const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const agentSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
const Agent = db.model('Agent', agentSchema);

module.exports = Agent;