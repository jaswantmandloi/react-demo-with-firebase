import { connect } from 'react-redux';

import Post from './Post';
import PostsActions from '../PostsActions';
import PostsReducer from '../PostsReducer';
import {registerReducer} from '../../../Core/AsyncReducers';
registerReducer({PostsReducer});


const mapStateToProps = state => {         
    return  ({        
        post : state.PostsReducer.post,
        post_comments : state.PostsReducer.post_comments                                
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({
        getPost : (id) => {
            dispatch(PostsActions.getPost(id));
        },
        getPostComments : (id) => {
            dispatch(PostsActions.getPostComments(id));
        }
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);