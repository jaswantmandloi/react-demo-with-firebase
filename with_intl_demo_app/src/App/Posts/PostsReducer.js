const PostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "APPEND_POSTS":
      state.posts = [...state.posts, ...action.payload];
      return state;
    case "RESET_POSTS":
      state.posts = [];
      return state;
    case "SET_POST_AUTHOR":
      state.author = action.payload;
      return state;
    case "SET_POST_DATA":
    state.post = action.payload;
    return state;
    case "SET_POST_COMMENTS":
    state.post_comments = action.payload;
    return state;
    default:
      return state;
  }
};

export default PostsReducer;
