const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
})

// when using 2 arguments, we are telling mongoose that we are trying
// to load something into mongo, 1 argument - that we are fetching data
mongoose.model('users', userSchema)
