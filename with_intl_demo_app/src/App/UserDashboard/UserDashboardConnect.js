import { connect } from 'react-redux';

import UserDashboard from './UserDashboard';
import UserActions from '../../Shared/Reducers/UserActions'

const mapStateToProps = state => {         
    return  ({        
        userData : state.UserReducer.loggedInUser        
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({
        logout : () => {
            dispatch(UserActions.logout());
        }
    });
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDashboard);