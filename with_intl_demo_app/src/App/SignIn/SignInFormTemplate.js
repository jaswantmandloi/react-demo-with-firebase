import React from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import  appRoutes  from "../Main/RouteConfigs";
import renderField from "../../Shared/Form/FieldTemplate";

function SignInFormTemplate() {
  const { handleSubmit, submitting } = this.props;

  return (
    <form onSubmit={handleSubmit(this.submit)} className="form-signin" noValidate>
      <div className="form-body">
        {this.props["signInState"] &&
          this.props["signInState"]["code"] && (
            <div className="alert alert-danger" role="alert">
              {this.props["signInState"]["message"]}
            </div>
          )}

        <Field
          name="email"
          type="text"
          component={renderField}
          label="Email"
          placeholder="Email address"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          placeholder="Password"
        />

        <div className="checkbox mb-3 lh-sm d-flex justify-content-between align-items-center">
          <Field
            component="input"
            id="rememberMe"
            type="checkbox"
            name="rememberMe"
            value="1"
          />

          <label htmlFor="rememberMe" className="mb-0">
            Remember me
          </label>
          <Link to={appRoutes.forgotPass.path}>{appRoutes.forgotPass.linkName}</Link>
        </div>

        <div className="form-footer">
          <button
            className="btn btn-lg btn-primary btn-block"
            disabled={submitting}
            type="submit"
          >
            Login
          </button>
          <div className="form-label-group mb-0 text-center">
            {" "}
            Don’t have an account? &nbsp;
            <Link to={appRoutes.signup.path} className="font-bold">
              {appRoutes.signup.linkName}
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignInFormTemplate;
