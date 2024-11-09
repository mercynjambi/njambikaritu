
// import React, { useEffect, useState } from "react";
// import './Navbar.css';
// import logo from './assets/logo1.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import menu_icon from './assets/menu-icon.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Cleanup the event listener on unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   return (
//     <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//       <img src={logo} alt="Logo" className="logo" />

//       <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="#about-us">About</Link></li>
//         <li><Link to="#projects">Projects</Link></li>
        
//         <li><Link to="#contacts">Contacts</Link></li>
        
//       </ul>
      
//       <img 
//         src={menu_icon} 
//         alt="menu-icon" 
//         className="menu-icon" 
//         onClick={toggleMenu} 
//       />
//     </nav>
//   );
// };

// export default Navbar;




