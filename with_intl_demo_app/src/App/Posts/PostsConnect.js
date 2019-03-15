import { connect } from 'react-redux';

import Posts from './Posts';
import PostsActions from './PostsActions';
import UserActions from '../../Shared/Reducers/UserActions';
import PostsReducer from './PostsReducer';
import {registerReducer} from '../../Core/AsyncReducers';

registerReducer({PostsReducer});

const mapStateToProps = state => {         
    return  ({        
        posts : state.PostsReducer.posts,
        postAuthor : state.PostsReducer.author
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({
        getPosts : () => {
            dispatch(PostsActions.getPosts());
        },
        getAuthor : (userId, postId) => {            
            dispatch(UserActions.getUser(userId, PostsActions.setPostAuthor(postId)));
        },
        reSetAuthor : (postAuthor) => {  
            if(postAuthor) {
                postAuthor.name = '';      
            }                
            dispatch(PostsActions.resetPostAuthor());
        },
        resetPosts : () => {
            dispatch(PostsActions.resetPosts());
        }
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);