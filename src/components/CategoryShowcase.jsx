import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const CategoryShowcase = ({ categories: propCategories, gadgets = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCards, setVisibleCards] = useState({});

  // Generate categories from gadgets data or use default
  const generateCategoriesFromGadgets = () => {
    if (!gadgets.length) return defaultCategories;
    
    const categoryMap = {};
    gadgets.forEach(product => {
      if (!categoryMap[product.category]) {
        categoryMap[product.category] = {
          name: product.category,
          displayName: product.categoryDisplay || product.category.charAt(0).toUpperCase() + product.category.slice(1),
          products: []
        };
      }
      categoryMap[product.category].products.push(product);
    });

    return Object.values(categoryMap).map(cat => {
      const categoryConfig = defaultCategories.find(c => c.category === cat.name) || {};
      return {
        id: cat.name,
        category: cat.name,
        displayName: cat.displayName,
        description: categoryConfig.description || `${cat.displayName} collection`,
        icon: categoryConfig.icon || getCategoryIcon(cat.name),
        productCount: cat.products.length,
        image: categoryConfig.image || getCategoryImage(cat.name),
        featuredProducts: cat.products.slice(0, 2),
        stats: [
          { value: `${cat.products.length}+`, label: "Products" },
          { value: "4.8★", label: "Rating" },
          { value: "Premium", label: "Quality" }
        ],
        linkText: `Shop ${cat.displayName}`,
        badge: categoryConfig.badge
      };
    });
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'headphones': <FaHeadphones className="sophisticated-icon" />,
      'smart-watches': <FaClock className="sophisticated-icon" />,
      'dresses': <FaTshirt className="sophisticated-icon" />,
      'shoes': <FaShoePrints className="sophisticated-icon" />,
      'accessories': <FaGem className="sophisticated-icon" />,
      'electronics': <FaHeadphones className="sophisticated-icon" />
    };
    return icons[category] || <FaGem className="sophisticated-icon" />;
  };

  const getCategoryImage = (category) => {
    const images = {
      'headphones': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'smart-watches': 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'dresses': 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'shoes': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'accessories': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    };
    return images[category] || '/api/placeholder/400/300';
  };

  const defaultCategories = [
    {
      id: 1,
      category: "headphones",
      displayName: "Headphones",
      icon: <FaHeadphones className="sophisticated-icon" />,
      badge: "Popular",
      description: "Premium audio devices for music lovers and professionals",
      stats: [
        { value: "45+", label: "Products" },
        { value: "4.8★", label: "Rating" },
        { value: "New", label: "Models" },
      ],
      linkText: "Shop Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 45,
      featuredProducts: []
    },
    {
      id: 2,
      category: "smart-watches",
      displayName: "Smart Watches",
      icon: <FaClock className="sophisticated-icon" />,
      description: "Advanced wearable technology for modern lifestyle",
      stats: [
        { value: "32+", label: "Models" },
        { value: "4.7★", label: "Rating" },
        { value: "-25%", label: "Sale" },
      ],
      linkText: "Browse Watches",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 32,
      featuredProducts: []
    },
    {
      id: 3,
      category: "dresses",
      displayName: "Dresses",
      icon: <FaTshirt className="sophisticated-icon" />,
      badge: "Trending",
      description: "Elegant fashion pieces for every special occasion",
      stats: [
        { value: "85+", label: "Styles" },
        { value: "4.9★", label: "Rating" },
        { value: "New", label: "Arrivals" },
      ],
      linkText: "View Dresses",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 85,
      featuredProducts: []
    },
    {
      id: 4,
      category: "shoes",
      displayName: "Shoes",
      icon: <FaShoePrints className="sophisticated-icon" />,
      description: "Comfortable and stylish footwear for all occasions",
      stats: [
        { value: "67+", label: "Pairs" },
        { value: "4.6★", label: "Rating" },
        { value: "Eco", label: "Friendly" },
      ],
      linkText: "Discover Shoes",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 67,
      featuredProducts: []
    },
    {
      id: 5,
      category: "accessories",
      displayName: "Accessories",
      icon: <FaGem className="sophisticated-icon" />,
      description: "Complete your look with premium accessories",
      stats: [
        { value: "120+", label: "Items" },
        { value: "4.8★", label: "Rating" },
        { value: "Luxury", label: "Brands" },
      ],
      linkText: "Shop Accessories",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 120,
      featuredProducts: []
    },
    {
      id: 6,
      category: "electronics",
      displayName: "Electronics",
      icon: <FaHeadphones className="sophisticated-icon" />,
      badge: "Sale",
      description: "Latest gadgets, laptops & smart home devices",
      stats: [
        { value: "89+", label: "Products" },
        { value: "4.5★", label: "Rating" },
        { value: "-30%", label: "Sale" },
      ],
      linkText: "Explore Tech",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 89,
      featuredProducts: []
    }
  ];

  const categories = propCategories || generateCategoriesFromGadgets();
  const uniqueCategories = ['all', ...new Set(categories.map(cat => cat.category))];

  useEffect(() => {
    const cards = document.querySelectorAll(".sophisticated-category-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.dataset.id;
            setVisibleCards(prev => ({ ...prev, [cardId]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [categories, activeFilter]);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const filteredCategories = activeFilter === "all" 
    ? categories 
    : categories.filter(cat => cat.category === activeFilter);

  return (
    <div className="sophisticated-category-showcase">
      {/* Elegant Header */}
     

      <div className="sophisticated-container">
        {/* Minimal Filter Buttons */}
        <div className="sophisticated-filters">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              className={`sophisticated-filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => handleFilter(cat)}
            >
              {cat === 'all' ? 'All' : cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Sophisticated Categories Grid */}
        <div className="sophisticated-categories-grid">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id} 
              data-id={category.id}
              className={`sophisticated-category-card ${visibleCards[category.id] ? "visible" : ""}`}
            >
              {/* Elegant Card Header */}
              <div className="sophisticated-card-header">
                <div className="sophisticated-icon-container">
                  {category.icon}
                </div>
                <div className="sophisticated-meta-info">
                  <span className="sophisticated-item-count">
                    {category.productCount} items
                  </span>
                  <div className="sophisticated-rating">
                    <FaStar className="sophisticated-star" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>

              {/* Refined Image Section */}
              <div className="sophisticated-image-section">
                <img src={category.image} alt={category.displayName} />
                <div className="sophisticated-image-overlay"></div>
                
                {/* Subtle Badge */}
                {category.badge && (
                  <div className={`sophisticated-badge ${category.badge.toLowerCase()}`}>
                    {category.badge}
                  </div>
                )}

                {/* Minimal Product Previews */}
                {category.featuredProducts && category.featuredProducts.length > 0 && (
                  <div className="sophisticated-preview">
                    {category.featuredProducts.map(product => (
                      <div key={product.id} className="sophisticated-preview-item">
                        <img src={product.image} alt={product.name} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Refined Content */}
              <div className="sophisticated-card-content">
                <h3 className="sophisticated-category-name">{category.displayName}</h3>
                <p className="sophisticated-category-description">{category.description}</p>
                
                {/* Minimal Stats */}
                <div className="sophisticated-stats">
                  {category.stats && category.stats.map((stat, idx) => (
                    <div className="sophisticated-stat" key={idx}>
                      <div className="sophisticated-stat-value">{stat.value}</div>
                      <div className="sophisticated-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Elegant Features */}
                <div className="sophisticated-features">
                  <span className="sophisticated-feature">Premium</span>
                  <span className="sophisticated-feature">Quality</span>
                  <span className="sophisticated-feature">Warranty</span>
                </div>

                {/* Sophisticated CTA */}
                <Link 
                  to={`/category/${category.category}`} 
                  className="sophisticated-cta"
                >
                  <span>Explore</span>
                  <div className="sophisticated-arrow">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

    
      </div>

    
    </div>
  );
};

export default CategoryShowcase;