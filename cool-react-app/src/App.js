import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const posts = data.slice(0, 10);

        setPosts(posts);
      });
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else {
      setBody(value);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title === '' || body === '') return;

    const newPost = {
      id: posts.length + 1,
      title,
      body
    };

    setPosts([newPost, ...posts]);

    setTitle('');
    setBody('');
  }

    return (
      <>
        <h1>Learning React</h1>
        <AddPostForm
          title={title}
          body={body}
          handleChange={handleChange}
          handleFormSubmit={handleFormSubmit}
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

export default App;
