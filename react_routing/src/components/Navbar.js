import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/home" className="nav-link">Home</Link>
    {' | '}
    <Link to="/teams" className="nav-link">Teams</Link>
  </div>
);

export default Navbar;