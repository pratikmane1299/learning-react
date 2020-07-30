import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <div className="Post">
                <h2 className="Post__title">{post.title}</h2>
                <p className="Post__body">{post.body}</p>
            </div>
        )
    }
}

export default Post;