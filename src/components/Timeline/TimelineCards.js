import React from 'react';
import './TimelineCards.css';

const TimelineCards = () => {
  const cards = [
    {
      title: 'Healthcare Revolution',
      description: 'Developing an integrated hospital system that will revolutionize patient care through comprehensive digital health records, from birth to present day.'
    },
    {
      title: 'Workplace Innovation',
      description: 'Creating task management solutions that embrace remote work culture while maintaining peak productivity and accountability.'
    },
    {
      title: 'Community Building',
      description: 'Fostering financial growth through our SACCO initiative while building a supportive network of developers and innovators.'
    }
  ];

  return (
    <div className="cards-section">
      <h2 className="cards-title">Pioneering Tomorrow</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="timeline-card">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCards;