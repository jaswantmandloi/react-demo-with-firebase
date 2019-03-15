import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle  
} from "reactstrap";

import Layout from "../../../Shared/Layout/LayoutConnect";
import PostCommentsTemplate from "../Comments/PostCommentsTemplate";



export default function PostTemplate() {

  const post = this.props.post;

  return (
    <Layout>
      <Card>
      <CardBody>
        <CardTitle>{post.title}</CardTitle>        
        <CardText>{post.body}</CardText>
      </CardBody>
    </Card>

    <PostCommentsTemplate {...this.props} />

    </Layout>
  );
}
