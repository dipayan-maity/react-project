import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaPlayCircle, FaBolt, FaBatteryFull, FaAward } from 'react-icons/fa';

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className={`banner-text ${animate ? 'animate' : ''}`}>
          <div className="banner-badge">New Generation</div>
          <h1 className="banner-title">Elevate Your Tech Experience</h1>
          <p className="banner-description">
            Discover the future of technology with our premium gadgets.
            Designed for those who demand excellence and innovation in every detail.
          </p>

          <div className="banner-cta">
            <button className="cta-button cta-primary">
              <FaShoppingCart /> Shop Now
            </button>
            <button className="cta-button cta-secondary">
              <FaPlayCircle /> Watch Demo
            </button>
          </div>

          <div className="banner-features">
            <div className="feature">
              <FaBolt />
              <span>Fast Performance</span>
            </div>
            <div className="feature">
              <FaBatteryFull />
              <span>Long Battery Life</span>
            </div>
            <div className="feature">
              <FaAward />
              <span>Premium Design</span>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-image">
        <img
          className={animate ? 'animate' : ''}
          src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
          alt="Premium Gadget"
        />
      </div>
    </div>
  );
};

export default Banner;
