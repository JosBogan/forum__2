const user = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function index(req, res) {
  user
    .find()
    .then(foundUsers => res.status(200).json(foundUsers))
    .catch(err => res.status(404).json(err))
}

function register(req, res) {
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
  // console.log(req.body)
  user
    .findOne({ email: req.body.email })
    .then(foundUser => {

      if (!foundUser || !foundUser.validatePassword(req.body.password)) {

        return res.status(401).json({ message: 'Unauthorised' })
      }
      console.log('getting here')
      const token = jwt.sign({ sub: foundUser._id }, secret, { expiresIn: '6h' })
      return res.status(200).json({ message: 'Welcome Back', token })
    })
    .catch(err => res.status(400).json(err))
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


module.exports = { index, register, login, show, destroy }