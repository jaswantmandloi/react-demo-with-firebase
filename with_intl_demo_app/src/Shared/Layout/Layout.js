import React from "react";
import { Container } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import Footer from "./Footer";
import {AppContext} from "../Util/Contexts";

const Layout = props => {
  return (
    <AppContext.Consumer>
      {appProps => {
        const mergedProps = {...props, ...appProps};
        return (
          <React.Fragment>
            <Header {...mergedProps} />
            <Container className="content">{props.children}</Container>
            <Footer {...mergedProps} />
          </React.Fragment>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Layout;
