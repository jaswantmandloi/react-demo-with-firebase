import React from 'react';

import SignUpForm from './SignUpForm';


function SignUpTmpl () {
    
  return (
    <div>
    {this.props['signUpState']['code']&& <div>{this.props['signUpState']['message']}</div>}
    <SignUpForm {...this.props} />
    </div>
  )
}


export default SignUpTmpl;
