import React from 'react';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

function SignInFormTmpl () {
    const { handleSubmit, pristine, reset, submitting, error } = this.props
  return (
    <form onSubmit={handleSubmit(this.submit)}>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Sign In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}


export default SignInFormTmpl;
