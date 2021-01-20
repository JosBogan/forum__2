const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Board = require('../models/board')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create({
        username: 'Jos',
        email: 'jos@email.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})