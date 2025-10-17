// OfferBanner.js
import React, { useState, useEffect } from 'react';
import './OfferBanner.css';

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00', 
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      const thanksgiving = new Date(currentYear, 10, 1);
      thanksgiving.setDate(thanksgiving.getDate() + (26 - (thanksgiving.getDay() + 2) % 7));
      
      const cyberMonday = new Date(thanksgiving);
      cyberMonday.setDate(thanksgiving.getDate() + 3);
      
      if (now > cyberMonday) {
        cyberMonday.setFullYear(currentYear + 1);
      }
      
      const timeDifference = cyberMonday - now;
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cyber-banner">
      <div className="grid-overlay"></div>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      <div className="banner-container">
        <div className="sale-badge">Cyber Monday Exclusive</div>
        <h1 className="main-headline">CYBER MONDAY</h1>
        <div className="discount-text">
          SALE UP TO <span className="discount-highlight">60% OFF</span>
        </div>
        <p className="sub-headline">
          Limited time offer on all tech products. Upgrade today!
        </p>
        
        <a href="#" className="cta-button">Shop Now</a>
        
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
