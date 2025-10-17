import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheck, FaShippingFast, FaEnvelope, FaMapMarkerAlt, FaCreditCard, FaCalendarAlt, FaPrint, FaArrowLeft } from "react-icons/fa";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd fetch order data from an API or context
    // For now, we'll simulate getting data from location state or localStorage
    const orderFromState = location.state?.orderData;
    
    if (orderFromState) {
      setOrderData(orderFromState);
      setLoading(false);
    } else {
      // Fallback: try to get from localStorage or generate mock data
      const savedOrder = localStorage.getItem('lastOrder');
      if (savedOrder) {
        setOrderData(JSON.parse(savedOrder));
      } else {
        // Generate mock order data for demonstration
        setOrderData(generateMockOrder());
      }
      setLoading(false);
    }
  }, [location]);

  const generateMockOrder = () => {
    return {
      orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      customer: {
        email: "customer@example.com",
        firstName: "John",
        lastName: "Doe",
        address: "123 Main Street",
        city: "New York",
        zipCode: "10001"
      },
      payment: {
        cardLastFour: "4242",
        nameOnCard: "John Doe"
      },
      items: [
        {
          id: 1,
          name: "Sample Product 1",
          price: 29.99,
          quantity: 2,
          image: "/api/placeholder/80/80"
        },
        {
          id: 2,
          name: "Sample Product 2",
          price: 49.99,
          quantity: 1,
          image: "/api/placeholder/80/80"
        }
      ],
      totals: {
        subtotal: 109.97,
        tax: 8.80,
        shipping: 0,
        total: 118.77
      },
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
    };
  };

  const handlePrint = () => {
    window.print();
  };

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  if (loading) {
    return (
      <div className="slick-thankyou-container">
        <div className="slick-loading">
          <div className="slick-spinner-large"></div>
          <p>Loading your order details...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="slick-thankyou-container">
        <div className="slick-error-state">
          <h1>Order Not Found</h1>
          <p>We couldn't retrieve your order details.</p>
          <button onClick={() => navigate("/")} className="slick-primary-btn">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="slick-thankyou-container">
      <div className="slick-thankyou-wrapper">
        {/* Header */}
        <div className="slick-thankyou-header">
          <button
            onClick={() => navigate("/products")}
            className="slick-back-btn"
          >
            <FaArrowLeft />
            Continue Shopping
          </button>
          <div className="slick-header-actions">
            <button onClick={handlePrint} className="slick-print-btn">
              <FaPrint />
              Print Receipt
            </button>
          </div>
        </div>

        {/* Success Message */}
        <div className="slick-success-hero">
          <div className="slick-success-icon-large">
            <FaCheck />
          </div>
          <h1>Order Confirmed!</h1>
          <p className="slick-success-subtitle">
            Thank you for your purchase. Your order has been confirmed and is being processed.
          </p>
          <div className="slick-order-badge">
            Order #: {orderData.orderId}
          </div>
        </div>

        <div className="slick-thankyou-content">
          {/* Order Summary */}
          <div className="slick-order-details-section">
            <div className="slick-details-card">
              <h2>Order Details</h2>
              
              <div className="slick-details-grid">
                <div className="slick-detail-item">
                  <div className="slick-detail-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="slick-detail-content">
                    <label>Order Date</label>
                    <span>{new Date(orderData.orderDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>

                <div className="slick-detail-item">
                  <div className="slick-detail-icon">
                    <FaShippingFast />
                  </div>
                  <div className="slick-detail-content">
                    <label>Estimated Delivery</label>
                    <span>{new Date(orderData.estimatedDelivery).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>

                <div className="slick-detail-item">
                  <div className="slick-detail-icon">
                    <FaEnvelope />
                  </div>
                  <div className="slick-detail-content">
                    <label>Email</label>
                    <span>{orderData.customer.email}</span>
                  </div>
                </div>

                <div className="slick-detail-item">
                  <div className="slick-detail-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="slick-detail-content">
                    <label>Shipping Address</label>
                    <span>
                      {orderData.customer.firstName} {orderData.customer.lastName}<br />
                      {orderData.customer.address}<br />
                      {orderData.customer.city}, {orderData.customer.zipCode}
                    </span>
                  </div>
                </div>

                <div className="slick-detail-item">
                  <div className="slick-detail-icon">
                    <FaCreditCard />
                  </div>
                  <div className="slick-detail-content">
                    <label>Payment Method</label>
                    <span>
                      **** **** **** {orderData.payment.cardLastFour}<br />
                      {orderData.payment.nameOnCard}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items & Total */}
          <div className="slick-order-summary-section">
            <div className="slick-summary-card">
              <h3>Order Summary</h3>
              
              <div className="slick-order-items">
                {orderData.items.map((item) => (
                  <div key={item.id} className="slick-order-item">
                    <div className="slick-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="slick-item-details">
                      <h4>{item.name}</h4>
                      <div className="slick-item-meta">
                        <span>Qty: {item.quantity}</span>
                        <span>${item.price.toFixed(2)} each</span>
                      </div>
                    </div>
                    <div className="slick-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="slick-summary-divider"></div>

              <div className="slick-summary-totals">
                <div className="slick-summary-row">
                  <span>Subtotal</span>
                  <span>${orderData.totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="slick-summary-row">
                  <span>Shipping</span>
                  <span className="slick-free">
                    {orderData.totals.shipping === 0 ? 'FREE' : `$${orderData.totals.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="slick-summary-row">
                  <span>Tax</span>
                  <span>${orderData.totals.tax.toFixed(2)}</span>
                </div>
                <div className="slick-total-row">
                  <span>Total</span>
                  <span className="slick-total-amount">
                    ${orderData.totals.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="slick-next-steps">
              <h3>What's Next?</h3>
              <div className="slick-steps-list">
                <div className="slick-step">
                  <div className="slick-step-number">1</div>
                  <div className="slick-step-content">
                    <strong>Order Confirmation</strong>
                    <p>You'll receive an email confirmation shortly</p>
                  </div>
                </div>
                <div className="slick-step">
                  <div className="slick-step-number">2</div>
                  <div className="slick-step-content">
                    <strong>Order Processing</strong>
                    <p>We're preparing your items for shipment</p>
                  </div>
                </div>
                <div className="slick-step">
                  <div className="slick-step-number">3</div>
                  <div className="slick-step-content">
                    <strong>Shipping</strong>
                    <p>Your order will be delivered by {new Date(orderData.estimatedDelivery).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="slick-thankyou-actions">
              <button onClick={handleContinueShopping} className="slick-primary-btn large">
                Continue Shopping
              </button>
          

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
