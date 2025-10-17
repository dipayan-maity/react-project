import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";

// Mock data for features since gadgetsFeatures is not found in gadgets.js
const mockFeatures = [
  {
    icon: "fas fa-shield-alt",
    title: "Secure",
    description: "Top-notch security features to protect your data.",
    link: "#"
  },
  {
    icon: "fas fa-shipping-fast",
    title: "Fast Delivery",
    description: "Quick and reliable shipping for all orders.",
    link: "#"
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Support",
    description: "Customer support available around the clock.",
    link: "#"
  },
  
];

const ProductFeatures = () => {
  useEffect(() => {
    // Stats animation
    const stats = document.querySelectorAll(".stat-value");
    const values = [98, 50, 24, 5];
    const durations = [2000, 2500, 1500, 1000];

    stats.forEach((stat, index) => {
      let startValue = 0;
      const endValue = values[index];
      const duration = durations[index];
      const increment = endValue / (duration / 16);

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          stat.textContent =
            index === 3
              ? "5★"
              : `${endValue}${index === 0 ? "%" : index === 1 ? "K+" : index === 2 ? "/7" : ""}`;
          clearInterval(timer);
        } else {
          stat.textContent =
            index === 3
              ? Math.floor(startValue) + "★"
              : `${Math.floor(startValue)}${index === 0 ? "%" : index === 1 ? "K+" : index === 2 ? "/7" : ""}`;
        }
      }, 16);
    });
  }, []);

  return (
    <div className="product-features-section">
      <SectionTitle
        title="Product Features"
        subtitle="Discover the features that make our products stand out from the competition"
        alignment="center"
        showLine={true}
      />

      <div className="features-container">
        <div className="features-grid">
          {mockFeatures.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
        </div>

        <div className="stats-section">
          <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat">
            <div className="stat-value">0</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
