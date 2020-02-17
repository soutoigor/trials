const {
  model,
  Schema,
} = require('mongoose')
const moment = require('moment')

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  status: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
})

const Task = model('Task', taskSchema)

module.exports = Task
