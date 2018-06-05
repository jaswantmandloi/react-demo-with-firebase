import React, { Component } from 'react';
import { connect } from 'react-redux'

import {routes} from '../../Shared/Routes';
import SignUpRdcr from './SignUpRdcr';
import SignUpTmpl from './SignUpTmpl';

const mapStateToProps = state => {    
    return  ({
        loggedInUser: state.firebase.loggedInUser,
        signUpState: state.SignUpRdcr,
    });  
  }
  
const mapDispatchToProps = dispatch => {      
    return ({})
}


class SignUp extends Component {
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
       return SignUpTmpl.call(this);
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)