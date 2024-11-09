import React from 'react';
import './Projects.css'
import njambi1 from './assets/njambi1.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <div className="portfolio-container">
        
          <div className="portfolio-box" >
            <img src={njambi1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Brief description of the project.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box" >
            <img src={njambi1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Brief description of the project.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box" >
            <img src={njambi1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Brief description of the project.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box" >
            <img src={njambi1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Brief description of the project.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box" >
            <img src={njambi1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Brief description of the project.</p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box" >
            <img src={njambi1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Brief description of the project.</p>
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
