const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const chatSchema = new Schema({
    users: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }],
    messages:[{
      content: {
          type: String,
          required: false,
      },
      file: {
        type: String,
        required: false,
      },
      time: {
        type: Number,
        required: false,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      }    
    }],

})
const Chat = db.model('Chat', chatSchema);

module.exports = Chat;