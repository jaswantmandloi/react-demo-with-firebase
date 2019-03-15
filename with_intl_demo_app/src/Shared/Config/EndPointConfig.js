const endpoints = {
  "users": {path : "/users"},
  "login": {path : "/users"},
  "posts": {path : "/posts"},
  "post": {path : "/posts/:id", getPath : function(postId) {    
    return (this.path).replace(":id", postId);
  }},
  "post_comments": {path : "/posts/:id/comments", getPath : function(postId) {
    return (this.path).replace(":id", postId);
  }}
};

export default endpoints;