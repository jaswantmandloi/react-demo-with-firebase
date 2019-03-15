import { Component } from 'react';

import UserDashboardTemplate from './UserDashboardTemplate';


export default class UserDashboard extends Component {

    constructor(props) {
        super(props);          
    }

    render () {
        if(!this.props.userData || !Object.keys(this.props.userData).length) {
            return null;
        }
        return UserDashboardTemplate.call(this);        
    }
}