const {
  create: createTask,
  list: listTasks,
  update: updateTask,
  remove: removeTask,
} = require('../services/task')

const create = (req, res) => {
  createTask(req.body)
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

const list = (req, res) => {
  listTasks()
    .then((tasks) => {
      res.json(tasks)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const update = (req, res) => {
  updateTask(req.body, req.params.id)
    .then((tasks) => {
      if (tasks.message === 'Task not found') {
        res.status(404).send(tasks.message)
      }
      res.json(tasks)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

const remove = (req, res) => {
  removeTask(req.params.id)
    .then((task) => {
      if (task.message === 'Task not found') {
        return res.status(404).send(task.message)
      }
      res.json(task)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  create,
  list,
  update,
  remove,
}
