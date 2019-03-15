import { connect } from 'react-redux';

import SignIn from './SignIn';
import SignInReducer from './SignInReducer';
import SignInActions from './SignInActions';
import {registerReducer} from '../../Core/AsyncReducers';
import {extendTransObj} from '../../Shared/Intl/i18n-lang-obj';
import intl from "./Intl";

extendTransObj(intl);


const mapStateToProps = state => {    
    return  ({          
        signInState: state.SignInReducer.signInState,      
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({ 
        resetSignInState : () => {
            dispatch(SignInActions.resetSignInState());
        },
        login : (values, props) => {   
            dispatch(SignInActions.login(values, props));
        }
    })
}

registerReducer({SignInReducer : SignInReducer});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);