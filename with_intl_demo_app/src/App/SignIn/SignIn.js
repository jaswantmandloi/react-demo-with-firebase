import { Component } from 'react';

import SignInTemplate from './SignInTemplate';


export default class SignIn extends Component {
    constructor(props) {
        super(props);                  
    }     
    
    componentWillMount() {// This is deprecated event 
        this.props.resetSignInState();
        //this.props.toggleAppBusy(false);
    }
            
    render () {                        
       return SignInTemplate.call(this);
    }
}