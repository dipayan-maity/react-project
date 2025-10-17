import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // for Explore Collection navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  useEffect(() => {
    const bannerElements = document.querySelectorAll(
      ".premium-banner-badge, .premium-banner-title, .premium-banner-subtitle, .premium-banner-features, .premium-banner-buttons"
    );

    bannerElements.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 100 + index * 200);
    });

    const premiumButtons = document.querySelectorAll(".premium-banner-btn");
    premiumButtons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px)";
      });
      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

    const premiumFeatureCards = document.querySelectorAll(".premium-feature-card");
    const premiumObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    premiumFeatureCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
      premiumObserver.observe(card);
    });
  }, []);

  return (
    <div className="premium-banner">
      <div className="premium-banner-pattern"></div>

      <div className="premium-banner-content">
        <div className="premium-banner-badge">
          <FontAwesomeIcon icon="crown" /> Premium Collection Launch
        </div>

        <h1 className="premium-banner-title">
          Discover <span>Exclusive Elegance</span> in Every Detail
        </h1>

        <p className="premium-banner-subtitle">
          Experience the perfect blend of sophistication and innovation with our carefully curated premium collection. 
          Designed for those who appreciate exceptional quality and timeless style.
        </p>

        <div className="premium-banner-features">
          <div className="premium-banner-feature">
            <FontAwesomeIcon icon="check-circle" />
            <span>Premium Materials</span>
          </div>
          <div className="premium-banner-feature">
            <FontAwesomeIcon icon="shipping-fast" />
            <span>Free Worldwide Shipping</span>
          </div>
          <div className="premium-banner-feature">
            <FontAwesomeIcon icon="award" />
            <span>Lifetime Warranty</span>
          </div>
        </div>

        <div className="premium-banner-buttons">
          <Link to="/shop" className="premium-banner-btn premium-banner-btn-primary">
            Explore Collection <FontAwesomeIcon icon="arrow-right" />
          </Link>
          <a href="#" className="premium-banner-btn premium-banner-btn-secondary">
            Watch Story <FontAwesomeIcon icon="play-circle" />
          </a>
        </div>

        <div className="premium-floating-shapes">
          <div className="premium-shape"></div>
          <div className="premium-shape"></div>
          <div className="premium-shape"></div>
        </div>
      </div>


    </div>
  );
};

export default Banner;
