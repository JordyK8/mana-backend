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
    user: {
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
        required: false,
      },
      message: {
        type: String,
        required: false,
      },
      date: {
        type: Date,
        required: false,
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
  collection: 'posts',    
})
const Post = db.model('Post', postSchema);

module.exports = Post;
