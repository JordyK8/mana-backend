const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    branches: [{
        type: Schema.Types.ObjectId,
        ref: 'Branch',
        required: false,
    }],
})
const Organization = db.model('Organization', organizationSchema);

module.exports = Organization;