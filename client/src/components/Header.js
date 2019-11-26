import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Feedbackr.</a>
          <ul className="right">
            <li>
              <a>Sign in with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
