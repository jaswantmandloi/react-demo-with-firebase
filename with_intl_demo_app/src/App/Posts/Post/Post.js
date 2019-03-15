import { Component } from 'react';

import PostTemplate from './PostTemplate';


export default class Post extends Component {

    constructor(props) {
        super(props);          
    }

    componentDidMount() {
        if(this.props.match && this.props.match && this.props.match.params && this.props.match.params.id) {
            this.props.getPost(this.props.match.params.id);
            this.props.getPostComments(this.props.match.params.id);
        }        
    }

    render () {
        if(!this.props.post) {
            return null;
        }
        return PostTemplate.call(this);        
    }
}