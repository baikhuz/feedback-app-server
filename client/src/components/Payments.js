import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feedbackr."
        description="50 cents for 5 survey credits"
        amount={50}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add 5 Credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments)
