const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const router = require('./config/router')
const logger = require('./config/logger')
const { port, dbURI } = require('./config/environment')

const app = express()

mongoose.connect(
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  }
)

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.listen(port, () => {
  console.log(`Up and running on port ${port}`)
})

module.exports = app