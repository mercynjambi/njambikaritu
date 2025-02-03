import React from 'react';
import './Timeline.css';
import TimelineCards from './TimelineCards';

const Timeline = () => {
  const milestones = [
    {
      year: '2021',
      description: 'First steps into Python development'
    },
    {
      year: '2022',
      description: 'First client website using HTML/CSS'
    },
    {
      year: '2023',
      description: 'Data Analysis and Machine Learning at JKUAT'
    },
    {
      year: '2024',
      description: 'Moringa Software Engineering & Company Launch'
    }
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Our Genesis Story</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-description">{milestone.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TimelineCards />
    </>
  );
};

export default Timeline;