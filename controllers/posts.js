const post = require('../models/post')

const board = require('../models/board')

function show(req, res) {
  post
    .findById(req.params.id)
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

function comment(req, res) {

  const newComment = req.body
  newComment.user = req.currentUser

  // ! IF IT IS EMBEDDED THEN YOU DONT NEED TO

  post
    .findById(req.params.id)
    .then(foundPost => {
      if (!foundPost) throw new Error('Not Found')
      foundPost.comments.push(newComment)
      return foundPost.save()
    })
    .then(savedPost => res.status(201).json(savedPost))
    .catch(err => res.status(401).json(err))
}

module.exports = { create, comment, show }