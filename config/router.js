const router = require('express').Router()
const boards = require('../controllers/boards')
const users = require('../controllers/users')

router.route('/boards')
  .get(boards.index)
  .post(boards.create)

router.route('/boards/:id')
  .get(boards.show)
  .delete(boards.destroy)

router.route('/users')
  .get(users.index)
  .post(users.register)

router.route('/users/:id')
  .get(users.index)
  .delete(users.destroy)

router.route('/login')
  .post(users.login)

module.exports = router