import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { gadgets } from '../data/gadgets';
import { useCart } from '../context/CartContext';
import { FaSlidersH, FaTh, FaList, FaTimes, FaStar, FaFilter } from 'react-icons/fa';

const ShopPage = ({ wishlistItems, toggleWishlist }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  // Filter states
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 500],
    rating: 0,
    color: [],
    onSale: false,
    featured: false,
    inStock: true
  });
  
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  // Extract unique values for filters
  const filterOptions = useMemo(() => {
    const categories = [...new Set(gadgets.map(product => product.categoryDisplay))];
    const colors = [...new Set(gadgets.flatMap(product => 
      product.specs?.color?.split('/').map(c => c.trim()) || ['N/A']
    ))];
    const maxPrice = Math.max(...gadgets.map(p => p.price));
    
    return { categories, colors, maxPrice };
  }, []);

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let result = gadgets.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.categoryDisplay)) {
        return false;
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      // Color filter
      if (filters.color.length > 0) {
        const productColors = product.specs?.color?.split('/').map(c => c.trim()) || [];
        if (!filters.color.some(color => productColors.includes(color))) {
          return false;
        }
      }

      // Sale filter
      if (filters.onSale && !product.onSale) {
        return false;
      }

      // Featured filter
      if (filters.featured && !product.featured) {
        return false;
      }

      // Stock filter (assuming all are in stock for now)
      if (!filters.inStock) {
        return false;
      }

      return true;
    });

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery]);

  // Update active filters display
  useEffect(() => {
    const active = [];
    if (filters.category.length > 0) {
      active.push(`Category: ${filters.category.join(', ')}`);
    }
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < filterOptions.maxPrice) {
      active.push(`Price: $${filters.priceRange[0]} - $${filters.priceRange[1]}`);
    }
    if (filters.rating > 0) {
      active.push(`Rating: ${filters.rating}+ stars`);
    }
    if (filters.color.length > 0) {
      active.push(`Color: ${filters.color.join(', ')}`);
    }
    if (filters.onSale) {
      active.push('On Sale');
    }
    if (filters.featured) {
      active.push('Featured');
    }
    setActiveFilters(active);
  }, [filters, filterOptions.maxPrice]);

  // Filter handlers
  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category]
    }));
  };

  const handleColorChange = (color) => {
    setFilters(prev => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter(c => c !== color)
        : [...prev.color, color]
    }));
  };

  const handlePriceChange = (min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [min, max]
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters(prev => ({
      ...prev,
      rating: prev.rating === rating ? 0 : rating
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 500],
      rating: 0,
      color: [],
      onSale: false,
      featured: false,
      inStock: true
    });
    setSearchQuery('');
  };

  const removeFilter = (filterIndex) => {
    const filterText = activeFilters[filterIndex];
    if (filterText.includes('Category:')) {
      setFilters(prev => ({ ...prev, category: [] }));
    } else if (filterText.includes('Price:')) {
      setFilters(prev => ({ ...prev, priceRange: [0, 500] }));
    } else if (filterText.includes('Rating:')) {
      setFilters(prev => ({ ...prev, rating: 0 }));
    } else if (filterText.includes('Color:')) {
      setFilters(prev => ({ ...prev, color: [] }));
    } else if (filterText === 'On Sale') {
      setFilters(prev => ({ ...prev, onSale: false }));
    } else if (filterText === 'Featured') {
      setFilters(prev => ({ ...prev, featured: false }));
    }
  };

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="sophisticated-shop-page">
      {/* Hero Section */}
   

      <div className="shop-container">
        {/* Mobile Filter Header */}
        <div className="mobile-filter-header">
          <button 
            className="mobile-filter-toggle"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <FaSlidersH />
            Filters
          </button>
          <div className="mobile-results">
            {filteredProducts.length} products found
          </div>
        </div>

        <div className="shop-layout">
          {/* Sidebar Filters */}
          <div className={`filter-sidebar ${showMobileFilters ? 'mobile-visible' : ''}`}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button 
                className="clear-filters"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
              <button 
                className="close-mobile-filters"
                onClick={() => setShowMobileFilters(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* Search Filter */}
            <div className="filter-section">
              <h4>Search</h4>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="filter-section">
              <h4>Category</h4>
              <div className="filter-options">
                {filterOptions.categories.map(category => (
                  <label key={category} className="filter-option">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <span className="checkmark"></span>
                    {category}
                    <span className="option-count">
                      ({gadgets.filter(p => p.categoryDisplay === category).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="price-range">
                <div className="price-values">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={filterOptions.maxPrice}
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange[1])}
                  className="range-slider"
                />
                <input
                  type="range"
                  min="0"
                  max={filterOptions.maxPrice}
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
                  className="range-slider"
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-section">
              <h4>Customer Rating</h4>
              <div className="filter-options">
                {[4, 3, 2, 1].map(rating => (
                  <label key={rating} className="filter-option rating-option">
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.rating === rating}
                      onChange={() => handleRatingChange(rating)}
                    />
                    <span className="checkmark"></span>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < rating ? 'star-filled' : 'star-empty'}
                        />
                      ))}
                    </div>
                    <span>& above</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="filter-section">
              <h4>Color</h4>
              <div className="color-options">
                {filterOptions.colors.slice(0, 10).map(color => (
                  <label key={color} className="color-option">
                    <input
                      type="checkbox"
                      checked={filters.color.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                    <span 
                      className="color-swatch"
                      style={{ 
                        backgroundColor: color.toLowerCase(),
                        border: color.toLowerCase() === 'white' ? '1px solid #e5e7eb' : 'none'
                      }}
                    ></span>
                    {color}
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Filters */}
            <div className="filter-section">
              <h4>Other Filters</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.onSale}
                    onChange={(e) => setFilters(prev => ({ ...prev, onSale: e.target.checked }))}
                  />
                  <span className="checkmark"></span>
                  On Sale
                </label>
                <label className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) => setFilters(prev => ({ ...prev, featured: e.target.checked }))}
                  />
                  <span className="checkmark"></span>
                  Featured Products
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="products-main">
            {/* Top Bar */}
            <div className="products-top-bar">
              <div className="results-info">
                <span className="results-count">
                  {filteredProducts.length} of {gadgets.length} products
                </span>
                {activeFilters.length > 0 && (
                  <div className="active-filters">
                    {activeFilters.map((filter, index) => (
                      <span key={index} className="active-filter-tag">
                        {filter}
                        <button onClick={() => removeFilter(index)}>
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="view-controls">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                
                <div className="view-toggle">
                  <button 
                    className={viewMode === 'grid' ? 'active' : ''}
                    onClick={() => setViewMode('grid')}
                  >
                    <FaTh />
                  </button>
                  <button 
                    className={viewMode === 'list' ? 'active' : ''}
                    onClick={() => setViewMode('list')}
                  >
                    <FaList />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div className={`products-container ${viewMode}-view`}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    toggleWishlist={toggleWishlist}
                    isInWishlist={wishlistItems.some(item => item.id === product.id)}
                    viewProduct={viewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <FaFilter size={48} />
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onClick={clearAllFilters} className="clear-filters-btn">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ShopPage;