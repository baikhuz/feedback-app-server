const passport = require('passport')

module.exports = app => {
  // the 'google' parameter points to GoogleStrategy internally inside passport.js
  // scope - specifies what user info passport.js needs to use. the list of all those
  // can be found in the passport documentation
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  // here, passport will see the code in the url, and
  // it's not going to kick the user into the oauth flow, but
  // use the code and pass it to the client
  app.get('/auth/google/callback', passport.authenticate('google'))

  app.get('/api/logout', (req, res) => {
    // passport attaches the logout method to req
    req.logout()
    res.send(req.user)
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}
