import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <h2 className="Post__title">{this.props.title}</h2>
                <p className="Post__body">{this.props.body}</p>
            </div>
        )
    }
}

export default Post;