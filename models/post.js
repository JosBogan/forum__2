const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 500 },
  text: { type: String, maxLength: 5000 },
  upvotes: { type: Number, required: true },
  downvotes: { type: Number, required: true }
})

module.exports = mongoose.model('Post', postSchema)