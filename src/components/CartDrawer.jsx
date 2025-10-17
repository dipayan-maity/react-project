import React, { useEffect } from 'react';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  // Prevent body scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close cart on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Cart Overlay */}
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <div className="close-cart" onClick={onClose}>
            <FaTimes />
          </div>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart />
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added anything to your cart yet.</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                  <div className="item-quantity">
                    <div
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <FaMinus />
                    </div>
                    <span>{item.quantity}</span>
                    <div
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
                <div
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">${cartTotal.toFixed(2)}</span>
            </div>
            {/* Navigate to cart page */}
            <button
              className="checkout-btn"
              onClick={() => {
                onClose(); // close drawer
                navigate('/cart'); // navigate to cart page
              }}
            >
              Proceed to Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
