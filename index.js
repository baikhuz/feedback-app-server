const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ hello: 'there' })
})

// dynamic port binding for heroku deployment
const PORT = process.env.PORT || 5000
app.listen(PORT)
