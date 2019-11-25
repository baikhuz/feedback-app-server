// this file to figure out which set of creds to return - dev or prod
if (process.env.NODE_ENV === 'production') {
  // heroku automatically sets NODE_ENV to 'production'
  module.exports = require('./prod')
} else {
  // on a local machine, NODE_ENV is not defined
  module.exports = require('./dev')
}
