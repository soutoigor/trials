const {
  model,
  Schema,
} = require('mongoose')

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
  code: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  like: {
    type: Number,
    required: false,
  },
  comments: [{
    authorName: {
      type: String,
      trim: true,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      required: true,
    },
  }],
})


const Post = model('Post', postSchema)

module.exports = Post
