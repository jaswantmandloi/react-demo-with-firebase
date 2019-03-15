import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

import appRoutes from "../../App/Main/RouteConfigs";

const NoAuthHeader = props => {
  return (
    <Navbar color="light" light expand="md" className="bg-dark navbar-dark">
      <NavbarBrand href={appRoutes.rootPath.path}>Before Login</NavbarBrand>
      <NavbarToggler
        onClick={() => {
          props.toggleLayoutHeader(props.toggleLayoutHeaderState);
        }}
      />
      <Collapse isOpen={props.toggleLayoutHeaderState} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
          <Link className="nav-link" to={appRoutes.rootPath.path}>
              {appRoutes.rootPath.linkName}
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={appRoutes.posts.path}>
              {appRoutes.posts.linkName}
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NoAuthHeader;
