import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
const Landing = () => <h1>Landing</h1>
const SurveyNew = () => <h1>SurveyNew</h1>
const Dashboard = () => <h1>Dashboard</h1>

export default function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </Router>
    </div>
  )
}
