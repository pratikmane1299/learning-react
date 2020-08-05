import React from 'react';
import './App.css';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm'

class App extends React.Component {
  state = {
    posts: [],
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const posts = data.slice(0, 10);
        this.setState({
          posts
        });
      });
  }

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
      id: this.state.posts.length + 1,
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
        {
          posts.length > 0 ? (
            <section className="post-grid">
              {
                posts.map(p => {
                  return <Post key={p.id} post={p} className="post" />
                })
              }
            </section>
          ) : null
        }
      </>
    )
  }
}

export default App;
