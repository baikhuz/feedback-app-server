const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')

require('./models/User')
require('./models/Survey')
require('./services/passport')

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected.'))
  .catch(err => console.log(`DB connection error: ${err.message}`))

const app = express()

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

// react deployment setup:
if (process.env.NODE_ENV === 'production') {
  // making sure express serves production assets
  // if any get request comes to the app that express
  // does not know about, the app will look into this folder
  app.use(express.static('client/build'))

  // making sure express serves index.html file
  // if it does not recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// dynamic port binding for heroku deployment
const PORT = process.env.PORT || 5000
app.listen(PORT)
