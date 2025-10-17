// Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { 
  FaTimes, 
  FaPlus, 
  FaMinus, 
  FaShoppingBag, 
  FaArrowLeft, 
  FaTrash, 
  FaCreditCard, 
  FaShieldAlt,
  FaLock,
  FaShoppingCart
} from "react-icons/fa";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleDecrement = (id, qty) => {
    if (qty > 1) updateQuantity(id, qty - 1);
  };

  const handleIncrement = (id, qty) => {
    updateQuantity(id, qty + 1);
  };

  if (cart.length === 0) {
    return (
      <div className="elegant-empty-container">
        <div className="elegant-empty-card">
          <div className="elegant-empty-icon">
            <FaShoppingCart className="icon-xl" />
          </div>
          <h2 className="elegant-empty-title">Your Cart is Empty</h2>
          <p className="elegant-empty-text">Discover amazing products and fill your cart with style</p>
          <button
            className="elegant-primary-btn"
            onClick={() => navigate("/products")}
          >
            <FaShoppingBag className="icon-sm" />
            Explore Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="elegant-cart-container">
      <div className="elegant-cart-wrapper">
        {/* Header - Clean White Version */}
        <div className="elegant-cart-header">
          <div className="elegant-header-content">
            <button
              onClick={() => navigate("/products")}
              className="elegant-back-btn"
            >
              <FaArrowLeft className="icon-sm" />
              Continue Shopping
            </button>
            <div className="elegant-header-title">
              <FaShoppingCart className="icon-lg" />
              <h1>Shopping Cart</h1>
            </div>
            <div className="elegant-cart-stats">
              <span className="elegant-stat-item">
                <strong>{cart.length}</strong> items
              </span>
              <span className="elegant-stat-item">
                Total: <strong>${cartTotal.toFixed(2)}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="elegant-cart-content">
          {/* Main Cart Items */}
          <div className="elegant-items-section">
            <div className="elegant-items-header">
              <h2>Your Selection</h2>
              <button
                onClick={clearCart}
                className="elegant-clear-btn"
              >
                <FaTrash className="icon-sm" />
                Clear Cart
              </button>
            </div>

            <div className="elegant-items-grid">
              {cart.map((item) => (
                <div key={item.id} className="elegant-item-card">
                  <div className="elegant-item-image">
                    <img src={item.image} alt={item.name} />
                    <div className="elegant-image-overlay"></div>
                  </div>
                  
                  <div className="elegant-item-content">
                    <div className="elegant-item-header">
                      <h3>{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="elegant-remove-btn"
                      >
                        <FaTimes className="icon-xs" />
                      </button>
                    </div>
                    
                    <div className="elegant-item-price">${item.price.toFixed(2)}</div>
                    
                    <div className="elegant-quantity-section">
                      <div className="elegant-quantity-controls">
                        <button
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          className={`elegant-qty-btn ${item.quantity <= 1 ? 'elegant-disabled' : ''}`}
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus className="icon-xs" />
                        </button>
                        <span className="elegant-qty-display">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrement(item.id, item.quantity)}
                          className="elegant-qty-btn"
                        >
                          <FaPlus className="icon-xs" />
                        </button>
                      </div>
                      <div className="elegant-item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="elegant-summary-section">
            <div className="elegant-summary-card">
              <div className="elegant-summary-header">
                <FaCreditCard className="icon-md" />
                <h3>Order Summary</h3>
              </div>
              
              <div className="elegant-summary-content">
                <div className="elegant-summary-row">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="elegant-summary-row">
                  <span>Shipping</span>
                  <span className="elegant-free">FREE</span>
                </div>
                <div className="elegant-divider"></div>

                <div className="elegant-total-row">
                  <span>Total</span>
                  <span className="elegant-total-amount">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="elegant-checkout-btn"
              >
                <FaLock className="icon-sm" />
                Proceed to Secure Checkout
              </button>

              <div className="elegant-security-note">
                <FaShieldAlt className="icon-xs" />
                Your payment information is secure and encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;