// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="logo.png" alt="Logo" />
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
 
export default Navbar;
 
 