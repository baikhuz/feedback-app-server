import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// the helper below allows the form to communicate
// with the redux store like the connect method
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

import validateEmails from '../../utils/validateEmails'

import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return formFields.map((field, index) => {
      return (
        <Field
          key={index}
          component={SurveyField}
          type="text"
          label={field.label}
          name={field.name}
        />
      )
    })
  }

  render() {
    // handleSubmit is also provided by the reduxForm library
    return (
      <div style={{ marginTop: '1rem' }}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="grey lighten-2 btn-flat black-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  formFields.forEach(({ name, noValueErr }) => {
    if (!values[name]) {
      errors[name] = noValueErr
    }
  })

  // redux form works in a way that if
  // the errors object is empty, it
  // assumes the form input passed validation
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
