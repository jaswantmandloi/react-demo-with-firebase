import React from "react";

import AuthHeader from "./AuthHeader";
import NoAuthHeader from "./NoAuthHeader";

const Header = props => {
  if (props.isUserLoggedIn) {
    return <AuthHeader {...props} />;
  }

  return <NoAuthHeader {...props} />;
};

export default Header;
