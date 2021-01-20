const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, maxlength: 5000 },
  upvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  comments: [ this ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)