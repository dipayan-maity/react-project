import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCalendar,
  FaUser,
  FaClock,
  FaArrowRight,
  FaTag,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaShare,
  FaBookmark,
  FaHeart,
  FaComment
} from 'react-icons/fa';

const ElegantBlog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of E-Commerce: Trends to Watch in 2024",
      excerpt: "Discover how artificial intelligence, augmented reality, and sustainable practices are shaping the future of online shopping experiences.",
      content: "The e-commerce landscape is evolving at an unprecedented pace. With the integration of AI-powered personalization and AR try-on features, businesses are creating more immersive shopping experiences. Sustainability is no longer an option but a necessity, with consumers demanding eco-friendly packaging and transparent supply chains.",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["E-Commerce", "Technology", "Trends"],
      featured: true,
      likes: 142,
      comments: 28
    },
    {
      id: 2,
      title: "Sustainable Fashion: Building an Eco-Conscious Wardrobe",
      excerpt: "Learn how to make mindful fashion choices that benefit both your style and the planet through sustainable practices.",
      content: "Sustainable fashion goes beyond just buying organic cotton. It's about understanding the entire lifecycle of clothing, from ethical manufacturing to proper disposal. Discover brands that prioritize fair wages, eco-friendly materials, and circular fashion models.",
      author: "Marcus Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Fashion", "Sustainability", "Lifestyle"],
      featured: true,
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: "Tech Gadgets That Will Revolutionize Your Daily Routine",
      excerpt: "Explore the latest smart devices and gadgets designed to enhance productivity and simplify everyday tasks.",
      content: "From smart home assistants that learn your preferences to wearable tech that monitors your health, technology is becoming increasingly integrated into our daily lives. We review the most innovative gadgets that are worth the investment.",
      author: "Alex Thompson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Technology", "Gadgets", "Innovation"],
      featured: false,
      likes: 156,
      comments: 42
    },
    {
      id: 4,
      title: "The Art of Minimalist Living: Less is More",
      excerpt: "Discover how embracing minimalism can lead to greater clarity, purpose, and fulfillment in your personal and professional life.",
      content: "Minimalism isn't about deprivation; it's about intentionality. By focusing on what truly matters, you can reduce stress, save money, and create space for meaningful experiences. Learn practical tips for decluttering your home and mind.",
      author: "Emma Wilson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Lifestyle", "Minimalism", "Wellness"],
      featured: false,
      likes: 203,
      comments: 31
    },
    {
      id: 5,
      title: "Smart Home Integration: Creating Your Connected Living Space",
      excerpt: "Transform your home into a smart, efficient living space with the latest home automation technologies and systems.",
      content: "Smart home technology has evolved from simple voice commands to comprehensive ecosystems that learn your habits and preferences. We break down the essential components for creating a seamless smart home experience that enhances security, energy efficiency, and convenience.",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "technology",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Smart Home", "Technology", "Automation"],
      featured: false,
      likes: 178,
      comments: 29
    },
    {
      id: 6,
      title: "The Psychology of Color in Branding and Marketing",
      excerpt: "Understand how color choices influence consumer behavior and perception in the competitive world of branding.",
      content: "Colors evoke specific emotions and associations that can significantly impact brand recognition and purchasing decisions. Learn how successful brands use color psychology to communicate their values and connect with their target audience on a deeper level.",
      author: "Lisa Park",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Marketing", "Psychology", "Branding"],
      featured: false,
      likes: 134,
      comments: 18
    }
  ];

  const categories = [
    { name: 'all', label: 'All Articles', count: blogPosts.length },
    { name: 'ecommerce', label: 'E-Commerce', count: blogPosts.filter(post => post.category === 'ecommerce').length },
    { name: 'fashion', label: 'Fashion', count: blogPosts.filter(post => post.category === 'fashion').length },
    { name: 'technology', label: 'Technology', count: blogPosts.filter(post => post.category === 'technology').length },
    { name: 'lifestyle', label: 'Lifestyle', count: blogPosts.filter(post => post.category === 'lifestyle').length },
    { name: 'business', label: 'Business', count: blogPosts.filter(post => post.category === 'business').length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="elegant-blog">
      {/* Hero Section */}
 

      <div className="blog-container">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="featured-section">
            <div className="section-header">
              <h2>Featured Stories</h2>
              <p>Curated content worth your attention</p>
            </div>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-card">
                  <div className="featured-image">
                    <img src={post.image} alt={post.title} />
                    <div className="featured-badge">Featured</div>
                  </div>
                  <div className="featured-content">
                    <div className="post-meta">
                      <span className="meta-item">
                        <FaCalendar />
                        {formatDate(post.date)}
                      </span>
                      <span className="meta-item">
                        <FaUser />
                        {post.author}
                      </span>
                      <span className="meta-item">
                        <FaClock />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">
                          <FaTag />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="post-actions">
                      <button className="action-btn">
                        <FaHeart />
                        {post.likes}
                      </button>
                      <button className="action-btn">
                        <FaComment />
                        {post.comments}
                      </button>
                      <button className="action-btn">
                        <FaBookmark />
                      </button>
                      <button className="action-btn">
                        <FaShare />
                      </button>
                    </div>
                    <Link to={`/blog/${post.id}`} className="read-more-btn">
                      Read Full Story
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="blog-layout">
          {/* Main Content */}
          <main className="blog-main">
            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category.name}
                  className={`filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.label}
                  <span className="category-count">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="search-section">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="card-overlay">
                      <button className="overlay-btn">
                        <FaBookmark />
                      </button>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="post-meta">
                      <span className="meta-item">
                        <FaCalendar />
                        {formatDate(post.date)}
                      </span>
                      <span className="meta-item">
                        <FaUser />
                        {post.author}
                      </span>
                    </div>
                    
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    
                    <div className="card-footer">
                      <div className="read-time">
                        <FaClock />
                        {post.readTime}
                      </div>
                      <div className="engagement">
                        <span className="engagement-item">
                          <FaHeart />
                          {post.likes}
                        </span>
                        <span className="engagement-item">
                          <FaComment />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.id}`} className="card-link">
                      Continue Reading
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="load-more-section">
                <button className="load-more-btn">
                  Load More Articles
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="no-results">
                <div className="no-results-icon">📝</div>
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button 
                  className="reset-filters-btn"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* About Section */}
            <div className="sidebar-widget">
              <h3>About Our Blog</h3>
              <p>
                Welcome to our curated space where we share insights, trends, and stories 
                that inspire innovation and elevate everyday experiences.
              </p>
              <div className="subscribe-section">
                <h4>Stay Updated</h4>
                <p>Get the latest articles delivered to your inbox</p>
                <div className="subscribe-form">
                  <input type="email" placeholder="Enter your email" />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="sidebar-widget">
              <h3>Popular Topics</h3>
              <div className="tags-cloud">
                {['Technology', 'Fashion', 'Lifestyle', 'Business', 'Innovation', 'Sustainability', 'Design', 'Marketing'].map(tag => (
                  <span key={tag} className="cloud-tag">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="sidebar-widget">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="sidebar-cta">
              <h3>Join Our Community</h3>
              <p>Be part of our growing community of readers and thought leaders</p>
              <button className="cta-btn">Become a Contributor</button>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .elegant-blog {
          min-height: 100vh;
          background: #fefefe;
        }

        /* Hero Section */
        .blog-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80') center/cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(2px);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Main Container */
        .blog-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Featured Section */
        .featured-section {
          padding: 80px 0 40px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 300;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .section-header p {
          color: #718096;
          font-size: 1.1rem;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .featured-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .featured-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .featured-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #3b82f6;
          color: white;
          padding: 6px 16px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .featured-content {
          padding: 30px;
        }

        /* Blog Layout */
        .blog-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 50px;
          padding: 60px 0;
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 30px;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .filter-btn.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .category-count {
          font-size: 12px;
          opacity: 0.7;
        }

        /* Search Section */
        .search-section {
          margin-bottom: 40px;
        }

        .search-container {
          position: relative;
          max-width: 500px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          background: white;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Posts Grid */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 1px solid #f8fafc;
        }

        .blog-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .blog-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-btn {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .overlay-btn:hover {
          background: white;
          color: #3b82f6;
        }

        .card-content {
          padding: 24px;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 12px;
          color: #6b7280;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .card-excerpt {
          color: #6b7280;
          line-height: 1.5;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          font-size: 12px;
          color: #9ca3af;
        }

        .read-time, .engagement {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .engagement {
          gap: 12px;
        }

        .engagement-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: gap 0.3s ease;
        }

        .card-link:hover {
          gap: 12px;
        }

        /* Post Meta Shared */
        .post-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 12px;
          color: #6b7280;
        }

        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: #f3f4f6;
          color: #6b7280;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
        }

        .post-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 12px;
        }

        .action-btn:hover {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #3b82f6;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: #2563eb;
          gap: 12px;
        }

        /* Load More */
        .load-more-section {
          text-align: center;
          margin-top: 40px;
        }

        .load-more-btn {
          padding: 14px 32px;
          background: white;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .load-more-btn:hover {
          background: #3b82f6;
          color: white;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 80px 20px;
          color: #6b7280;
        }

        .no-results-icon {
          font-size: 4rem;
          margin-bottom: 24px;
        }

        .no-results h3 {
          color: #374151;
          margin-bottom: 12px;
        }

        .reset-filters-btn {
          margin-top: 20px;
          padding: 12px 24px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
        }

        /* Sidebar */
        .blog-sidebar {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .sidebar-widget {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #f8fafc;
        }

        .sidebar-widget h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .sidebar-widget p {
          color: #6b7280;
          line-height: 1.5;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .subscribe-section h4 {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .subscribe-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .subscribe-form input {
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
        }

        .subscribe-btn {
          padding: 12px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
        }

        .tags-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cloud-tag {
          padding: 6px 12px;
          background: #f3f4f6;
          color: #6b7280;
          border-radius: 12px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cloud-tag:hover {
          background: #3b82f6;
          color: white;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-2px);
        }

        .sidebar-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
        }

        .sidebar-cta h3 {
          color: white;
          margin-bottom: 12px;
        }

        .sidebar-cta p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
        }

        .cta-btn {
          padding: 12px 24px;
          background: white;
          color: #3b82f6;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .blog-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .posts-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }

          .category-filter {
            justify-content: center;
          }

          .hero-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .blog-container {
            padding: 0 16px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .featured-content,
          .card-content {
            padding: 20px;
          }

          .post-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default ElegantBlog;
