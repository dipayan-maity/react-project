// CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaHeadphones,
  FaClock,
  FaTshirt,
  FaShoePrints,
  FaGem,
  FaStar,
  FaShoppingCart,
  FaEye
} from 'react-icons/fa';
import { gadgets } from '../data/gadgets';
import './CategoryList.css';

const CategoryList = () => {
  // Get real data from gadgets
  const categories = [
    {
      name: 'headphones',
      displayName: 'Headphones',
      description: 'Premium audio devices for music lovers and professionals',
      icon: <FaHeadphones />,
      productCount: gadgets.filter(p => p.category === 'headphones').length,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featuredProducts: gadgets.filter(p => p.category === 'headphones').slice(0, 2)
    },
    {
      name: 'smart-watches',
      displayName: 'Smart Watches',
      description: 'Advanced wearable technology for modern lifestyle',
      icon: <FaClock />,
      productCount: gadgets.filter(p => p.category === 'smart-watches').length,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featuredProducts: gadgets.filter(p => p.category === 'smart-watches').slice(0, 2)
    },
    {
      name: 'dresses',
      displayName: 'Dresses',
      description: 'Elegant fashion pieces for every special occasion',
      icon: <FaTshirt />,
      productCount: gadgets.filter(p => p.category === 'dresses').length,
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featuredProducts: gadgets.filter(p => p.category === 'dresses').slice(0, 2)
    },
    {
      name: 'shoes',
      displayName: 'Shoes',
      description: 'Comfortable and stylish footwear for all occasions',
      icon: <FaShoePrints />,
      productCount: gadgets.filter(p => p.category === 'shoes').length,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featuredProducts: gadgets.filter(p => p.category === 'shoes').slice(0, 2)
    },
    {
      name: 'accessories',
      displayName: 'Accessories',
      description: 'Complete your look with premium accessories',
      icon: <FaGem />,
      productCount: gadgets.filter(p => p.category === 'accessories').length,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      featuredProducts: gadgets.filter(p => p.category === 'accessories').slice(0, 2)
    }
  ];

  return (
    <div className="elite-category-list-page">
      {/* Premium Header */}
      <div className="elite-category-hero-section">
        <div className="elite-category-hero-bg">
          <div className="elite-category-hero-overlay">
            <div className="elite-category-container">
              <div className="elite-category-hero-content">
                <h1 className="elite-category-main-title">
                  Explore Our Collections
                </h1>
                <p className="elite-category-hero-description">
                  Discover handpicked products across exclusive categories. 
                  Each collection is curated for excellence and designed for your lifestyle.
                </p>
                <div className="elite-category-hero-stats">
                  <div className="elite-stat-item">
                    <span className="elite-stat-number">{gadgets.length}</span>
                    <span className="elite-stat-label">Premium Products</span>
                  </div>
                  <div className="elite-stat-item">
                    <span className="elite-stat-number">{categories.length}</span>
                    <span className="elite-stat-label">Collections</span>
                  </div>
                  <div className="elite-stat-item">
                    <span className="elite-stat-number">100%</span>
                    <span className="elite-stat-label">Quality Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elite-category-container">
        {/* Categories Grid */}
        <div className="elite-premium-categories-grid">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className={`elite-premium-category-card elite-category-${index % 3}`}
            >
              <div className="elite-premium-category-header">
                <div className="elite-category-icon-wrapper">
                  {category.icon}
                </div>
                <div className="elite-category-meta">
                  <span className="elite-category-count">
                    {category.productCount} {category.productCount === 1 ? 'Item' : 'Items'}
                  </span>
                  <div className="elite-category-rating">
                    <FaStar className="elite-rating-star" />
                    <span>4.8+ Rating</span>
                  </div>
                </div>
              </div>

              <div className="elite-premium-category-image">
                <img src={category.image} alt={category.displayName} />
                <div className="elite-category-gradient-overlay"></div>
                
                {/* Featured Products Preview */}
                <div className="elite-category-preview-products">
                  {category.featuredProducts.map(product => (
                    <div key={product.id} className="elite-preview-product">
                      <img src={product.image} alt={product.name} />
                      <div className="elite-preview-info">
                        <span className="elite-preview-name">{product.name}</span>
                        <span className="elite-preview-price">${product.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="elite-premium-category-content">
                <h3 className="elite-premium-category-name">{category.displayName}</h3>
                <p className="elite-premium-category-description">{category.description}</p>
                
                <div className="elite-category-features">
                  <span className="elite-feature-tag">Premium Quality</span>
                  <span className="elite-feature-tag">Free Shipping</span>
                  <span className="elite-feature-tag">1-Year Warranty</span>
                </div>

                <Link 
                  to={`/category/${category.name}`} 
                  className="elite-premium-category-cta"
                >
                  <span>Explore Collection</span>
                  <div className="elite-cta-arrow">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="elite-categories-cta-section">
          <div className="elite-cta-background">
            <div className="elite-cta-content">
              <h2>Ready to Find Your Perfect Match?</h2>
              <p>
                Browse our complete collection or let our experts help you find exactly what you're looking for. 
                Premium quality guaranteed.
              </p>
              <div className="elite-cta-actions">
                <Link to="/shop" className="elite-cta-btn elite-cta-primary">
                  <FaShoppingCart />
                  Shop All Products
                </Link>
                <Link to="/contact" className="elite-cta-btn elite-cta-secondary">
                  <FaEye />
                  Get Personalized Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;