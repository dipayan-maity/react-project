import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHeart,
  faStar,
  faStarHalfAlt,
  faPlus,
  faMinus,
  faChevronRight,
  faTruck,
  faShieldAlt,
  faUndo,
  faShareAlt,
  faEnvelope,
  faTag,
  faAward,
  faGem,
  faBox,
  faLock,
  faPercent,
  faClock,
  faGlobe,
  faHeadset,
  faShippingFast,
  faCertificate,
  faSearchPlus,
  faBolt,
  faFileAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { gadgets } from '../data/gadgets';
import ProductCard from '../components/ProductCard';

const ProductDetails = ({ addToCart, toggleWishlist, wishlistItems, cartItems }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedColor, setSelectedColor] = useState('midnight-black');

  useEffect(() => {
    const foundProduct = gadgets.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);

    if (foundProduct) {
      setIsInWishlist(wishlistItems.some(item => item.id === foundProduct.id));
    }
  }, [productId, wishlistItems]);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const productWithColor = {
        ...product,
        quantity,
        selectedColor,
        color: colorVariants.find(c => c.id === selectedColor)?.name
      };
      addToCart(productWithColor);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      const productWithColor = {
        ...product,
        quantity,
        selectedColor,
        color: colorVariants.find(c => c.id === selectedColor)?.name
      };
      addToCart(productWithColor);
      navigate('/cart');
    }
  };

  const handleWishlistClick = () => {
    if (product) {
      toggleWishlist(product);
      setIsInWishlist(!isInWishlist);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleThumbnailClick = (index) => {
    setActiveImage(index);
  };

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const colorVariants = [
    { id: 'midnight-black', name: 'Midnight Black', color: '#1a1a1a' },
    { id: 'silver-mist', name: 'Silver Mist', color: '#c0c0c0' },
    { id: 'golden-sun', name: 'Golden Sun', color: '#ffd700' },
    { id: 'ocean-blue', name: 'Ocean Blue', color: '#4169e1' }
  ];

  const relatedProducts = gadgets
    .filter(p => p.id !== parseInt(productId) && p.category === product?.category)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="not-found-content">
          <div className="not-found-icon">😔</div>
          <h2>Product Not Available</h2>
          <p>We couldn't find the product you're looking for.</p>
          <a href="/shop" className="browse-products-btn">
            Browse Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="product-showcase">
      <div className="page-container">
        {/* Navigation Path */}
        <div className="nav-path">
          <a href="/" className="nav-link">Home</a>
          <FontAwesomeIcon icon={faChevronRight} className="nav-separator" size="xs" />
          <a href="/shop" className="nav-link">Shop</a>
          <FontAwesomeIcon icon={faChevronRight} className="nav-separator" size="xs" />
          <a href={`/category/${product.category}`} className="nav-link">{product.category}</a>
          <FontAwesomeIcon icon={faChevronRight} className="nav-separator" size="xs" />
          <span className="nav-current">{product.name}</span>
        </div>

        {/* Main Product Display */}
        <div className="product-display">
          {/* Visual Gallery */}
          <div className="product-visuals">
            <div className="main-visual">
              <div className="image-frame">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="image-actions">
                  <button className="visual-action-btn">
                    <FontAwesomeIcon icon={faSearchPlus} size="lg" />
                  </button>
                </div>
              </div>
              <div className="product-tags">
                <span className="tag new-arrival">NEW ARRIVAL</span>
                {product.originalPrice && (
                  <span className="tag discount">
                    SAVE {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
            </div>
            
            <div className="thumbnail-strip">
              {[product.image, product.image, product.image].map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-frame ${activeImage === index ? 'thumbnail-active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={image} alt={`View ${index + 1}`} />
                </div>
              ))}
            </div>
            
            <div className="social-actions">
              <button className="social-share-btn">
                <FontAwesomeIcon icon={faShareAlt} size={14} /> Share Product
              </button>
              <button className="social-share-btn">
                <FontAwesomeIcon icon={faEnvelope} size={14} /> Send to Friend
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <div className="detail-header">
              <div className="product-category-tag">{product.category}</div>
              <h1 className="product-name">{product.name}</h1>
              <div className="rating-display">
                <div className="star-rating">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(product.rating) ? (
                      <FontAwesomeIcon key={i} icon={faStar} className="star-filled" size="sm" />
                    ) : i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? (
                      <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star-half" size="sm" />
                    ) : (
                      <FontAwesomeIcon key={i} icon={faStar} className="star-empty" size="sm" />
                    )
                  )}
                </div>
                <span className="rating-text">({product.rating} • 234 reviews)</span>
                <span className="rating-separator">•</span>
                <span className="sales-count">512 sold</span>
              </div>
            </div>

            <div className="pricing-section">
              <div className="price-display">
                <div className="current-price">${product.price.toFixed(2)}</div>
                {product.originalPrice && (
                  <>
                    <div className="original-price">
                      ${product.originalPrice.toFixed(2)}
                    </div>
                    <div className="savings-badge">
                      <FontAwesomeIcon icon={faTag} size={14} /> You save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  </>
                )}
              </div>
              <div className="price-note">
                All taxes included • Free shipping over $50
              </div>
            </div>
            

            <div className="description-preview">
              <p className={`description-text ${showFullDescription ? 'expanded' : ''}`}>
                {showFullDescription 
                  ? product.description 
                  : `${product.description.substring(0, 200)}...`
                }
              </p>
              <button 
                className="toggle-description"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
              </button>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <h3>Color: <span className="selected-color">{colorVariants.find(c => c.id === selectedColor)?.name}</span></h3>
              <div className="color-options">
                {colorVariants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`color-option ${selectedColor === variant.id ? 'color-active' : ''}`}
                    style={{backgroundColor: variant.color}}
                    onClick={() => setSelectedColor(variant.id)}
                    title={variant.name}
                  />
                ))}
              </div>
            </div>

            {/* Value Propositions */}
            <div className="value-propositions">
              <div className="proposition-card">
                <div className="proposition-icon">
                  <FontAwesomeIcon icon={faShippingFast} size={20} />
                </div>
                <div className="proposition-content">
                  <h4>Fast & Free Shipping</h4>
                  <p>Get it in 2-3 business days</p>
                </div>
              </div>
              <div className="proposition-card">
                <div className="proposition-icon">
                  <FontAwesomeIcon icon={faShieldAlt} size={20} />
                </div>
                <div className="proposition-content">
                  <h4>3-Year Warranty</h4>
                  <p>Extended protection included</p>
                </div>
              </div>
              <div className="proposition-card">
                <div className="proposition-icon">
                  <FontAwesomeIcon icon={faUndo} size={20} />
                </div>
                <div className="proposition-content">
                  <h4>Easy Returns</h4>
                  <p>30-day money back guarantee</p>
                </div>
              </div>
              <div className="proposition-card">
                <div className="proposition-icon">
                  <FontAwesomeIcon icon={faAward} size={20} />
                </div>
                <div className="proposition-content">
                  <h4>Premium Quality</h4>
                  <p>Certified excellence</p>
                </div>
              </div>
            </div>

            {/* Purchase Controls */}
            <div className="purchase-controls">
              <div className="quantity-control">
                <label className="quantity-label">Quantity</label>
                <div className="quantity-selector">
                  <button
                    className="quantity-adjust"
                    onClick={() => handleQuantityChange('decrease')}
                    disabled={quantity <= 1}
                  >
                    <FontAwesomeIcon icon={faMinus} size={16} />
                  </button>
                  <div className="quantity-display">{quantity}</div>
                  <button
                    className="quantity-adjust"
                    onClick={() => handleQuantityChange('increase')}
                  >
                    <FontAwesomeIcon icon={faPlus} size={16} />
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <button className="cart-action-btn primary" onClick={handleAddToCart}>
                  <FontAwesomeIcon icon={faShoppingCart} size={16} /> Add to Cart
                </button>
                <button className="cart-action-btn secondary" onClick={handleBuyNow}>
                  <FontAwesomeIcon icon={faBolt} size={16} /> Buy Now
                </button>
                <button
                  className={`wishlist-action ${isInWishlist ? 'in-wishlist' : ''}`}
                  onClick={handleWishlistClick}
                  title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  {isInWishlist ? <FontAwesomeIcon icon={faHeart} size={24} /> : <FontAwesomeIcon icon={faHeartRegular} size={24} />}
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <FontAwesomeIcon icon={faLock} className="trust-icon" size="sm" />
                <span>256-bit SSL Secure</span>
              </div>
              <div className="trust-item">
                <FontAwesomeIcon icon={faCertificate} className="trust-icon" size="sm" />
                <span>Authentic Guarantee</span>
              </div>
              <div className="trust-item">
                <FontAwesomeIcon icon={faHeadset} className="trust-icon" size="sm" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Product Information */}
            <div className="product-meta-info">
              <div className="meta-row">
                <span className="meta-label">Product ID:</span>
                <span className="meta-value">PT-{product.id.toString().padStart(6, '0')}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Stock Status:</span>
                <span className="meta-value stock-available">In Stock • Ready to Ship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="information-tabs">
          <div className="tabs-header-section">
            <h2>Product Information</h2>
            <div className="tab-navigation">
              <button
                className={`tab-button ${activeTab === 'description' ? 'tab-active' : ''}`}
                onClick={() => handleTabClick('description')}
              >
                <FontAwesomeIcon icon={faFileAlt} size="sm" /> Overview
              </button>
              <button
                className={`tab-button ${activeTab === 'specifications' ? 'tab-active' : ''}`}
                onClick={() => handleTabClick('specifications')}
              >
                <FontAwesomeIcon icon={faCog} size="sm" /> Technical Specs
              </button>
              <button
                className={`tab-button ${activeTab === 'reviews' ? 'tab-active' : ''}`}
                onClick={() => handleTabClick('reviews')}
              >
                <FontAwesomeIcon icon={faStar} size="sm" /> Customer Reviews ({Math.floor(Math.random() * 50) + 10})
              </button>
              <button
                className={`tab-button ${activeTab === 'shipping' ? 'tab-active' : ''}`}
                onClick={() => handleTabClick('shipping')}
              >
                <FontAwesomeIcon icon={faShippingFast} size="sm" /> Delivery Info
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content-area">
            {activeTab === 'description' && (
              <div className="tab-panel active">
                <div className="overview-section">
                  <h3>Exceptional Performance Meets Elegant Design</h3>
                  <p>
                    Discover the {product.name} - a masterpiece of engineering and design. 
                    Crafted for those who demand the best, this product combines cutting-edge 
                    technology with sophisticated aesthetics.
                  </p>
                </div>
                
                <div className="feature-showcase">
                  <div className="feature-item">
                    <div className="feature-icon-wrapper">
                      <FontAwesomeIcon icon={faGem} size="lg" />
                    </div>
                    <div className="feature-details">
                      <h4>Premium Craftsmanship</h4>
                      <p>Expertly crafted using the finest materials for lasting durability and style</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon-wrapper">
                      <FontAwesomeIcon icon={faBolt} size="lg" />
                    </div>
                    <div className="feature-details">
                      <h4>Next-Gen Performance</h4>
                      <p>Advanced technology delivers unmatched performance in every scenario</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon-wrapper">
                      <FontAwesomeIcon icon={faAward} size="lg" />
                    </div>
                    <div className="feature-details">
                      <h4>Award-Winning Excellence</h4>
                      <p>Internationally recognized for innovation and outstanding design</p>
                    </div>
                  </div>
                </div>

                <div className="detailed-overview">
                  <h4>Why This Product Stands Out</h4>
                  <p>
                    Designed for perfectionists and professionals alike, every aspect of this 
                    product has been meticulously engineered to provide an exceptional user 
                    experience that exceeds expectations.
                  </p>
                  <ul className="benefits-list">
                    <li>✓ Comprehensive warranty with premium support</li>
                    <li>✓ Regular updates with new features</li>
                    <li>✓ Sustainable materials and eco-conscious packaging</li>
                    <li>✓ Universal compatibility across platforms</li>
                    <li>✓ Trusted by over 1 million satisfied customers</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="tab-panel active">
                <div className="specs-grid-layout">
                  <div className="specs-category">
                    <h4>General Specifications</h4>
                    <div className="specs-list">
                      <div className="spec-line">
                        <span className="spec-name">Brand</span>
                        <span className="spec-detail">EliteTech</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Model Series</span>
                        <span className="spec-detail">ET-2024-Ultra</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Product Category</span>
                        <span className="spec-detail">{product.category}</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Release Date</span>
                        <span className="spec-detail">November 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="specs-category">
                    <h4>Physical Properties</h4>
                    <div className="specs-list">
                      <div className="spec-line">
                        <span className="spec-name">Dimensions</span>
                        <span className="spec-detail">9.8 × 7.2 × 2.8 inches</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Product Weight</span>
                        <span className="spec-detail">1.4 lbs (640g)</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Construction</span>
                        <span className="spec-detail">Aerospace Aluminum</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Available Colors</span>
                        <span className="spec-detail">4 Premium Finishes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="specs-category">
                    <h4>Support & Protection</h4>
                    <div className="specs-list">
                      <div className="spec-line">
                        <span className="spec-name">Warranty Period</span>
                        <span className="spec-detail">3 Years Comprehensive</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Customer Support</span>
                        <span className="spec-detail">24/7 Priority Access</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Return Policy</span>
                        <span className="spec-detail">30-Day Satisfaction</span>
                      </div>
                      <div className="spec-line">
                        <span className="spec-name">Quality Certification</span>
                        <span className="spec-detail">ISO 9001 Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-panel active">
                <div className="reviews-dashboard">
                  <div className="reviews-summary-card">
                    <div className="summary-main">
                      <div className="rating-overview">
                        <span className="rating-score">{product.rating}</span>
                        <div className="star-display">
                          {[...Array(5)].map((_, i) =>
                            i < Math.floor(product.rating) ? (
                              <FontAwesomeIcon key={i} icon={faStar} className="star-filled" size="lg" />
                            ) : i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? (
                              <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star-half" size="lg" />
                            ) : (
                              <FontAwesomeIcon key={i} icon={faStar} className="star-empty" size="lg" />
                            )
                          )}
                        </div>
                        <span className="review-count">Based on {Math.floor(Math.random() * 50) + 10} verified reviews</span>
                      </div>
                      <div className="rating-distribution">
                        {[5,4,3,2,1].map((stars) => (
                          <div key={stars} className="distribution-row">
                            <span>{stars}</span>
                            <div className="distribution-bar">
                              <div 
                                className="distribution-fill" 
                                style={{width: `${[70, 20, 7, 2, 1][5-stars]}%`}}
                              ></div>
                            </div>
                            <span>{[70, 20, 7, 2, 1][5-stars]}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="summary-actions">
                      <button className="review-action-btn">Share Your Experience</button>
                      <div className="review-gallery">
                        <img src="https://picsum.photos/60/60?random=1" alt="Customer review" />
                        <img src="https://picsum.photos/60/60?random=2" alt="Customer review" />
                        <img src="https://picsum.photos/60/60?random=3" alt="Customer review" />
                        <div className="gallery-more">+27</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="reviews-feed">
                    <div className="review-card">
                      <div className="review-header">
                        <div className="reviewer-profile">
                          <div className="reviewer-avatar">AM</div>
                    <div className="reviewer-details">
                        <span className="reviewer-name">Alex Morgan</span>
                        <div className="review-stars">
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                        </div>
                      </div>
                        </div>
                        <span className="review-date">November 5, 2023</span>
                      </div>
                      <p className="review-content">
                        Exceptional quality and outstanding performance! This product has completely 
                        transformed my daily routine. The attention to detail is remarkable and 
                        customer service was incredibly responsive.
                      </p>
                      <div className="review-engagement">
                        <button className="engagement-btn">Helpful (24)</button>
                        <button className="engagement-btn">Comment</button>
                      </div>
                    </div>

                    <div className="review-card">
                      <div className="review-header">
                        <div className="reviewer-profile">
                          <div className="reviewer-avatar">TJ</div>
                    <div className="reviewer-details">
                        <span className="reviewer-name">Taylor Johnson</span>
                        <div className="review-stars">
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStar} size="sm" />
                          <FontAwesomeIcon icon={faStarHalfAlt} size="sm" />
                        </div>
                      </div>
                        </div>
                        <span className="review-date">November 1, 2023</span>
                      </div>
                      <p className="review-content">
                        Very impressed with the build quality and features. It arrived quickly 
                        and the packaging was premium. Definitely worth the investment for 
                        anyone serious about quality.
                      </p>
                      <div className="review-engagement">
                        <button className="engagement-btn">Helpful (15)</button>
                        <button className="engagement-btn">Comment</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="tab-panel active">
                <div className="shipping-info-panel">
                  <div className="shipping-options-grid">
                    <div className="shipping-option-card">
                      <div className="shipping-icon-container">
                        <FontAwesomeIcon icon={faShippingFast} size="lg" />
                      </div>
                      <h4>Express Delivery</h4>
                      <p>2-3 business days</p>
                      <span className="shipping-cost">COMPLIMENTARY</span>
                    </div>
                    <div className="shipping-option-card">
                      <div className="shipping-icon-container">
                        <FontAwesomeIcon icon={faTruck} size="lg" />
                      </div>
                      <h4>Standard Shipping</h4>
                      <p>5-7 business days</p>
                      <span className="shipping-cost">$8.99</span>
                    </div>
                    <div className="shipping-option-card">
                      <div className="shipping-icon-container">
                        <FontAwesomeIcon icon={faBox} size="lg" />
                      </div>
                      <h4>Economy Option</h4>
                      <p>10-14 business days</p>
                      <span className="shipping-cost">$4.99</span>
                    </div>
                  </div>
                  
                  <div className="shipping-details">
                    <h4>Delivery Information</h4>
                    <ul className="shipping-benefits">
                      <li>• Free express shipping on orders over $50</li>
                      <li>• Worldwide international delivery available</li>
                      <li>• Real-time tracking with updates</li>
                      <li>• Premium protective packaging</li>
                      <li>• Full insurance coverage included</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products */}
        <div className="recommendations-section">
          <div className="section-title-bar">
            <h2 className="section-heading">Complete Your Collection</h2>
            <a href="/shop" className="section-cta">
              Discover More →
            </a>
          </div>

          <div className="recommendations-grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isInWishlist={wishlistItems.some(
                  (item) => item.id === relatedProduct.id
                )}
                viewProduct={viewProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;