import React from 'react';
// import { Icon } from 'boxicons-react';
import 'boxicons/css/boxicons.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p> Copyright &copy; 2024 by Mercy | All rights reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
