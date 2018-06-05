import React from 'react';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux'

import NotFound from '../NotFound/NotFound';
import SignUpOnLoad from '../App/SignUp/SignUpOnLoad';
import SignInOnLoad from '../App/SignIn/SignInOnLoad';
import UserDashOnLoad from '../App/UserDash/UserDashOnLoad';

const prefixUrl = '';

const routes = {    
    signin : {path : prefixUrl + '/signin', component : SignInOnLoad, linkName : 'Sign In', onUserLoggedIn : false},    
    signup : {path : prefixUrl +'/signup', component : SignUpOnLoad, linkName : 'Sign Up', onUserLoggedIn : false},
    dashboard : {path : prefixUrl +'/dashboard', component : UserDashOnLoad, linkName : 'Dashboard', onUserLoggedIn : true},    
    all : {path : '**', component : NotFound, linkName : ''},
};


const mapStateToProps = state => {    
    return  ({
        loggedInUser: state.firebase.loggedInUser,
    });    
  }
  
const mapDispatchToProps = dispatch => {      
    return ({})
}


const RoutesTemplateComp = (props) => {
    
    let isLink = props.isLink;

    return Object.keys(routes).map((routeKey)=>{
        let route = routes[routeKey];
        if(isLink) {
            if(!route.linkName) {
                return null;
            }

            if(props.loggedInUser && !route.onUserLoggedIn) {
                return null;
            }

            if(!props.loggedInUser && route.onUserLoggedIn) {
                return null;
            }

            return (<Link to={route.path} key={routeKey}>
                <span className="navbar-item">{route.linkName}</span>
            </Link>);
        }        

        if(route.path) {
            return <Route exact path={route.path} component={route.component} key={routeKey} />;
        }

        return <Route component={route.component} key={routeKey} />;
    });
}

const RoutesTemplate = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoutesTemplateComp)


export {RoutesTemplate, routes, RoutesTemplateComp};