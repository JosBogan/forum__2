const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Board', boardSchema)