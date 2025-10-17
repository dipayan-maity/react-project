// Category.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaFilter, 
  FaSort, 
  FaTh, 
  FaList, 
  FaStar, 
  FaRegHeart, 
  FaHeart,
  FaShoppingCart,
  FaChevronRight,
  FaArrowLeft,
  FaTag,
  FaSearch,
  FaTimes
} from "react-icons/fa";
import { gadgets } from "../data/gadgets";
import "./Category.css";

const Category = ({ addToCart, toggleWishlist, wishlistItems }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Available filters
  const brands = ['Apple', 'Samsung', 'Sony', 'Bose', 'Dell', 'HP', 'Logitech'];
  const ratings = [5, 4, 3, 2, 1];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Map URL slugs to category names
      const categoryMap = {
        'headphones': 'headphones',
        'smart-watches': 'smart-watches', 
        'dresses': 'dresses',
        'shoes': 'shoes',
        'accessories': 'accessories'
      };

      const targetCategory = categoryMap[categoryName?.toLowerCase()] || categoryName?.toLowerCase();
      
      const categoryProducts = gadgets.filter(
        product => product.category === targetCategory
      );
      
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
      setLoading(false);
    }, 500);
  }, [categoryName]);

  useEffect(() => {
    filterProducts();
  }, [sortBy, priceRange, selectedBrands, selectedRatings, searchQuery, products]);

  const filterProducts = () => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.some(brand => 
          product.name.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Rating filter
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product =>
        selectedRatings.some(rating => product.rating >= rating)
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleRatingToggle = (rating) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedBrands([]);
    setSelectedRatings([]);
    setSearchQuery('');
    setSortBy('featured');
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (priceRange[0] > 0 || priceRange[1] < 1000) count++;
    if (selectedBrands.length > 0) count++;
    if (selectedRatings.length > 0) count++;
    if (searchQuery) count++;
    return count;
  };

  const getDisplayName = () => {
    if (products.length > 0 && products[0].categoryDisplay) {
      return products[0].categoryDisplay;
    }
    return categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1).replace(/-/g, ' ');
  };

  if (loading) {
    return (
      <div className="elite-category-loading">
        <div className="elite-loading-spinner"></div>
        <p>Loading {getDisplayName()} products...</p>
      </div>
    );
  }

  return (
    <div className="elite-category-page">
      {/* Header Section */}
      <div className="elite-category-header">
        <div className="elite-category-container">
          <button
            onClick={() => navigate('/shop')}
            className="elite-category-back-btn"
          >
            <FaArrowLeft />
            Back to Shop
          </button>
          
          <div className="elite-category-hero">
            <h1 className="elite-category-title">
              {getDisplayName()}
            </h1>
            <p className="elite-category-subtitle">
              Discover our premium collection of {getDisplayName().toLowerCase()} products
            </p>
            <div className="elite-category-stats">
              <span>{filteredProducts.length} products</span>
              <span className="elite-stat-separator">•</span>
              <span>Curated selection</span>
            </div>
          </div>
        </div>
      </div>

      <div className="elite-category-container">
        <div className="elite-category-content">
          {/* Filters Sidebar */}
          <div className={`elite-filters-sidebar ${isFilterOpen ? 'elite-filters-open' : ''}`}>
            <div className="elite-filters-header">
              <h3>Filters</h3>
              <button 
                className="elite-clear-filters"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            </div>

            {/* Search Filter */}
            <div className="elite-filter-group">
              <label className="elite-filter-label">Search Products</label>
              <div className="elite-search-box">
                <FaSearch className="elite-search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="elite-search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="elite-clear-search"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>

            {/* Price Filter */}
            <div className="elite-filter-group">
              <label className="elite-filter-label">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="elite-price-slider">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="elite-slider"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="elite-slider"
                />
              </div>
              <div className="elite-price-labels">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="elite-filter-group">
              <label className="elite-filter-label">Brands</label>
              <div className="elite-checkbox-group">
                {brands.map(brand => (
                  <label key={brand} className="elite-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                      className="elite-checkbox"
                    />
                    <span className="elite-checkbox-custom"></span>
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="elite-filter-group">
              <label className="elite-filter-label">Customer Rating</label>
              <div className="elite-rating-filters">
                {ratings.map(rating => (
                  <button
                    key={rating}
                    className={`elite-rating-filter ${selectedRatings.includes(rating) ? 'elite-rating-active' : ''}`}
                    onClick={() => handleRatingToggle(rating)}
                  >
                    <div className="elite-rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < rating ? 'elite-star-filled' : 'elite-star-empty'}
                        />
                      ))}
                    </div>
                    <span>& up</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="elite-products-section">
            {/* Toolbar */}
            <div className="elite-products-toolbar">
              <div className="elite-toolbar-left">
                <button
                  className="elite-filter-toggle"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <FaFilter />
                  Filters
                  {getActiveFiltersCount() > 0 && (
                    <span className="elite-filter-count">
                      {getActiveFiltersCount()}
                    </span>
                  )}
                </button>
                
                <span className="elite-products-count">
                  {filteredProducts.length} products found
                </span>
              </div>

              <div className="elite-toolbar-right">
                <div className="elite-view-toggle">
                  <button
                    className={`elite-view-btn ${viewMode === 'grid' ? 'elite-view-active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <FaTh />
                  </button>
                  <button
                    className={`elite-view-btn ${viewMode === 'list' ? 'elite-view-active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <FaList />
                  </button>
                </div>

                <div className="elite-sort-select">
                  <FaSort className="elite-sort-icon" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="elite-sort-dropdown"
                  >
                    <option value="featured">Featured</option>
                    <option value="name">Name A-Z</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="elite-no-products">
                <div className="elite-no-products-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button
                  onClick={clearAllFilters}
                  className="elite-clear-filters-btn"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`elite-products-${viewMode}`}>
                {filteredProducts.map(product => (
                  <div key={product.id} className="elite-product-card">
                    <div className="elite-product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="elite-product-actions">
                        <button
                          className={`elite-wishlist-btn ${wishlistItems.some(item => item.id === product.id) ? 'elite-in-wishlist' : ''}`}
                          onClick={() => toggleWishlist(product)}
                        >
                          {wishlistItems.some(item => item.id === product.id) ? 
                            <FaHeart /> : <FaRegHeart />
                          }
                        </button>
                        <button
                          className="elite-cart-btn"
                          onClick={() => addToCart({ ...product, quantity: 1 })}
                        >
                          <FaShoppingCart />
                        </button>
                      </div>
                      {product.originalPrice && (
                        <div className="elite-discount-badge">
                          <FaTag />
                          Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>

                    <div className="elite-product-info">
                      <span className="elite-product-category">
                        {product.categoryDisplay}
                      </span>
                      <h3 className="elite-product-name">{product.name}</h3>
                      
                      <div className="elite-product-rating">
                        <div className="elite-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < Math.floor(product.rating) ? 'elite-star-filled' : 'elite-star-empty'}
                            />
                          ))}
                        </div>
                        <span>({product.rating})</span>
                      </div>

                      <div className="elite-product-price">
                        <span className="elite-current-price">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="elite-original-price">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <p className="elite-product-description">
                        {product.description}
                      </p>

                      <button
                        className="elite-add-to-cart"
                        onClick={() => addToCart({ ...product, quantity: 1 })}
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div 
          className="elite-filter-overlay"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Category;