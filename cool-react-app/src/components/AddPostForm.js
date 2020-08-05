import React from 'react';

const AddPostForm = (props) => {
  const { title, body, handleChange, handleFormSubmit } = props;
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

export default AddPostForm;