import React from 'react'

// redux form passes different event handlers
// as props to any object we pass as component
// to the Field component

// meta prop contains the error key from validator
// as well as touched field that shows whether the
// user has focused into the field or not yet
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '0.2rem' }} />
      <div className="red-text text-lighten-2" style={{ marginBottom: '1rem' }}>
        {touched && error}
      </div>
    </div>
  )
}
