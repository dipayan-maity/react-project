import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = ({ onCartClick, wishlistCount = 0 }) => {
  const { cartItemCount } = useCart();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo-section" onClick={closeMobileMenu}>
            <div className="logo">B</div>
            <div className="brand-name">Boutique</div>
          </Link>
          
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/category" className="nav-link">Category</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <div className="action-buttons">
            <div className="icon-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icon-button">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="icon-button" onClick={() => navigate('/wishlist')}>
              <i className="fa-solid fa-heart"></i>
              {wishlistCount > 0 && <div className="wishlist-count">{wishlistCount}</div>}
            </div>
            <div className="icon-button" onClick={onCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItemCount > 0 && <div className="cart-count">{cartItemCount}</div>}
            </div>
          </div>
          
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </div>
        </div>
        
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/shop" className="mobile-nav-link" onClick={closeMobileMenu}>Shop</Link>
            <Link to="/category" className="mobile-nav-link" onClick={closeMobileMenu}>Category</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
            <Link to="/blog" className="mobile-nav-link" onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
          </nav>
          
          <div className="mobile-actions">
            <div className="icon-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icon-button">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="icon-button" onClick={() => navigate('/wishlist')}>
              <i className="fa-solid fa-heart"></i>
              {wishlistCount > 0 && <div className="wishlist-count">{wishlistCount}</div>}
            </div>
            <div className="icon-button" onClick={onCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItemCount > 0 && <div className="cart-count">{cartItemCount}</div>}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;