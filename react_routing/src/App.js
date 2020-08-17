import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Teams from './views/Teams';
import TeamDetails from './views/TeamDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/teams/:id" component={TeamDetails} />
        <Redirect path="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
