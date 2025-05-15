
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo-text">NexaDev.</NavLink>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink 
            to="/#hero" 
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/#about" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/#portfolio" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/#contact" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        className="navbar-menu"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon 
          icon={isMenuOpen ? faTimes : faBars} 
          className={isMenuOpen ? "close-icon" : "menu-icon"} 
        />
      </button>
    </nav>
  );
};

export default Navbar;

