const comment = require('../models/comment')

function upvote(req, res) {
  comment
    .findById(req.params.commentId)
    .then(foundComment => {
      if (!foundComment) throw new Error('Not Found')

      if (foundComment.upvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
        foundComment.upvotes = foundComment.upvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
      } else {
        foundComment.upvotes.push(req.currentUser)
        if (foundComment.downvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
          foundComment.downvotes = foundComment.downvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
        }
      }
      return foundComment.save()
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.status(401).json(err))
}


function downvote(req, res) {

  //! Needs a lot of fixing
  comment
    .findById(req.params.commentId)
    .then(foundComment => {
      if (!foundComment) throw new Error('Not Found')

      if (foundComment.downvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
        foundComment.downvotes = foundComment.downvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
      } else {
        foundComment.downvotes.push(req.currentUser)
        if (foundComment.upvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
          foundComment.upvotes = foundComment.upvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
        }
      }
      return foundComment.save()
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.status(401).json(err))
}

module.exports = { upvote, downvote }