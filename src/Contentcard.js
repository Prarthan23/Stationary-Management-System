// ContentCard.js
import React from 'react';

const ContentCard = ({ className,title, description, icon }) => {
  return (
    <div className="content-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ContentCard;
