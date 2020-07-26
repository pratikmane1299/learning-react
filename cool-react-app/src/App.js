import React from 'react';
import './App.css';
import Post from './components/Post';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Learning React</h1>
        <div className="App__body">
          <Post title="First Post" body="This is my first post." />
          <Post title="Awesome Post" body="It's an awesome post." />
          <Post title="Third Post" body="This is a new Post." />
        </div>
      </div>
    )
  }
}

export default App;
