import React, { useEffect } from "react";

const CyberMondayBanner = () => {
  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Thanksgiving: 4th Thursday of November
      const thanksgiving = new Date(currentYear, 10, 1);
      thanksgiving.setDate(thanksgiving.getDate() + (26 - (thanksgiving.getDay() + 2) % 7));

      // Cyber Monday (Monday after Thanksgiving)
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

      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <>
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
          <p className="sub-headline">Limited time offer on all tech products. Upgrade today!</p>

          <a href="/category" className="cta-button">
            Shop Now
          </a>

          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-value" id="days">00</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value" id="hours">00</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value" id="minutes">00</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value" id="seconds">00</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default CyberMondayBanner;
