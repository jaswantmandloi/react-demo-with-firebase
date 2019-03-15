import React from "react";
import { Route, Redirect } from "react-router-dom";

import StorageService from "../../Shared/Services/StorageService";
import appRoutes from "../../App/Main/RouteConfigs";

const PrivateRoute = props => {
  const userToken = StorageService.getUserToken();
  // Prevent loading components before logged in
  if (!userToken && props.history.location.pathname != appRoutes.signin.path) {
    return <Redirect
      to={{
        pathname: appRoutes.signin.path,
        state: { from: props.location }
      }}
    />;
  }

  return <Route  path={props.path} component={props.component} />;
};

export default PrivateRoute;
