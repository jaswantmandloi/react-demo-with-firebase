import React from "react";
import { Route, Redirect } from "react-router-dom";

import StorageService from "../../Shared/Services/StorageService";
import appRoutes from "../../App/Main/RouteConfigs";

const NoAuthRoute = props => {
  const userToken = StorageService.getUserToken();
  // Prevent loading components after authentication
  if (userToken && props.history.location.pathname != appRoutes.dashboard.path) {
    return <Redirect
      to={{
        pathname: appRoutes.dashboard.path,
        state: { from: props.location }
      }}
    />;
  }

  return <Route  path={props.path} component={props.component} />;
};

export default NoAuthRoute;
