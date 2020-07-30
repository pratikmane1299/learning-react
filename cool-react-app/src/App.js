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
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h1 className="App__title">Learning React</h1>
        <div className="App__body">
          {
            posts.map(p => {
              return <Post post={p} />  
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
