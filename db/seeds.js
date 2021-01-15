const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()

    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})