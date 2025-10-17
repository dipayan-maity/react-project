import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gadgets } from "../data/gadgets"; // import JSON
import SectionTitle from "./SectionTitle";

const OfferSection = ({ gadgetId }) => {
  const gadget = gadgets.find((item) => item.id === gadgetId);

  // Handle missing timer property gracefully with default 1 day countdown
  const defaultTimer = { days: 1, hours: 0, minutes: 0, seconds: 0 };
  const timer = gadget?.timer || defaultTimer;

  // Ensure timer values are numbers
  const safeTimer = {
    days: isNaN(timer.days) ? 1 : timer.days,
    hours: isNaN(timer.hours) ? 0 : timer.hours,
    minutes: isNaN(timer.minutes) ? 0 : timer.minutes,
    seconds: isNaN(timer.seconds) ? 0 : timer.seconds,
  };

  // Ensure price and originalPrice are numbers to avoid NaN
  const price = typeof gadget?.price === 'number' ? gadget.price : 0;
  const originalPrice = typeof gadget?.originalPrice === 'number' ? gadget.originalPrice : null;

  const [timeLeft, setTimeLeft] = useState({
    days: safeTimer.days.toString().padStart(2, "0"),
    hours: safeTimer.hours.toString().padStart(2, "0"),
    minutes: safeTimer.minutes.toString().padStart(2, "0"),
    seconds: safeTimer.seconds.toString().padStart(2, "0"),
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + safeTimer.days);
    targetDate.setHours(
      safeTimer.hours,
      safeTimer.minutes,
      safeTimer.seconds,
      0
    );

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [safeTimer]);

  return (
    <div>
      <div className="offer-container">
        <div
          className="image-section"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${gadget?.image || ''}) center/cover no-repeat`,
          }}
        >
          <div className="image-content">
            <span className="badge">{gadget?.badge || ''}</span>
            <h2>{gadget?.name || 'Unnamed Gadget'}</h2>
            <p>{gadget?.description || ''}</p>
          </div>
        </div>

          <div className="text-section">
            <h3>{gadget?.heading || ''}</h3>
            <p>{gadget?.description || ''}</p>

            <div className="features">
              {gadget?.features && gadget.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="price">
              <div className="current-price">${price.toFixed(2)}</div>
              <div className="original-price">{originalPrice !== null ? `$${originalPrice.toFixed(2)}` : null}</div>
              <div className="discount">
                {originalPrice !== null ? `$${(originalPrice - price).toFixed(2)} OFF` : null}
              </div>
            </div>

            <Link to={`/product/${gadget?.id || ''}`} className="btn">
              Grab This Offer <i className="fas fa-arrow-right"></i>
            </Link>

            <div className="timer">
              <div className="time-unit">
                <div className="time-value">{timeLeft.days}</div>
                <div className="time-label">Days</div>
              </div>
              <div className="time-unit">
                <div className="time-value">{timeLeft.hours}</div>
                <div className="time-label">Hours</div>
              </div>
              <div className="time-unit">
                <div className="time-value">{timeLeft.minutes}</div>
                <div className="time-label">Minutes</div>
              </div>
              <div className="time-unit">
                <div className="time-value">{timeLeft.seconds}</div>
                <div className="time-label">Seconds</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default OfferSection;
