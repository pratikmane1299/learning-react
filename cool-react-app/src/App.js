import React from 'react';
import './App.css';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm'

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
      id: this.state.posts.length+1,
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
    const { posts, title, body } = this.state;
    return (
      <>
        <h1>Learning React</h1>
        <AddPostForm 
          title={title} 
          body={body} 
          handleChange={this.handleChange} 
          handleFormSubmit={this.handleFormSubmit} 
        />
        <section className="post-grid">
          {
            posts.map(p => {
              return <Post key={p.id} post={p} className="post" />
            })
          }
        </section>
      </>
    )
  }
}

export default App;
