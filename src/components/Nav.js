import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <header className='header'>
      <h1 className='logo'>Portfolio</h1>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className='navbar'>
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Nav;
