import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="main">
      <h2>Form Validation in React class components</h2>
      <SignUpForm />
    </div>
  );
}

export default App;
