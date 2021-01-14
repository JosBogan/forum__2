const board = require('../models/board')

function index(req, res) {
  board
    .find()
    .then(foundBoards => {
      return res.status(200).json(foundBoards)
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

module.exports = { index, create, show, destroy }