import React from "react";

const Hero = ({ badge, headline, tagline }) => {
  return (
    <div className="product-hero">
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="hero-container">
            {badge && <div className="hero-badge">{badge}</div>}
            {headline && <h1 className="hero-headline">{headline}</h1>}
            {tagline && <p className="hero-tagline">{tagline}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
