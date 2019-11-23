const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()

// creates a new instance of strategy class,
// specifies parameters including the callback url
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleCliendID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken)
      console.log('refresh token', refreshToken)
      console.log('profile:', profile)
    }
  )
)

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

// dynamic port binding for heroku deployment
const PORT = process.env.PORT || 5000
app.listen(PORT)
