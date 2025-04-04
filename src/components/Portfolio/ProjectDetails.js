// import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './ProjectCard';
import './ProjectDetails.css';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <div className="project-details-nav">
        <Link to="/" className="back-button">
          <ArrowLeft size={20} />
          Back
        </Link>
        <div className="breadcrumb">
          <span>Projects</span>
          <span className="separator">›</span>
          <span className="current">{project.title}</span>
        </div>
      </div>

      <div className="project-details-content">
        <div className="project-details-left">
          <h1 className="project-title">{project.title}</h1>
          <hr></hr>
          <p className="project-description">{project.description}</p>

          <div className="project-stats">
            <div className="stat-box">
              <div className="stat-icon">{'</>'}</div>
              <div className="stat-info">
                <span className="stat-number">{project.technologies.length}</span>
                <span className="stat-label">Total Technologies</span>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">
                <span className="layers-icon"></span>
              </div>
              <div className="stat-info">
                <span className="stat-number">{project.features.length}</span>
                <span className="stat-label"> Key Features</span>
              </div>
            </div>
          </div>

          
          <div className="project-actions">
          <a
  href={project.demoUrl ? project.demoUrl : undefined}
  className={`action-button demo-btn ${!project.demoUrl ? 'disabled' : ''}`}
  target={project.demoUrl ? "_blank" : undefined}
  rel={project.demoUrl ? "noopener noreferrer" : undefined}
  aria-disabled={!project.demoUrl}
  tabIndex={project.demoUrl ? 0 : -1}
  onClick={(e) => !project.demoUrl && e.preventDefault()} // Prevent navigation if no URL
>
  <ExternalLink size={20} />
  Live Demo
</a>

<a
  href={project.githubUrl ? project.githubUrl : undefined}
  className={`action-button github-btn ${!project.githubUrl ? 'disabled' : ''}`}
  target={project.githubUrl ? "_blank" : undefined}
  rel={project.githubUrl ? "noopener noreferrer" : undefined}
  aria-disabled={!project.githubUrl}
  tabIndex={project.githubUrl ? 0 : -1}
  onClick={(e) => !project.githubUrl && e.preventDefault()} // Prevent navigation if no URL
>
  <Github size={20} />
  Github
</a>

            
          </div>
 


          <div className="technologies-section">
            <h2 className="section-title">
              <span className="code-icon">{'</>'}</span>
              Technologies Used
            </h2>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-details-right">
          <div className="preview-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="key-features">
            <h2 className="features-title">
              <span className="star-icon">★</span>
              Key Features
            </h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;