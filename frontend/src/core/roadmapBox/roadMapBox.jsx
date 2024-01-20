import React from 'react';
import './roadMapBox.css';

export default function RoadMapCard({ title, isFirstRoadMap, link }) {
  const courseStyles = isFirstRoadMap ? { marginTop: '30px' } : {};

  const handleCardClick = () => {
    if (link) {
      // Redirect to the specified URL
      window.location.href = link;
    }
  };

  return (
    <>
      <div className="rmcourse" onClick={handleCardClick}>
        <div className="rmouterbox">
          <div className="rmdefinition" style={courseStyles}>
            {title}
          </div>
        </div>
      </div>
    </>
  );
}

