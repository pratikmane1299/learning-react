import React, { Component } from 'react';

export default class AddPostForm extends Component {
  render() {
    const { title, body, handleChange, handleFormSubmit } = this.props;
    return (
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          id="body"
          name="body"
          value={body}
          onChange={handleChange}
        />
        <button>Add Post</button>
      </form>
    )
  }
}