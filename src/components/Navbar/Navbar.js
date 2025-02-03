// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { NavLink, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Close menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <NavLink to="/" className="logo-text">DevDiva.</NavLink>
//       </div>
//       <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
//         <li>
//           <NavLink 
//             to="/" 
//             className={({ isActive }) => isActive ? "active" : ""}
//             end
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink 
//             to="/about" 
//             className={({ isActive }) => isActive ? "active" : ""}
//           >
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink 
//             to="/services" 
//             className={({ isActive }) => isActive ? "active" : ""}
//           >
//             Portfolio
//           </NavLink>
//         </li>
//         <li>
//           <NavLink 
//             to="/projects" 
//             className={({ isActive }) => isActive ? "active" : ""}
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//       <button
//         className="navbar-menu"
//         onClick={toggleMenu}
//         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//       >
//         <FontAwesomeIcon 
//           icon={isMenuOpen ? faTimes : faBars} 
//           className={isMenuOpen ? "close-icon" : "menu-icon"} 
//         />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;     

// Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" className="logo-text" onClick={() => scrollToSection("home")}>
          DevDiva.
        </a>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => scrollToSection("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
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