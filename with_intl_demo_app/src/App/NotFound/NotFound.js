import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import "./NotFound.css";
import appRoutes from "../Main/RouteConfigs";
import Layout from "../../Shared/Layout/LayoutConnect";

const NotFound = () => {
  return (
    <Layout>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://www.lifewire.com/thmb/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>404</CardTitle>
          <CardSubtitle>OOPS! NOT FOUND</CardSubtitle>
          <CardText>
            <h1 class="heading-lead">OOPS! NOT FOUND</h1>
            <p class="p-lead">
              Apologies, but we were unable to find what you were looking for.
            </p>

            <p class="txt18 hidden-xs">
              Click here to go to &nbsp;
              <Link to={appRoutes.rootPath.path} class="font-bold">
                {appRoutes.rootPath.linkName}
              </Link>
            </p>
          </CardText>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default NotFound;
