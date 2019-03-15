import { Component } from "react";

import SignInFormTemplate from "./SignInFormTemplate";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {  
    this.props.login({}, this.props);
    return values;
  }

  render() {
    return SignInFormTemplate.call(this);
  }
}


