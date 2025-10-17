import { gadgets } from '../data/gadgets.js';

/**
 * Data Manager Utility
 * Provides functions to manage and query product data
 */

export class DataManager {
  constructor() {
    this.products = gadgets;
  }

  /**
   * Get all products
   * @returns {Array} All products
   */
  getAllProducts() {
    return this.products;
  }

  /**
   * Get product by ID
   * @param {number} id - Product ID
   * @returns {Object|null} Product object or null if not found
   */
  getProductById(id) {
    return this.products.find(product => product.id === parseInt(id)) || null;
  }

  /**
   * Get products by category
   * @param {string} category - Category name (case insensitive)
   * @returns {Array} Filtered products
   */
  getProductsByCategory(category) {
    if (!category) return [];
    return this.products.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Search products by name or description
   * @param {string} query - Search query
   * @returns {Array} Filtered products
   */
  searchProducts(query) {
    if (!query) return this.products;
    const searchTerm = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.categoryDisplay.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Filter products by price range
   * @param {number} minPrice - Minimum price
   * @param {number} maxPrice - Maximum price
   * @returns {Array} Filtered products
   */
  filterByPrice(minPrice, maxPrice) {
    return this.products.filter(product => {
      const price = product.onSale ? product.price : product.originalPrice;
      return price >= minPrice && price <= maxPrice;
    });
  }

  /**
   * Filter products by brands
   * @param {Array} brands - Array of brand names
   * @returns {Array} Filtered products
   */
  filterByBrands(brands) {
    if (!brands || brands.length === 0) return this.products;
    return this.products.filter(product => brands.includes(product.brand));
  }

  /**
   * Filter products by ratings
   * @param {number} minRating - Minimum rating
   * @returns {Array} Filtered products
   */
  filterByRating(minRating) {
    return this.products.filter(product => product.rating >= minRating);
  }

  /**
   * Sort products
   * @param {Array} products - Products to sort
   * @param {string} sortBy - Sort criteria ('featured', 'name', 'price-low', 'price-high', 'rating')
   * @returns {Array} Sorted products
   */
  sortProducts(products, sortBy) {
    const sorted = [...products];

    switch (sortBy) {
      case 'featured':
        return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }

  /**
   * Get unique brands from products
   * @returns {Array} Array of unique brand names
   */
  getUniqueBrands() {
    const brands = [...new Set(this.products.map(product => product.brand).filter(Boolean))];
    return brands.sort();
  }

  /**
   * Get unique categories
   * @returns {Array} Array of unique category objects
   */
  getUniqueCategories() {
    const categories = [...new Set(this.products.map(product => product.category))];
    return categories.map(category => {
      const product = this.products.find(p => p.category === category);
      return {
        name: category,
        displayName: product.categoryDisplay,
        productCount: this.getProductsByCategory(category).length
      };
    });
  }

  /**
   * Get price range
   * @returns {Object} Object with min and max prices
   */
  getPriceRange() {
    const prices = this.products.map(product => product.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }

  /**
   * Get featured products
   * @param {number} limit - Maximum number of products to return
   * @returns {Array} Featured products
   */
  getFeaturedProducts(limit = 8) {
    return this.products.filter(product => product.featured).slice(0, limit);
  }

  /**
   * Get products on sale
   * @returns {Array} Products on sale
   */
  getSaleProducts() {
    return this.products.filter(product => product.onSale);
  }

  /**
   * Advanced filter with multiple criteria
   * @param {Object} filters - Filter object
   * @param {string} filters.category - Category name
   * @param {string} filters.search - Search query
   * @param {number} filters.minPrice - Minimum price
   * @param {number} filters.maxPrice - Maximum price
   * @param {Array} filters.brands - Array of brands
   * @param {number} filters.minRating - Minimum rating
   * @param {string} filters.sortBy - Sort criteria
   * @returns {Array} Filtered and sorted products
   */
  getFilteredProducts(filters = {}) {
    let products = [...this.products];

    // Category filter
    if (filters.category) {
      products = this.getProductsByCategory(filters.category);
    }

    // Search filter
    if (filters.search) {
      products = this.searchProducts(filters.search);
    }

    // Price filter
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      const minPrice = filters.minPrice || 0;
      const maxPrice = filters.maxPrice || Infinity;
      products = this.filterByPrice(minPrice, maxPrice);
    }

    // Brand filter
    if (filters.brands && filters.brands.length > 0) {
      products = this.filterByBrands(filters.brands);
    }

    // Rating filter
    if (filters.minRating) {
      products = this.filterByRating(filters.minRating);
    }

    // Sort
    if (filters.sortBy) {
      products = this.sortProducts(products, filters.sortBy);
    }

    return products;
  }
}

// Export singleton instance
export const dataManager = new DataManager();
