const mongoose = require('mongoose');
const db = require('../index');

const { Schema } = mongoose;

const postSchema = new Schema({
    category:{
      type: String,
      required: true,
      enum: ['important', 'social', 'news', 'default'],
      default: 'default'
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    img: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true,
    },
    comments: {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    seen: {
      type: Number,
      required: true,
      default: 0,
    },
    likes: {
      type: Number,
      required: true,
      default: 0,
    },
}, {
  timestamps: true,
  collection: 'notifications',    
})
const Post = db.model('Post', postSchema);

module.exports = Post;
