import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { CartProvider, useCart } from "./context/CartContext.jsx";
import { ShopProvider } from "./context/ShopContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import HomePage from "./pages/Home.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CategoryList from "./pages/CategoryList.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Blog from "./pages/Blog.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import Contact from "./pages/Contact.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const { addToCart: addToCartContext } = useCart(); // Use cart context
  const location = useLocation();

  const getHeroContent = (pathname) => {
    const content = {
      '/shop': { badge: 'Shop Now', headline: 'Explore Our Collection', tagline: 'Find the perfect products for your needs' },
      '/product': { badge: 'Product Details', headline: 'Discover the Details', tagline: 'Learn more about this amazing product' },
      '/cart': { badge: 'Your Cart', headline: 'Review Your Items', tagline: 'Complete your purchase securely' },
      '/checkout': { badge: 'Checkout', headline: 'Secure Checkout', tagline: 'Finalize your order' },
      '/wishlist': { badge: 'Wishlist', headline: 'Your Wishlist', tagline: 'Items you love' },
      '/thank-you': { badge: 'Thank You', headline: 'Order Confirmed', tagline: 'Your order has been successfully placed' },
      '/about': { badge: 'About Us', headline: 'Learn More About Our Story', tagline: 'Discover what drives our passion for innovation' },
      '/blog': { badge: 'Our Blog', headline: 'Latest Insights & Updates', tagline: 'Stay informed with our latest articles' },
      '/contact': { badge: 'Get In Touch', headline: 'Contact Our Team', tagline: 'We\'re here to help and answer your questions' }
      
    };
    // Check for exact match or prefix match for dynamic routes
    if (content[pathname]) return content[pathname];
    if (pathname.startsWith('/product/')) return content['/product'];
    // Removed hero for category pages to avoid double banner
    return null;
  };

  const heroContent = getHeroContent(location.pathname);

  const notify = (message) => toast(message);

  const addToCart = (product) => {
    // Use the context addToCart function
    addToCartContext(product);

    // Remove from wishlist if already in cart
    if (wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      notify(`${product.name} removed from wishlist`);
    }
  };

  const toggleWishlist = (product) => {
    if (wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
      notify(`${product.name} removed from wishlist`);
    } else {
      setWishlistItems(prev => [...prev, product]);
      notify(`${product.name} added to wishlist`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        wishlistCount={wishlistItems.length}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <div className="flex-grow">
        {heroContent && (
          <Hero
            badge={heroContent.badge}
            headline={heroContent.headline}
            tagline={heroContent.tagline}
          />
        )}

        <Routes>
        <Route
          path="/"
          element={
            <HomePage
              wishlistItems={wishlistItems}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              wishlistItems={wishlistItems}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProductDetails
              wishlistItems={wishlistItems}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/category"
          element={<CategoryList />}
        />
        <Route
          path="/category/:categoryName"
          element={
            <Category
              wishlistItems={wishlistItems}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      </div>

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
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </ShopProvider>
  );
}