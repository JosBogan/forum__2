const router = require('express').Router()

const boards = require('../controllers/boards')
const users = require('../controllers/users')
const posts = require('../controllers/posts')

const secureRoute = require('../lib/secureRoute')

router.route('/boards')
  .get(boards.index)
  .post(secureRoute, boards.create)

router.route('/boards/:id')
  .get(boards.show)
  .delete(secureRoute, boards.destroy)
  .post(secureRoute, posts.create)

router.route('/posts/:postId')
  .post(secureRoute, posts.comment)
  .get(posts.show)

router.route('/posts/:postId/upvote')
  .get(secureRoute, posts.upvote)

router.route('/comments/:commentId')
  .post(secureRoute, posts.comment)

router.route('/users')
  .get(users.index)
  .post(users.register)

router.route('/users/:id')
  .get(users.index)
  .delete(secureRoute, users.destroy)

router.route('/login')
  .post(users.login)

module.exports = router