const express = require('express')
const cors = require('cors');
require('./src/db/mongoose')
require('dotenv').config()
const postRouter = require('./src/routes/post')
const taskRouter = require('./src/routes/task')

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())
app.use(postRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
