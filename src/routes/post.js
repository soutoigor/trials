const express = require('express')
const {
  create,
  list,
  update,
  remove,
} = require('../controllers/post')

const router = express.Router()

router
  .post('/post', create)
  .get('/post', list)
  .patch('/post/:id', update)
  .delete('/post/:id', remove)

module.exports = router
