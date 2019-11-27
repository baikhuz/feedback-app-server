const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  // requireLogin is used as the middleware for this route
  // it first runs the function, which returns 401 if the
  // user is not logged in

  app.post('/api/stripe', requireLogin, async (req, res) => {
    // source is the token passed by the stripe-checkout on the frontend
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 credits for feedbackr',
      source: req.body.id
    })

    req.user.credits += 5

    // saves the user model. user is attached to req by passport
    const user = await req.user.save()

    res.send(user)
  })
}
