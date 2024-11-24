import React from 'react';
import './Projects.css';
import portfolio1 from './assets/portfolio1.jpg';
import portfolio2 from './assets/portfolio2.jpg';
import portfolio3 from './assets/portfolio3.jpg';
import portfolio4 from './assets/portfolio4.jpg';
import portfolio5 from './assets/portfolio5.jpg';
import portfolio6 from './assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        
        <div className="portfolio-box">
          <img src={portfolio1} alt="Ladha project" />
          <div className="portfolio-layer">
            <h4>Ladha</h4>
            <p>Ladha is a user-friendly web application designed to help users discover, view, and manage recipes. Users can search for
            recipes, view detailed instructions, and favorite their preferred recipes.</p>
            <a href="https://github.com/mercynjambi/Ladha" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio2} alt="MY VOTE MY CHOICE project" />
          <div className="portfolio-layer">
            <h4>MY VOTE MY CHOICE</h4>
            <p>The app allows users to securely register to vote, view candidate profiles, cast votes, and view election results. The
 app includes a basic admin panel for managing candidates and election data, and incorporates a facial recognition
 system for enhanced security.</p>
            <a href="https://github.com/mercynjambi/voting-app/tree/mercynjambi" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio3} alt="My Little Thing project" />
          <div className="portfolio-layer">
            <h4>My Little Thing</h4>
            <p>This is a system designed to channel funds for teen moms.</p>
            <a href="https://github.com/mercynjambi/littlethingform" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio4} alt="EduTrack project" />
          <div className="portfolio-layer">
            <h4>EduTrack</h4>
            <p>EduTrack is a comprehensive school management system designed to streamline administrative tasks and enhance the educational experience.</p>
            <a href="https://github.com/BarryBaros/EduTrack" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio5} alt="Inventory Management system project" />
          <div className="portfolio-layer">
            <h4>Inventory Management System</h4>
            <p>The Inventory Management System is a command-line application designed to manage inventory items, categories,
 suppliers, customers, and orders. It is built using Python and leverages SQLAlchemy for database
 interactions and Click for creating the  (CLI).</p>
            <a href="https://github.com/mercynjambi/Inventory-management-system" target="_blank" rel="noopener noreferrer">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio6} alt="Presctipto project" />
          <div className="portfolio-layer">
            <h4>Presctipto</h4>
            <p>This is a comprehensive doctor appointment booking system developed using the MERN stack.</p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Portfolio;
