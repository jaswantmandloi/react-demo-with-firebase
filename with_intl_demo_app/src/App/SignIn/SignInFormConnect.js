import { reduxForm } from "redux-form";

import SignInForm from "./SignInForm";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  return warnings;
};


export default reduxForm({
  form: "SignInForm",
  validate,
  warn
})(SignInForm);
