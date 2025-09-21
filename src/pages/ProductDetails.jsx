import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaPlus, FaMinus, FaChevronRight } from 'react-icons/fa';
import { gadgets } from '../data/gadgets';
import ProductCard from '../components/ProductCard';

const ProductDetails = ({ addToCart, toggleWishlist, wishlistItems }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = gadgets.find(p => p.id === parseInt(id));
    setProduct(foundProduct);

    if (foundProduct) {
      // Check if product is in wishlist
      setIsInWishlist(wishlistItems.some(item => item.id === foundProduct.id));
    }
  }, [id, wishlistItems]);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
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

  // Get related products (excluding current product)
  const relatedProducts = gadgets
    .filter(p => p.id !== parseInt(id) && p.category === product?.category)
    .slice(0, 4);

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <a href="/">Home</a> <FaChevronRight className="breadcrumb-icon" />
          <a href="/shop">Shop</a> <FaChevronRight className="breadcrumb-icon" />
          <a href={`/category/${product.category}`}>{product.category}</a> <FaChevronRight className="breadcrumb-icon" />
          <span>{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="product-section">
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="thumbnail-container">
              {[product.image].map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(product.rating) ?
                    <FaStar key={i} /> :
                    i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ?
                      <FaStarHalfAlt key={i} /> :
                      <FaStar key={i} className="empty" />
                ))}
              </div>
              <span className="rating-count">({product.rating} reviews)</span>
            </div>

            <div className="product-price">
              <div className="current-price">${product.price.toFixed(2)}</div>
              {product.originalPrice && (
                <>
                  <div className="original-price">${product.originalPrice.toFixed(2)}</div>
                  <div className="discount">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <div className="feature">
                <FaStar className="feature-icon" />
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <FaStar className="feature-icon" />
                <span>Fast Shipping</span>
              </div>
              <div className="feature">
                <FaStar className="feature-icon" />
                <span>1 Year Warranty</span>
              </div>
              <div className="feature">
                <FaStar className="feature-icon" />
                <span>30-Day Returns</span>
              </div>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange('decrease')}
                >
                  <FaMinus />
                </button>
                <input
                  type="text"
                  className="quantity-input"
                  value={quantity}
                  readOnly
                />
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange('increase')}
                >
                  <FaPlus />
                </button>
              </div>

              <button className="add-to-cart" onClick={handleAddToCart}>
                <FaShoppingCart /> Add to Cart
              </button>

              <button
                className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
                onClick={handleWishlistClick}
              >
                {isInWishlist ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-section">
          <div className="tabs">
            <div
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => handleTabClick('description')}
            >
              Description
            </div>
            <div
              className={`tab ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => handleTabClick('specifications')}
            >
              Specifications
            </div>
            <div
              className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => handleTabClick('reviews')}
            >
              Reviews ({Math.floor(Math.random() * 50) + 10})
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
            <p>{product.description}</p>
            <p>Experience the perfect blend of style and functionality with our {product.name}. Designed with precision and attention to detail, this product offers exceptional performance and reliability.</p>
            <p>Whether you're a professional or a casual user, you'll appreciate the thoughtful design and advanced features that make this product stand out from the competition.</p>
          </div>

          <div className={`tab-content ${activeTab === 'specifications' ? 'active' : ''}`}>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-name">Category</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Model</span>
                <span className="spec-value">Premium Series</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Warranty</span>
                <span className="spec-value">1 Year</span>
              </div>
              <div className="spec-item">
                <span className="spec-name">Compatibility</span>
                <span className="spec-value">Universal</span>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'reviews' ? 'active' : ''}`}>
            <div className="reviews-container">
              <div className="review">
                <div className="review-header">
                  <span className="reviewer">John D.</span>
                  <span className="review-date">October 15, 2023</span>
                </div>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p>Great product! Exactly what I was looking for. Highly recommended!</p>
              </div>

              <div className="review">
                <div className="review-header">
                  <span className="reviewer">Sarah M.</span>
                  <span className="review-date">October 10, 2023</span>
                </div>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
                <p>Very satisfied with my purchase. The quality is excellent and it arrived quickly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h2 className="section-title">You May Also Like</h2>

          <div className="products-grid">
            {relatedProducts.map(relatedProduct => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isInWishlist={wishlistItems.some(item => item.id === relatedProduct.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
