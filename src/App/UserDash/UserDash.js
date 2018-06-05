import React, { Component } from 'react';
import { connect } from 'react-redux'

import UserDashTmpl from './UserDashTmpl';
import {routes} from '../../Shared/Routes';


const mapStateToProps = state => {   
      
    return  ({
        loggedInUser: state.firebase.loggedInUser,
        userData: state.firebase.userData,
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({        
    })

}


class UserDash extends Component {
    constructor(props) {
        super(props);  
    }

    componentDidUpdate() {
        if(!this.props.loggedInUser) {            
            this.props.history.replace(routes.signin.path);
        }     
    }

    render () {

        if(!this.props.loggedInUser) {            
            return null;
        }     

       return UserDashTmpl.call(this);
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDash)