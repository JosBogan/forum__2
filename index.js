const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000

const app = express()

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`)
})