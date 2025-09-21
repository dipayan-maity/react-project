import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product, addToCart, toggleWishlist, isInWishlist }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  const handleFloatingIconClick = (action) => {
    if (action === 'cart') {
      handleAddToCart();
    } else if (action === 'wishlist') {
      handleWishlistClick();
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <div className="category-tag">{product.category}</div>

        {product.onSale && (
          <div className="sale-tag">SALE</div>
        )}

        {/* Floating Icons */}
        <div className="floating-icons">
          <div
            className="icon-btn cart-icon"
            onClick={() => handleFloatingIconClick('cart')}
          >
            <FaShoppingCart />
          </div>
          <div
            className="icon-btn wishlist-icon"
            onClick={() => handleFloatingIconClick('wishlist')}
          >
            <FaHeart />
          </div>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-description">{product.description}</p>

        <div className="rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              i < Math.floor(product.rating) ?
                <FaStar key={i} className="star" /> :
                i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ?
                  <FaStarHalfAlt key={i} className="star" /> :
                  <FaStar key={i} className="star empty" />
            ))}
          </div>
          <span className="rating-value">{product.rating}</span>
        </div>

        <div className="price-container">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <button
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <button
          className={`wishlist ${isInWishlist ? 'active' : ''}`}
          onClick={handleWishlistClick}
        >
          {isInWishlist ? <FaHeart /> : <FaRegHeart />}
          {isInWishlist ? ' In Wishlist' : ' Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
