import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import Layout from "../../Shared/Layout/LayoutConnect";
import autherDetailsTmplt from "./HelperTemplates/AuthorTemplate";
import postListTmplt from "./HelperTemplates/PostListTemplate";

export default function PostsTemplate() {
  return (
    <React.Fragment>
      <Layout>
        <ListGroup>
          {this.props.postAuthor &&
            autherDetailsTmplt(this.props.postAuthor, this.props)}

          
            

            {this.props.posts.map((post, key) => {
              let dynamicTimeKey = new Date().getTime();
              return (
                <ListGroupItem key={post.id + '' + dynamicTimeKey + key}>
                  {postListTmplt(post, this.props)}
                </ListGroupItem>
              );
            })}
         
        </ListGroup>
      </Layout>
    </React.Fragment>
  );
}
