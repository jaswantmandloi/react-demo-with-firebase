import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import 'bootstrap/dist/css/bootstrap.min.css';


import "../../scss/variables.scss";
import "./App.scss"
import { store, history } from "../../Core/Store";
import RoutesComponent from "../../Core/Routes/Routes";
import { AppContext } from "../../Shared/Util/Contexts";
import appRoutes from "./RouteConfigs";

function AppTemplate() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <AppContext.Provider value={this.props}>
            <RoutesComponent
              {...this.props}
              routes={appRoutes}
              history={history}
            />
          </AppContext.Provider>
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  );
}

export default AppTemplate;
