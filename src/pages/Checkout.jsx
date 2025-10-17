// Checkout.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaLock, FaCreditCard, FaUser, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // Modal state
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardType: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.firstName.trim()) errors.push("Please enter your first name");
    if (!formData.lastName.trim()) errors.push("Please enter your last name");
    if (!formData.email.trim()) errors.push("Please enter your email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push("Please enter a valid email");
    if (!formData.address.trim()) errors.push("Please enter your address");
    if (!formData.city.trim()) errors.push("Please enter your city");
    if (!formData.zipCode.trim()) errors.push("Please enter your ZIP code");
    if (!formData.cardType) errors.push("Please select a card type");
    if (!formData.nameOnCard.trim()) errors.push("Please enter the name on card");
    if (!formData.cardNumber.trim()) errors.push("Please enter your card number");
    else if (formData.cardNumber.replace(/\s/g, '').length !== 16) errors.push("Card number must be 16 digits");
    if (!formData.expiryDate.trim()) errors.push("Please enter expiry date");
    else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) errors.push("Expiry date must be MM/YY");
    if (!formData.cvv.trim()) errors.push("Please enter CVV");
    else if (!/^\d{3}$/.test(formData.cvv)) errors.push("CVV must be 3 digits");

    if (errors.length > 0) {
      setModalMessage(errors.join("\n"));
      setShowModal(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    // Prepare order data to send to ThankYou page
    const orderData = {
      orderId: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      customer: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode
      },
      payment: {
        cardLastFour: formData.cardNumber.slice(-4),
        nameOnCard: formData.nameOnCard,
        cardType: formData.cardType
      },
      items: cart.map(item => ({ ...item })),
      totals: {
        subtotal: cartTotal,
        tax: 0,
        shipping: 0,
        total: cartTotal
      },
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
    };

    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/thank-you", { state: { orderData } });
    }, 2000);
  };

  return (
    <div className="slick-checkout-container">
      <div className="slick-checkout-wrapper">
        {/* Header */}
        <div className="slick-checkout-header">
          <button onClick={() => navigate("/cart")} className="slick-back-btn">
            <FaArrowLeft /> Back to Cart
          </button>
          <h1>Checkout</h1>
          <div className="slick-security-badge"><FaLock /> Secure Checkout</div>
        </div>

        {/* Main Content */}
        <div className="slick-checkout-content">
          {/* Form Section */}
          <div className="slick-form-section">
            <form onSubmit={handleSubmit} className="slick-checkout-form">
              {/* Contact Info */}
              <div className="slick-form-section">
                <div className="slick-section-header"><FaUser /><h2>Contact Information</h2></div>
                <div className="slick-form-grid">
                  <div className="slick-form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="slick-form-section">
                <div className="slick-section-header"><FaMapMarkerAlt /><h2>Shipping Address</h2></div>
                <div className="slick-form-grid">
                  <div className="slick-form-group"><label>First Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" /></div>
                  <div className="slick-form-group"><label>Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" /></div>
                  <div className="slick-form-group slick-full-width"><label>Address</label><input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Main Street" /></div>
                  <div className="slick-form-group"><label>City</label><input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="New York" /></div>
                  <div className="slick-form-group"><label>ZIP Code</label><input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="10001" /></div>
                </div>
              </div>

              {/* Payment */}
              <div className="slick-form-section">
                <div className="slick-section-header"><FaCreditCard /><h2>Payment Information</h2></div>
                <div className="slick-form-grid">
                  <div className="slick-form-group slick-full-width">
                    <label>Card Type</label>
                    <select name="cardType" value={formData.cardType} onChange={handleInputChange}>
                      <option value="">Select Card Type</option>
                      <option value="Visa">Visa</option>
                      <option value="MasterCard">MasterCard</option>
                      <option value="Discover">Discover</option>
                    </select>
                  </div>
                  <div className="slick-form-group slick-full-width"><label>Name on Card</label><input type="text" name="nameOnCard" value={formData.nameOnCard} onChange={handleInputChange} placeholder="John Doe" /></div>
                  <div className="slick-form-group slick-full-width"><label>Card Number</label><input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="1234 5678 9012 3456" maxLength="16" /></div>
                  <div className="slick-form-group"><label>Expiry Date</label><input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} placeholder="MM/YY" maxLength="5" /></div> 
                  <div className="slick-form-group"><label>CVV</label><input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="123" maxLength="3" /></div>
                </div>
              </div>

              <button type="submit" disabled={isProcessing} className={`slick-pay-btn ${isProcessing ? 'slick-processing' : ''}`}>
                {isProcessing ? (
                  <> <div className="slick-spinner"></div> Processing... </>
                ) : (
                  <> <FaLock /> Pay ${cartTotal.toFixed(2)} </> 
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="slick-order-summary">
            <div className="slick-summary-card">
              <h3>Order Summary</h3>
              <div className="slick-order-items">
                {cart.map(item => (
                  <div key={item.id} className="slick-order-item">
                    <div className="slick-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="slick-item-details">
                      <h4>{item.name}</h4>
                      <div className="slick-item-meta">
                        <span>Qty: {item.quantity}</span>
                        <span>${item.price.toFixed(2)}</span>
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
                <div className="slick-summary-row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                <div className="slick-summary-row"><span>Shipping</span><span className="slick-free">FREE</span></div>
                <div className="slick-total-row">
                  <span>Total</span>
                  <span className="slick-total-amount">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="slick-modal-overlay">
          <div className="slick-modal">
            <p style={{ whiteSpace: 'pre-line' }}>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

