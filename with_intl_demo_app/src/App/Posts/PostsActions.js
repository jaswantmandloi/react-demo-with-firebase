import AppActions from "../Main/AppActions";
import { thirdPartyAPI } from "../../Shared/Util/Network";
import EndPointConfig from "../../Shared/Config/EndPointConfig";

const PostsActions = {
  resetPosts: () => {
    return {
      type: "RESET_POSTS",
      payload: []
    };
  },
  resetPostAuthor: () => {
    return {
      type: "SET_POST_AUTHOR",
      payload: {}
    };
  },
  setPostAuthor: (postId) => {
    return {
      type: "SET_POST_AUTHOR",
      payload: { postId }
    };
  },
  getPosts: () => {
    return async dispatch => {
      //dispatch(AppActions.toggleAppBusyState(true));

      try {
        let response = await thirdPartyAPI.get(EndPointConfig.posts.path);
        dispatch({
          type: "APPEND_POSTS",
          payload: response.data
        });
      } catch (error) {
        console.log(error);
      }

      //dispatch(AppActions.toggleAppBusyState(false));
    };
  },

  getPost: postId => {
    return async dispatch => {
      //dispatch(AppActions.toggleAppBusyState(true));

      // Reset post and comments
      dispatch({
        type: "SET_POST_DATA",
        payload: null
      });
      dispatch({
        type: "SET_POST_COMMENTS",
        payload: null
      });

      try {
        let response = await thirdPartyAPI.get(
          EndPointConfig.post.getPath(postId)
        );
        dispatch({
          type: "SET_POST_DATA",
          payload: response.data
        });
      } catch (error) {
        console.log(error);
      }

      //dispatch(AppActions.toggleAppBusyState(false));
    };
  },

  getPostComments: postId => {
    return async dispatch => {
      //dispatch(AppActions.toggleAppBusyState(true));

      try {
        let response = await thirdPartyAPI.get(
          EndPointConfig.post_comments.getPath(postId)
        );
        dispatch({
          type: "SET_POST_COMMENTS",
          payload: response.data
        });
      } catch (error) {
        console.log(error);
      }

      //dispatch(AppActions.toggleAppBusyState(false));
    };
  }
};

export default PostsActions;
