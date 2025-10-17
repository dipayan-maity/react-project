import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faStar, faTags } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
  return (
    <div className="premium-content-section">

      <div className="premium-features-grid">
        <div className="premium-feature-card">
          <div className="premium-feature-icon">
            <FontAwesomeIcon icon={faShippingFast} />
          </div>
          <h3>Fast Shipping</h3>
          <p>Get your products delivered quickly and safely to your doorstep.</p>
        </div>

        <div className="premium-feature-card">
          <div className="premium-feature-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h3>Top Quality</h3>
          <p>We carefully select premium gadgets and accessories for reliability.</p>
        </div>

        <div className="premium-feature-card">
          <div className="premium-feature-icon">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <h3>Exclusive Deals</h3>
          <p>Enjoy exciting offers, bundle discounts, and limited-time sales.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
