import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import NoAuthRoute from "./NoAuthRoute";
import PublicRoute from "./PublicRoute";

const RoutesLoop = (props) => {
  const routes = props.routes;
  return Object.keys(routes).map(routeKey => {
    let route = routes[routeKey];

    if (route.path == '**') {
      return <Route component={route.component} key={routeKey} />;      
    }

    //return <Route  path={route.path} key={routeKey} component={route.component} />;

    if (route.routeType == 'PrivateRoute') {      

      return (
        <PrivateRoute
          exact
          path={route.path}
          component={route.component}
          key={routeKey}
          history={props.history}
        />
      );
    }

    if (route.routeType == 'NoAuthRoute') {
      return (
        <NoAuthRoute
          exact
          path={route.path}
          component={route.component}
          key={routeKey}
          history={props.history}
        />
      );
    }

    if (route.routeType == 'PublicRoute') {
      return (
        <PublicRoute
          exact
          path={route.path}
          component={route.component}
          key={routeKey}
          history={props.history}
        />
      );
    }
    
    
  });
}

const RoutesComponent = props => {  
  const excludeSwitch = props.excludeSwitch;

  if(excludeSwitch) {
    return (      
        <RoutesLoop {...props} />     
    );
  }

  return (
      <Switch>
      {RoutesLoop(props)}  
      </Switch>    
  );
};

export default RoutesComponent;
