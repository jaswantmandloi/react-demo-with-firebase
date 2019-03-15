import React from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";


export default function autherDetailsTmplt(postAuthor, props) {

  if(!postAuthor.id) {
    return null;
  }

  return (
    <Popover
      placement="bottom"
      isOpen={(postAuthor.name) ? true : false}
      target={"author" + postAuthor.id + postAuthor.postId}
      toggle={() => {
        props.reSetAuthor(postAuthor);
      }}
    >
      <PopoverHeader>{postAuthor.name}</PopoverHeader>
      <PopoverBody>
        <div>
          <label>email : </label> <label>{postAuthor.email}</label>
        </div>
        <div>
          <label>phone : </label> <label>{postAuthor.phone}</label>
        </div>
        <div>
          <label>website : </label> <label>{postAuthor.website}</label>
        </div>
      </PopoverBody>
    </Popover>
  );
}

