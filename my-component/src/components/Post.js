import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <h2 className="Post__title">Post Title</h2>
                <p className="Post__body">Post BodyPost BodyPost BodyPost BodyPost BodyPost BodyPost BodyPost Body</p>
            </div>
        )
    }
}

export default Post;