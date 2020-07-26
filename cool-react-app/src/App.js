import React from 'react';
import './App.css';
import Post from './components/Post';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Learning Components</h1>
        <div className="App__body">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    )
  }
}

export default App;
