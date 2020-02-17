const express = require('express')
const {
  create,
  list,
  update,
  remove,
} = require('../controllers/task')

const router = express.Router()

router
  .post('/task', create)
  .get('/task', list)
  .patch('/task/:id', update)
  .delete('/task/:id', remove)

module.exports = router
