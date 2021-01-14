const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 500 },
  text: { type: String, maxLength: 5000 },
  upvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)