import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import HomePage from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import ShopPage from './pages/ShopPage.jsx';
import Contact from './pages/Contact.jsx';
import Category from './pages/Category.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const toggleWishlist = (product) => {
    if (wishlistItems.some(item => item.id === product.id)) {
      // remove from wishlist
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
    } else {
      // add to wishlist
      setWishlistItems(prev => [...prev, product]);
    }
  };

  return (
    <CartProvider>
      <Router>
        <Header onCartClick={handleCartClick} />
        <CartDrawer isOpen={isCartOpen} onClose={handleCartClose} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<ShopPage toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:productId" element={<ProductDetails toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </CartProvider>
  );
}
