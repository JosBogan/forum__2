const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userName: { type: String, maxLength: 50, unique: true, required: true },
  email: { type: String, maxLength: 100, unique: true, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema)