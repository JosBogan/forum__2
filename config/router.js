const router = require('express').Router()
const boards = require('../controllers/boards')

router.route('/boards')
  .get(boards.index)
  .post(boards.create)

router.route('/boards/:id')
  .get(boards.show)
  .delete(boards.destroy)

module.exports = router