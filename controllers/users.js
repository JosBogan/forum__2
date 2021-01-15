const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { find } = require('../models/user')

function index(req, res) {
  user
    .find()
    .then(foundUsers => res.status(200).json(foundUsers))
    .catch(err => res.status(404).json(err))
}

function register(req, res) {
  console.log('request body', req.body)
  user
    .create(req.body)
    .then(createdUser => res.status(201).json(createdUser))
    .catch(err => {
      console.log(err)
      res.status(401).json(err)
    }
    )
}
function login(req, res) {
  user
    .find({ email: req.body.email })
    .then(foundUser => {
      if (!foundUser || !user.validatePassword(req.bosy.password)) {
        return res.status(401).json({ message: 'Unauthorised' })
      }

    })

  //compare the encrypted passwords
  // if they match, then return with a json webtoken
}

function show(req, res) {
  user
    .findById(req.params.id)
    .then(foundUser => {
      if (!foundUser) throw new Error('Not Found')
      return res.status(200).json(foundUser)
    })
    .catch(err => res.status(404).json(err))
}

function destroy(req, res) {
  user
    .findById(req.params.id)
    .then(foundUser => {
      if (!foundUser) throw new Error('Not Found')
      return foundUser.remove()
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.status(404).json(err))
}


module.exports = { index, register, show, destroy }