import React from "react";
import {  Trans } from 'react-i18next';

import SignInForm from "./SignInFormConnect";
import Layout from "../../Shared/Layout/LayoutConnect";

export default function() { 
  return (
    <Layout>
      <Trans i18nKey="formName" />
      {<SignInForm {...this.props} />}
    </Layout>
  );
}
