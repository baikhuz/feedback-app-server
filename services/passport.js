const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

// best practice for requiring models instead of requiring the file:
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

// the function to generate a cookie using the id from the user in the db
// the id is the one automatically assigned to the record by mongodb
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// turns id into mongoose model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
})

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
      // see if the user ID exists in the db before creating
      User.findOne({ googleId: profile.id })
        .then(existingUser => {
          existingUser
            ? // VV built-in function that tells passport to procees with the authentication flow
              // VV first arg is error, second is the user to authenticate
              done(null, existingUser)
            : // VV creates the new instance of User class and saves a record to mongo
              new User({ googleId: profile.id })
                .save()
                .then(user => done(null, user))
        })
        .catch(err => console.log(err.message))
    }
  )
)
