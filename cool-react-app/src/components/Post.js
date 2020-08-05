import React from 'react';
import './Post.css';

const Post = (props) => {
  const { post } = props;
  return (
    <div className="Post">
      <h2 className="Post__title">{post.title}</h2>
      <p className="Post__body">{post.body}</p>
    </div>
  )
}

export default Post;