const Task = require('../models/task')
const {
  forEach,
  all,
  isNil,
  includes,
  keys,
} = require('ramda')

const create = async (attributes) => {
  const task = new Task(attributes)

  try {
    await task.save()
    return task
  } catch (err) {
    return err
  }
}

const list = async () => {
  try {
    const tasks = await Task.find({})
    return tasks
  } catch (err) {
    return err
  }
}

const listById = async (id) => {
  try {
    const task = await Task.findById(id)
    if (isNil(task)) throw new Error('Task not found')
    return task
  } catch (err) {
    return err
  }
}

const update = async (attributes, id) => {
  const updates = keys(attributes)
  const allowedUpdates = ['text', 'status']
  const isValidOperation = all(update => includes(update, allowedUpdates), updates)
  if (!isValidOperation) throw new Error('Invalid update')

  try {
    const task = await Task.findById(id)
    if (isNil(task)) throw new Error('Task not found')
    forEach(
      (update) => {
        task[update] = attributes[update]
      },
      updates,
    )
    await task.save()
    return task
  } catch (err) {
    return err
  }
}

const remove = async (id) => {
  try {
    const task = await Task.findByIdAndDelete(id)
    if (isNil(task)) throw new Error('Task not found')
    return task
  } catch (err) {
    return err
  }
}

module.exports = {
  create,
  list,
  listById,
  update,
  remove,
}
