import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const FeaturedProducts = ({ products, wishlistItems, toggleWishlist, viewProduct, disableFilters = false }) => {
  const { addToCart } = useCart();

  const [activeFilter, setActiveFilter] = useState("featured");

  const filters = [
    { key: "featured", label: "Featured" },
    ...[...new Set(products.map(p => p.category))].map(c => ({ key: c, label: c }))
  ];

  const filteredProducts = disableFilters ? products : products.filter(product => {
    if (activeFilter === "featured") return product.featured;
    return product.category === activeFilter;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="premium-products-section">
      <div className="container">

      {!disableFilters && (
        <div className="premium-product-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`premium-filter-btn ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className="premium-products-grid">
        {filteredProducts.map(product => {
          const isInWishlist = wishlistItems.some(item => item.id === product.id);
          return (
            <div key={product.id} className={`premium-product-card ${product.featured ? "premium-featured-product" : ""}`}>
              <div className="premium-product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && <div className="premium-product-badge">{product.badge}</div>}
                <div className="premium-product-actions">
                  <div className="premium-action-btn" title="Add to Cart" onClick={() => addToCart(product)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className={`premium-action-btn ${isInWishlist ? "wishlist-active" : ""}`}
                       title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                       onClick={() => toggleWishlist(product)}>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <div className="premium-action-btn" title="Quick View2" onClick={() => viewProduct(product.id)}>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
              </div>

              <div className="premium-product-content">
                <h3 onClick={() => viewProduct(product.id)} style={{ cursor: 'pointer' }}>{product.name}</h3>
                <p>{product.description}</p>
                
                <div className="premium-product-rating">
                  <div className="premium-stars">
                    {renderStars(product.rating)}
                  </div>
                  <div className="premium-rating-value">{product.rating} ({product.reviewCount} reviews)</div>
                </div>
                
                <div className="premium-product-price">
                  <div className="premium-current-price">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="premium-old-price">${product.originalPrice.toFixed(2)}</div>
                  )}
                  {product.discount && (
                    <div className="premium-discount">-{product.discount}%</div>
                  )}
                </div>
                
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default FeaturedProducts;