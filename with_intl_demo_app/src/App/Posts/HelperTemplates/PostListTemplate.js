import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

import appRoutes from '../../Main/RouteConfigs'

export default function postListTmplt(post, props) {

  const postRoutePath = appRoutes.post.path.replace(':id', post.id);  

  return (
    <Card>
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
        <CardSubtitle>
          <Button
            id={"author" + post.userId + post.id}
            onClick={() => {
              props.getAuthor(post.userId, post.id);
            }}
          >
            Get Author
          </Button>
        </CardSubtitle>
        <CardText>
          
            <Link className="nav-link" to={postRoutePath}>
              {appRoutes.post.linkName} Details
            </Link>            

         {post.body}
        </CardText>
      </CardBody>
    </Card>
  );
}
