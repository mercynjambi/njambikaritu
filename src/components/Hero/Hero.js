import React from 'react';
import { Github, Linkedin, Instagram, Mail, Rocket, Sparkles } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Hero.css';
import CodingGif from "../../assets1/Coding.gif";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            {/* Ready Badge */}
            <div className="ready-badge">
              <Sparkles className="sparkle-icon" />
              <span>Ready to Innovate</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Frontend
              <br />
              <span className="highlight">Developer</span>
            </h1>

            {/* Typewriter Effect */}
            <p className="hero-typewriter">
              <Typewriter
                options={{
                  strings: [
                    "BSc Student",
                    "I love Tech",
                    "Tech Enthusiast"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>

            {/* Description */}
            <p className="hero-description">
              I love coding, I love coding, I love coding... I love coding
            </p>

            {/* Tech Stack */}
            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Javascript</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Tailwind</span>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to="/projects" className="cta-button primary">
                Projects
                <Rocket className="button-icon" />
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Contact
                <Mail className="button-icon" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/mercynjambi" className="social-icon" aria-label="GitHub">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/mercy-njambi-b31a70222/" className="social-icon" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/its.me.njambi/?next=%2F&hl=en" className="social-icon" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hero-image">
            <img src={CodingGif} alt="Developer Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;