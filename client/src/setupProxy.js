const proxy = require('http-proxy-middleware')
module.exports = app =>
  app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))

// adding more proxy instances will require more app.use() calls
