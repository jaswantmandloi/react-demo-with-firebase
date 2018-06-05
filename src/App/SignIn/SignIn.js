import React, { Component } from 'react';
import { connect } from 'react-redux'

import SignInTmpl from './SignInTmpl';
import SignInRdcr from './SignInRdcr';
import {routes} from '../../Shared/Routes';


const mapStateToProps = state => {    
    return  ({  
        loggedInUser: state.firebase.loggedInUser,      
        signInState: state.SignInRdcr,      
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({ })
}


class SignIn extends Component {
    constructor(props) {
        super(props);                  
    }          

    componentDidUpdate() {
        if(this.props.loggedInUser) {
            this.props.history.replace(routes.dashboard.path);           
        }  
    }
    
    render () {
        if(this.props.loggedInUser) {             
            return null;
        }                

       return SignInTmpl.call(this);
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)