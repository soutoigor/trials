const express = require('express')
const cors = require('cors');
require('./src/db/mongoose')
require('dotenv').config()
const userRouter = require('./src/routes/post')

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())
app.use(userRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
