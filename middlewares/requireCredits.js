// to verify the user has credits on the account
module.exports = (req, res, next) => {
  if (req.user.credits < 1)
    return res
      .status(403)
      .send({ error: 'You must have at least 1 survey credit to proceed' })

  next()
}
