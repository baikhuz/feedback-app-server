import React from 'react'
import { connect } from 'react-redux'

import formFields from './formFields'

import { withRouter } from 'react-router-dom'

import * as actions from '../../actions'

function SurveyFormReview({ onBack, formValues, submitSurvey, history }) {
  const reviewFields = formFields.map((field, index) => {
    return (
      <div key={index} style={{ marginBottom: '0.7rem' }}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please review your entries</h5>
      {reviewFields}
      <button className="grey lighten-2 btn-flat black-text" onClick={onBack}>
        Back
      </button>
      <button
        className="teal btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey!{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
