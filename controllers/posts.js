const post = require('../models/post')

const board = require('../models/board')

const commentModel = require('../models/comment')

function index(req, res) {
  post
    .find()
    .then(allPosts => {
      return allPosts.sort((a, b) =>  b.createdAt.getTime() - a.createdAt.getTime())
    })
    .then(sortedPosts => {
      res.status(200).json(sortedPosts)
    })
    .catch(err => res.status(401).json(err))
}

function show(req, res) {
  post
    .findById(req.params.postId)
    .populate('comments')
    .then(foundPost => {
      if (!foundPost) throw new Error('Not Found')
      return res.status(200).json(foundPost)
    })
    .catch(err => res.status(401).json(err))
}

function create(req, res) {
  const newPost = req.body

  newPost.user = req.currentUser
  newPost.board = req.params.id


  // ! WHEN ADDING TO A ONE TO MANY RELA?TION?SHIP, IF THE RELATIONSHIP IS NOT EMBEDDED THEN YOU NEED TO CREATE THE OBJECT FIRST

  post
    .create(newPost)
    .then(createdPost => {
      board
        .findById(req.params.id)
        .then(foundBoard => {
          if (!foundBoard) throw new Error('Not Found')
          console.log(foundBoard)
          foundBoard.posts.push(createdPost)
          return foundBoard.save()
        })
        .then(() => res.status(201).json(createdPost))
    })
    .catch(err => res.status(401).json(err))
}

function upvote(req, res) {

  //! Needs a lot of fixing
  post
    .findById(req.params.postId)
    .then(foundPost => {
      if (!foundPost) throw new Error('Not Found')

      if (foundPost.upvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
        foundPost.upvotes = foundPost.upvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
      } else {
        foundPost.upvotes.push(req.currentUser)
        if (foundPost.downvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
          foundPost.downvotes = foundPost.downvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
        }
      }
      return foundPost.save()
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.status(401).json(err))
}

function downvote(req, res) {

  //! Needs a lot of fixing
  post
    .findById(req.params.postId)
    .then(foundPost => {
      if (!foundPost) throw new Error('Not Found')

      if (foundPost.downvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
        foundPost.downvotes = foundPost.downvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
      } else {
        foundPost.downvotes.push(req.currentUser)
        if (foundPost.upvotes.find(item => item._id.toString() === req.currentUser._id.toString())) {
          foundPost.upvotes = foundPost.upvotes.filter(item => item._id.toString() !== req.currentUser._id.toString())
        }
      }
      return foundPost.save()
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.status(401).json(err))
}

function comment(req, res) {

  const newComment = req.body
  newComment.user = req.currentUser

  // ! IF IT IS EMBEDDED THEN YOU DONT NEED TO

  commentModel
    .create(newComment)
    .then(createdComment => {
      console.log(createdComment)
      if (req.params.postId) {
        post
          .findById(req.params.postId)
          .then(foundPost => {
            foundPost.comments.push(createdComment)
            console.log(foundPost)
            return foundPost.save()
          })
          .then(savedPost => res.status(201).json(savedPost))
          .catch(err => res.status(401).json(err))
      } else {
        
        commentModel
          .findById(req.params.commentId)
          .then(foundComment => {
            foundComment.comments.push(createdComment)
            return foundComment.save()
          })
          .then(savedComment => res.status(201).json(savedComment))
          .catch(err => res.status(401).json(err))
      }
    })

  // ! With embedded comments
  // post
  //   .findById(req.params.id)
  //   .then(foundPost => {
  //     if (!foundPost) throw new Error('Not Found')
  //     if (! req.params.commentId) {
  //       foundPost.comments.push(newComment)
  //       return foundPost.save()
  //     }
  //     foundPost.comments.id(req.params.commentId).comments.push(newComment)
  //     return foundPost.save()
  //   })
  //   .then(savedPost => res.status(201).json(savedPost))
  //   .catch(err => res.status(401).json(err))
}

module.exports = { create, comment, show, upvote, downvote, index }