import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import PostCommentTemplate from "./PostCommentTemplate";


export default function PostCommentsTemplate(props) {
  if(!props.post_comments || !Array.isArray(props.post_comments)) {
    return null;
  }
  return (    
      <ListGroup>        
        {props.post_comments.map(comment => {
          return (
            <ListGroupItem key={comment.id}>
              {PostCommentTemplate(comment, props)}
            </ListGroupItem>
          );
        })}
      </ListGroup>    
  );
}
