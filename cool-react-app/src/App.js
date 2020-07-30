import React from 'react';
import './App.css';
import Post from './components/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'First Post',
        body: 'This is my first post'
      },
      {
        id: 2,
        title: 'Second Post',
        body: 'This is my second post'
      },
      {
        id: 3,
        title: 'Another awesome Post',
        body: 'This is another awesome post'
      }
    ],
    title: '',
    body: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === '' || this.state.body === '') return;

    const newPost = {
      title: this.state.title,
      body: this.state.body
    };

    this.setState({
      posts: [newPost, ...this.state.posts],
      title: '',
      body: ''
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <h1>Learning React</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label>Body</label>
          <input
            type="text"
            id="body"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button>Add Post</button>
        </form>
        <section>
          {
            posts.map(p => {
              return <Post post={p} className="post" />
            })
          }
        </section>
      </>
    )
  }
}

export default App;
