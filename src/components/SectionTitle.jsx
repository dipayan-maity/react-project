import React from 'react';

const SectionTitle = ({ title, subtitle, alignment = 'center', showLine = true }) => {
  return (
    <div className={`section-title-container ${alignment}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {showLine && <div className="section-title-line"></div>}
    </div>
  );
};

export default SectionTitle;
