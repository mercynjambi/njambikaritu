import React, { useState } from 'react';
import { Code, User, Blocks } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import Certificate from './Certificate';
import TechStack from './TechStack';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects'); // Removed TypeScript type annotation

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2>Portfolio Showcase</h2>
          <p>
            Explore my journey through projects, certifications, and technical expertise. Each
            section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tabs */}
        <div className="portfolio-tabs">
          <button
            onClick={() => setActiveTab('projects')}
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          >
            <Code className="tab-icon" />
            Projects
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
          >
            <User className="tab-icon" />
            Certificates
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`tab-button ${activeTab === 'tech' ? 'active' : ''}`}
          >
            <Blocks className="tab-icon" />
            Tech Stack
          </button>
        </div>

        {/* Content */}
        <div className="portfolio-content">
          {activeTab === 'projects' && <ProjectCard />}
          {activeTab === 'certificates' && <Certificate />}
          {activeTab === 'tech' && <TechStack />}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
