import React from 'react';

import SignInForm from './SignInForm';


function SignInTmpl () {
    
  return (
    <div>
    {this.props['signInState']['code']&& <div>{this.props['signInState']['message']}</div>}
    <SignInForm {...this.props} />
    </div>
  )
}


export default SignInTmpl;
