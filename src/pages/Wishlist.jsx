// Wishlist.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // Import your ProductCard component
import {
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaArrowLeft,
  FaRegHeart,
} from "react-icons/fa";

const Wishlist = ({ wishlistItems, toggleWishlist, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((product) => {
      addToCart({ ...product, quantity: 1 });
    });
  };

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="slick-wishlist-container">
        <div className="slick-wishlist-wrapper">
          <div className="slick-empty-wishlist">
            <div className="empty-wishlist-icon">
              <FaRegHeart />
            </div>
            <h1>Your Wishlist is Empty</h1>
            <p>Start exploring and add items you love to your wishlist</p>
            <div className="empty-wishlist-actions">
              <button
                onClick={() => navigate("/shop")}
                className="slick-primary-btn"
              >
                Discover Products
              </button>
              <button
                onClick={() => navigate("/")}
                className="slick-secondary-btn"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Wishlist Section */}
      <div className="slick-wishlist-container">
        <div className="slick-wishlist-wrapper">
          {/* Header */}
          <div className="slick-wishlist-header">
            <div className="header-content">
              <button onClick={() => navigate(-1)} className="slick-back-btn">
                <FaArrowLeft />
                Continue Shopping
              </button>
              <div className="wishlist-title-section">
                <h1>My Wishlist</h1>
                <div className="wishlist-stats">
                  <span>{wishlistItems.length} items</span>
                  <span className="stat-separator">•</span>
                  <span>
                    Total: $
                    {wishlistItems
                      .reduce((total, item) => total + item.price, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="header-actions">
                <button
                  onClick={handleMoveAllToCart}
                  className="slick-action-btn primary"
                >
                  <FaShoppingCart />
                  Add All to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Wishlist Items using ProductCard Component */}
          <div className="wishlist-products-section">
            <div className="wishlist-products-grid">
              {wishlistItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={handleAddToCart}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={true} // Always true since it's in wishlist
                  viewProduct={viewProduct}
                />
              ))}
            </div>

            {/* Wishlist Summary */}
            <div className="wishlist-summary">
              <div className="summary-card">
                <h3>Wishlist Summary</h3>

                <div className="summary-details">
                  <div className="summary-row">
                    <span>Items in Wishlist</span>
                    <span>{wishlistItems.length}</span>
                  </div>
                  <div className="summary-row">
                    <span>Total Value</span>
                    <span>
                      $
                      {wishlistItems
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="summary-row">
                    <span>Potential Savings</span>
                    <span className="savings-amount">
                      $
                      {wishlistItems
                        .reduce(
                          (total, item) =>
                            total +
                            (item.originalPrice
                              ? item.originalPrice - item.price
                              : 0),
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="summary-divider"></div>

                <button
                  onClick={handleMoveAllToCart}
                  className="slick-primary-btn full-width"
                >
                  <FaShoppingCart />
                  Add All Items to Cart
                </button>

                <div className="wishlist-tips">
                  <h4>Wishlist Tips</h4>
                  <ul>
                    <li>• Items stay in your wishlist until you remove them</li>
                    <li>• Get notified when wishlist items go on sale</li>
                    <li>• Share your wishlist with friends and family</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Viewed Suggestions */}
          <div className="suggestions-section">
            <div className="section-header">
              <h2>You Might Also Like</h2>
              <p>Based on your wishlist items</p>
            </div>
            <div className="suggestions-grid">
              <div className="suggestion-placeholder">
                <FaHeart className="suggestion-icon" />
                <p>Discover more products you'll love</p>
                <button
                  onClick={() => navigate("/shop")}
                  className="slick-secondary-btn"
                >
                  Explore Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Wishlist;