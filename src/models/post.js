const {
  model,
  Schema,
} = require('mongoose')
const moment = require('moment')

const postSchema = new Schema({
  authorName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  like: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
  comments: [{
    authorName: {
      type: String,
      trim: true,
      required: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    createdAt: {
      type: Date,
      default: moment(),
    },
  }],
})


const Post = model('Post', postSchema)

module.exports = Post
