import React from "react";

const ProductCard = ({ product, addToCart, toggleWishlist, isInWishlist, viewProduct }) => {
  return (
    <div className={`premium-product-card ${product.featured ? "premium-featured-product" : ""}`} data-category={product.category}>
      <div className="premium-product-image">
        <img src={product.image} alt={product.name} />
        {product.badge && <div className="premium-product-badge">{product.badge}</div>}
        <div className="premium-product-actions">
          <div className="premium-action-btn" title="Add to Cart" onClick={() => addToCart(product)}>
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="premium-action-btn" title="Add to Wishlist" onClick={() => toggleWishlist(product)}>
            <i className={`fas fa-heart ${isInWishlist ? "active" : ""}`}></i>
          </div>
          <div className="premium-action-btn" title="Quick View" onClick={() => viewProduct(product.id)}>
            <i className="fas fa-eye"></i>
          </div>
        </div>
      </div>

      <div className="premium-product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="premium-product-rating">
          <div className="premium-stars">
            {isNaN(product.rating) ? (
              <span>N/A</span>
            ) : (
              [...Array(5)].map((_, i) => {
                const rating = Math.floor(product.rating);
                if (i < rating) return <i key={i} className="fas fa-star"></i>;
                if (i < product.rating) return <i key={i} className="fas fa-star-half-alt"></i>;
                return <i key={i} className="far fa-star"></i>;
              })
            )}
          </div>
          <div className="premium-rating-value">
            {isNaN(product.rating) ? 'N/A' : product.rating} ({isNaN(product.reviews) ? 0 : product.reviews} reviews)
          </div>
        </div>

        <div className="premium-product-price">
          <div className="premium-current-price">${isNaN(product.price) ? 'N/A' : product.price}</div>
          {product.oldPrice && !isNaN(product.oldPrice) && <div className="premium-old-price">${product.oldPrice}</div>}
          {product.discount && <div className="premium-discount">{product.discount}</div>}
        </div>

      
      </div>
    </div>
  );
};

export default ProductCard;
