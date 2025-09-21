import React, { useState, useEffect } from 'react';
import { FaBolt, FaShoppingCart } from 'react-icons/fa';

const SpecialOffers = ({ addToCart, products }) => {
  const [timeLeft, setTimeLeft] = useState({});

  // Filter products that are on sale and limit to 3
  const saleProducts = products.filter(product => product.onSale).slice(0, 3);

  // Set end times for each product (different end times for variety)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const timeLeft = {};
      const now = new Date();
      
      saleProducts.forEach((product, index) => {
        
        let endTime;
        if (index === 0) {
        
          endTime = new Date(Date.now() + 12 * 60 * 60 * 1000);
        } else if (index === 1) {
          
          endTime = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
        } else {
          
          endTime = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);
        }
        
        const difference = endTime - now;
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          
          timeLeft[product.id] = {
            days,
            hours,
            minutes,
            seconds
          };
        } else {
          timeLeft[product.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
      
      return timeLeft;
    };

    
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [products]);

  // Calculate discount percentage
  const calculateDiscount = (originalPrice, currentPrice) => {
    return Math.round((1 - currentPrice / originalPrice) * 100);
  };

  // Generate random sold percentage for visual effect
  const generateSoldPercentage = () => {
    return Math.floor(Math.random() * 30) + 50; // Random between 50-80%
  };

  return (
    <div className="special-offers">
      <div className="offers-container">
        {saleProducts.map(product => {
          const discount = calculateDiscount(product.originalPrice, product.price);
          const soldPercentage = generateSoldPercentage();
          
          return (
            <div key={product.id} className="offer-card">
              <div className="offer-badge">SALE</div>
              <div className="offer-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="offer-content">
                <h3 className="offer-title">{product.name}</h3>
                <p className="offer-description">{product.description}</p>
                
                <div className="offer-price">
                  <div className="current-price">${product.price.toFixed(2)}</div>
                  <div className="original-price">${product.originalPrice.toFixed(2)}</div>
                  <div className="discount">{discount}% OFF</div>
                </div>
                
                <div className="countdown">
                  <div className="countdown-title">Offer ends in:</div>
                  <div className="countdown-timer">
                    {timeLeft[product.id] && (
                      <>
                        {timeLeft[product.id].days > 0 && (
                          <>
                            <div className="countdown-unit">
                              <span className="unit-value">{timeLeft[product.id].days.toString().padStart(2, '0')}</span>
                              <span className="unit-label">Days</span>
                            </div>
                            <div className="countdown-separator">:</div>
                          </>
                        )}
                        <div className="countdown-unit">
                          <span className="unit-value">{timeLeft[product.id].hours.toString().padStart(2, '0')}</span>
                          <span className="unit-label">Hours</span>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-unit">
                          <span className="unit-value">{timeLeft[product.id].minutes.toString().padStart(2, '0')}</span>
                          <span className="unit-label">Mins</span>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-unit">
                          <span className="unit-value">{timeLeft[product.id].seconds.toString().padStart(2, '0')}</span>
                          <span className="unit-label">Secs</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
             
                
                <div className="offer-actions">
                  <button className="offer-button button-primary">
                    <FaBolt /> Buy Now
                  </button>
                  <button 
                    className="offer-button button-secondary"
                    onClick={() => addToCart(product)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialOffers;