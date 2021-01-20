const mongoose = require('mongoose')

// ! Embedded comments - no longer in use
const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, maxlength: 5000 },
  upvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  comments: [ this ]
}, {
  timestamps: true
})

const postSchema = new mongoose.Schema({
  board: { type: mongoose.Schema.ObjectId, ref: 'Board', required: true },
  title: { type: String, required: true, maxlength: 500 },
  text: { type: String, maxLength: 5000 },
  upvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  //* comments: [commentSchema],
  comments: [{ type: mongoose.Schema.ObjectId, ref: 'Comment' }],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
