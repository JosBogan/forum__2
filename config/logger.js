function logger(req, res, next) {
  console.log(`incomming ${req.method} request to ${req.url}`)
  next()
}

module.exports = logger