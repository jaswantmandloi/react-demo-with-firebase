import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FirebaseActions from '../../Shared/FirebaseActions';
import SignUpFormTmpl from './SignUpFormTmpl';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } 

    return errors
  }

  const warn = values => {
    const warnings = {};    
    return warnings
  }




class SignUpForm extends Component {
    constructor(props) {
        super(props);          
    }

    submit(values) {
      values.firstName = values.email;
      values.lastName = values.password;
      FirebaseActions.createUser(values);    
      return values;   

      return sleep(1000) // simulate server latency
        .then(() => {
          return values;
        })
    }

    render () {
       return SignUpFormTmpl.call(this);
    }
}


export default reduxForm({
    form: 'SignUpForm',
    validate,
    warn
  })(SignUpForm)

