const router = require('express').Router()
const boards = require('../controllers/boards')

router.route('/boards')
  .get(boards.index)
  .post(boards.create)

module.exports = router