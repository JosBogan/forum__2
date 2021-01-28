const board = require('../models/board')

function index(req, res) {
  board
    .find()
    .then(foundBoards => {
      return res.status(200).json(foundBoards)
    })
    .catch(err => res.status(404).json(err))
}

function search(req, res) {
  board
    .find()
    .then(foundBoards => {
      const filteredBoards = foundBoards.filter(board => board.name.toLowerCase().includes(req.params.name.toLowerCase()))
      filteredBoards.sort((a, b) => {
        if (a.name.toLowerCase().startsWith(req.params.name.toLowerCase())) return -1
        else if (b.name.toLowerCase().startsWith(req.params.name.toLowerCase())) return 1
        return 0
      })
      return filteredBoards
    })
    .then(sortedBoards => {
      return res.status(200).json(sortedBoards)
    })
    .catch(err => res.status(404).json(err))
}

function create(req, res) {
  board
    .create(req.body)
    .then(createdBoard => {
      return res.status(201).json(createdBoard)
    })
    .catch(err => res.status(401).json(err))
}

function show(req, res) {
  board
    .findById(req.params.id)
    .populate('posts')
    .then(foundboard => {
      if (!foundboard) throw new Error('Not Found')
      return res.status(200).json(foundboard)
    })
    .catch(err => res.status(404).json(err))
}

function destroy(req, res) {
  board
    .findById(req.params.id)
    .then(foundboard => {
      if (!foundboard) throw new Error('Not Found')
      return foundboard.remove()
    })
    .then(() => res.sendStatus(204))
}


module.exports = { index, create, show, destroy, search }