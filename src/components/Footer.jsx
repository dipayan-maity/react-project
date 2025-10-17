// Footer.js
import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPinterest,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
  FaApplePay,
  FaGooglePay,
  FaHeart
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="els-footer">
      {/* Trust Badges - Top Section */}
      <div className="els-footer__trust-section">
        <div className="els-footer__trust-container">
          <div className="els-footer__trust-badge">
            <div className="els-footer__badge-icon-wrapper">
              <FaShippingFast className="els-footer__badge-icon" />
            </div>
            <div className="els-footer__badge-content">
              <strong>Free Shipping</strong>
              <span>On orders over $50</span>
            </div>
          </div>
          
          <div className="els-footer__trust-badge">
            <div className="els-footer__badge-icon-wrapper">
              <FaShieldAlt className="els-footer__badge-icon" />
            </div>
            <div className="els-footer__badge-content">
              <strong>Secure Payment</strong>
              <span>256-bit encryption</span>
            </div>
          </div>
          
          <div className="els-footer__trust-badge">
            <div className="els-footer__badge-icon-wrapper">
              <FaHeadset className="els-footer__badge-icon" />
            </div>
            <div className="els-footer__badge-content">
              <strong>24/7 Support</strong>
              <span>Dedicated help center</span>
            </div>
          </div>
          
          <div className="els-footer__trust-badge">
            <div className="els-footer__badge-icon-wrapper">
              <FaShieldAlt className="els-footer__badge-icon" />
            </div>
            <div className="els-footer__badge-content">
              <strong>1-Year Warranty</strong>
              <span>On all products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="els-footer__main">
        <div className="els-footer__container">
          
          {/* Brand Section */}
          <div className="els-footer__brand">
               <Link to="/" className="logo-section" >
                        <div className="logo">B</div>
                        <div className="brand-name">Boutique</div>
                      </Link>
            <p className="els-footer__brand-tagline">
              Redefining your shopping experience with premium products 
              and exceptional service.
            </p>
            <div className="els-footer__social-links">
              <a href="#" className="els-footer__social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="els-footer__social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="els-footer__social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="els-footer__social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="els-footer__social-link" aria-label="Pinterest">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="els-footer__section">
            <h3 className="els-footer__section-title">Shop</h3>
            <ul className="els-footer__links">
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/category/headphones">Headphones</Link></li>
              <li><Link to="/category/smart-watches">Smart Watches</Link></li>
              <li><Link to="/category/dresses">Dresses</Link></li>
              <li><Link to="/category/shoes">Shoes</Link></li>
              <li><Link to="/category/accessories">Accessories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="els-footer__section">
            <h3 className="els-footer__section-title">Support</h3>
            <ul className="els-footer__links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/warranty">Warranty</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="els-footer__section">
            <h3 className="els-footer__section-title">Company</h3>
            <ul className="els-footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/affiliates">Affiliate Program</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="els-footer__section els-footer__newsletter-section">
            <h3 className="els-footer__section-title">Stay Connected</h3>
            <div className="els-footer__contact-info">
              <div className="els-footer__contact-item">
                <div className="els-footer__contact-icon-wrapper">
                  <FaPhone className="els-footer__contact-icon" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="els-footer__contact-item">
                <div className="els-footer__contact-icon-wrapper">
                  <FaEnvelope className="els-footer__contact-icon" />
                </div>
                <span>support@eliteshop.com</span>
              </div>
              <div className="els-footer__contact-item">
                <div className="els-footer__contact-icon-wrapper">
                  <FaMapMarkerAlt className="els-footer__contact-icon" />
                </div>
                <span>123 Commerce St, Tech City</span>
              </div>
            </div>

        
          </div>

        </div>
      </div>

      {/* Payment Methods */}
      <div className="els-footer__payment-section">
        <div className="els-footer__payment-container">
          <span className="els-footer__payment-label">We Accept:</span>
          <div className="els-footer__payment-icons">
            <FaCcVisa className="els-footer__payment-icon" />
            <FaCcMastercard className="els-footer__payment-icon" />
            <FaCcPaypal className="els-footer__payment-icon" />
            <FaCcAmazonPay className="els-footer__payment-icon" />
            <FaApplePay className="els-footer__payment-icon" />
            <FaGooglePay className="els-footer__payment-icon" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="els-footer__bottom">
        <div className="els-footer__bottom-container">
          <div className="els-footer__copyright">
            <p>
              &copy; 2024 EliteShop. Made with <FaHeart className="els-footer__heart-icon" /> All rights reserved.
            </p>
          </div>
          <div className="els-footer__legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;