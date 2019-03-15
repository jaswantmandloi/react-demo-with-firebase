import { Component } from 'react';

import PostsTemplate from './PostsTemplate';


export default class Posts extends Component {

    constructor(props) {
        super(props);          
    }

    componentDidMount() {
        this.props.resetPosts();
        this.props.getPosts();
    }

    render () {
        if(!this.props.posts) {
            return null;
        }
        return PostsTemplate.call(this);        
    }
}