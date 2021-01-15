const base = process.env.NODE_ENV || 'development'
const port = 4000
const dbURI = `mongodb://localhost/forum-${base}` // Location of our database on our local machine
const secret = 'secret'

module.exports = { port, dbURI, base } 