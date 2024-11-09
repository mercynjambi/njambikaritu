import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>We provide top-notch development services to build scalable and robust solutions.</p>
          <a href="#" className="button">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bx-mobile"></i>
          <h3>Mobile Apps Development</h3>
          <p>We provide top-notch development services to build scalable and robust solutions.</p>
          <a href="#" className="button">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bxs-paint"></i>
          <h3>UI/UX Designs</h3>
          <p>We provide top-notch development services to build scalable and robust solutions.</p>
          <a href="#" className="button">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
