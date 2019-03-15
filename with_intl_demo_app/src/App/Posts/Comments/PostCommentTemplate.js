import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function postCommentTmplt(comment, props) {
  return (
    <Card>
      <CardBody>
        <CardTitle>{comment.name}</CardTitle>   
        <CardSubtitle>{comment.email}</CardSubtitle>     
        <CardText>{comment.body}</CardText>
      </CardBody>
    </Card>
  );
}
