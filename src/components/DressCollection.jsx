import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { gadgets } from '../data/gadgets';
import { useCart } from '../context/CartContext';

const DressCollection = ({ wishlistItems, toggleWishlist }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const dressProducts = gadgets.filter(g => g.category === 'dresses').slice(0, 3);

  return (
    <div className="dress-collection mb-12">
      <div className="container">
        <div className="premium-products-section">
          <div className="premium-products-grid">
            {dressProducts.map(product => {
              const isInWishlist = wishlistItems.some(item => item.id === product.id);
              return (
                <div key={product.id} className={`premium-product-card ${product.featured ? "premium-featured-product" : ""}`}>
                  <div className="premium-product-image">
                    <img src={product.image} alt={product.name} />
                    {product.badge && <div className="premium-product-badge">{product.badge}</div>}
                    <div className="premium-product-actions">
                      <div className="premium-action-btn" title="Add to Cart" onClick={() => addToCart(product)}>
                        <i className="fas fa-shopping-cart"></i>
                      </div>
                      <div className={`premium-action-btn ${isInWishlist ? "wishlist-active" : ""}`}
                           title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                           onClick={() => toggleWishlist(product)}>
                        <i className="fas fa-heart"></i>
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
                        {[...Array(5)].map((_, i) => {
                          const rating = Math.floor(product.rating);
                          if (i < rating) return <i key={i} className="fas fa-star"></i>;
                          if (i < product.rating) return <i key={i} className="fas fa-star-half-alt"></i>;
                          return <i key={i} className="far fa-star"></i>;
                        })}
                      </div>
                      <div className="premium-rating-value">{product.rating} ({product.reviews || 0} reviews)</div>
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
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/category/dresses')}
              className="view-all-dresses-btn px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
            >
              View All Dresses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCollection;
