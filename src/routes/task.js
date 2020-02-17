const express = require('express')
const {
  create,
  list,
  listById,
  update,
  remove,
} = require('../controllers/task')

const router = express.Router()

router
  .post('/task', create)
  .get('/task', list)
  .get('/task/:id', listById)
  .patch('/task/:id', update)
  .delete('/task/:id', remove)

module.exports = router
