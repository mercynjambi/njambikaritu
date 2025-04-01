import React from 'react';
import { Code, Award, Globe, ExternalLink, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './About.css';
import Photo from "../../assets1/Photo.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2>About Me</h2>
          <div className="about-subtitle">
            <span className="sparkle">✨</span>
            Transforming ideas into digital experiences
            <span className="sparkle">✨</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image">
            <img src={Photo} alt="Eki Zulfar Rachman" />
          </div>

          <div className="profile-content">
            <div className="profile-intro">
              <h3>Hello, I'm</h3>
              <h2>Mercy Njambi</h2>
            </div>

            <p className="profile-description">
            I am Mercy Njambi, a passionate fourth-year Statistics student at the University of Nairobi (UoN) with a strong enthusiasm for software development, machine learning, data analysis, and visualization. My academic journey has been a deep dive into the world of data science, predictive modeling, and statistical computing, equipping me with a solid foundation in data-driven problem-solving.I specialize in React.js for frontend development, leveraging its component-based architecture to build dynamic, scalable, and efficient web applications. On the backend, I work extensively with Django, ensuring seamless integration between data processing and application logic. My love for machine learning drives me to explore data preprocessing, model training, and algorithm optimization, utilizing Python, TensorFlow, Pandas, and NumPy to extract meaningful insights and build intelligent systems.

Beyond coding, I am a firm believer in continuous learning and innovation. The tech industry is ever-evolving, and I embrace every opportunity to hone my skills, explore new technologies, and collaborate on impactful projects. With a deep passion for problem-solving and tech-driven solutions, I am eager to contribute to transformative innovations and create meaningful digital experiences.

Let’s connect and build something extraordinary together! 🚀
            </p>

            <div className="profile-actions">
              <button className="btn-primary">
                <FileDown className="icon" />
                Download CV
              </button>
              {/* Use Link for internal navigation */}
              <Link to="/portfolio" className="btn-secondary">
                <ExternalLink className="icon" />
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">
              <Code />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">11</h3>
              <p className="stat-label">TOTAL PROJECTS</p>
              <p className="stat-sublabel">Innovative web solutions crafted</p>
            </div>
            {/* Use Link for internal navigation */}
            <Link to="/portfolio" className="stat-arrow" aria-label="View details">
              <ExternalLink />
            </Link>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Award />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">7</h3>
              <p className="stat-label">CERTIFICATES</p>
              <p className="stat-sublabel">Professional skills validated</p>
            </div>
            {/* Use Link for internal navigation */}
            <Link to="/portfolio" className="stat-arrow" aria-label="View details">
              <ExternalLink />
            </Link>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Globe />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">3</h3>
              <p className="stat-label">YEARS OF EXPERIENCE</p>
              <p className="stat-sublabel">Continuous learning journey</p>
            </div>
            {/* Use Link for internal navigation */}
            <Link to="/portfolio" className="stat-arrow" aria-label="View details">
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;