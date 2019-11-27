// route protection against unauthorized users

// next is a function that's called when the middleware is complete
// it launches the next middleware
module.exports = (req, res, next) => {
  if (!req.user)
    return res.status(401).send({ error: 'You must be logged in.' })

  next()
}
