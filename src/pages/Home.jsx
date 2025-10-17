import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import CyberMondayBanner from '../components/CyberMondayBanner.jsx';
import WhyChoose from '../components/WhyChoose';
import SectionTitle from '../components/SectionTitle';
import OfferSection from '../components/SpecialOffers';
import ProductFeatures from '../components/ProductFeatures';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from './Contact';
import CategoryShowcase from '../components/CategoryShowcase';
import DressCollection from '../components/DressCollection';
import CustomerService from '../components/CustomerService';
import { gadgets } from '../data/gadgets';
import { useCart } from '../context/CartContext';
import FeaturedProducts from '../components/FeaturedProducts'; // adjust path if needed

const computeCategories = (gadgets) => {
  const categoryMap = {};

  gadgets.forEach(gadget => {
    if (!categoryMap[gadget.category]) {
      categoryMap[gadget.category] = {
        count: 0,
        ratings: [],
        onSale: 0
      };
    }
    categoryMap[gadget.category].count++;
    if (!isNaN(gadget.rating)) categoryMap[gadget.category].ratings.push(parseFloat(gadget.rating));
    if (gadget.onSale) categoryMap[gadget.category].onSale++;
  });

  const categories = Object.keys(categoryMap).map((cat, idx) => {
    const data = categoryMap[cat];
    const avgRating = data.ratings.length > 0 ? (data.ratings.reduce((a,b)=>a+b,0) / data.ratings.length).toFixed(1) : 'N/A';
    const salePercent = data.onSale > 0 ? Math.round((data.onSale / data.count) * 100) : 0;

    // Map category to icon and image
    const getIcon = (category) => {
      const lowerCat = category.toLowerCase();
      if (lowerCat.includes('headphones') || lowerCat.includes('audio')) return <i className="fas fa-headphones"></i>;
      if (lowerCat.includes('watch')) return <i className="fas fa-clock"></i>;
      if (lowerCat.includes('dress') || lowerCat.includes('fashion')) return <i className="fas fa-tshirt"></i>;
      if (lowerCat.includes('shoe')) return <i className="fas fa-shoe-prints"></i>;
      if (lowerCat.includes('accessories')) return <i className="fas fa-gem"></i>;
      return <i className="fas fa-star"></i>;
    };

    const getImage = (category) => {
      const lowerCat = category.toLowerCase();
      if (lowerCat.includes('headphones')) return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
      if (lowerCat.includes('watch')) return "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
      if (lowerCat.includes('dress')) return "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
      if (lowerCat.includes('shoe')) return "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
      if (lowerCat.includes('accessories')) return "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
      return "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
    };

    return {
      id: idx + 1,
      category: cat.toLowerCase().replace(/\s+/g, '-'),
      icon: getIcon(cat),
      image: getImage(cat),
      title: cat,
      description: `Explore our ${cat} collection with premium quality products.`,
      stats: [
        { value: "4", label: "Products" },
        { value: "4.5★", label: "Rating" },
        { value: "20%", label: "Sale" },
      ],
      linkText: `Shop ${cat}`,
    };
  });

  return categories;
};

const HomePage = ({ wishlistItems, toggleWishlist }) => {
  const featuredGadgets = gadgets.slice(0, 4);
  const categories = computeCategories(gadgets);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="home-section">
      <Banner />

      <div className="why-choose-section py-16">
        <SectionTitle title="Why Choose Us" subtitle="Discover why our collection stands out from the rest." alignment="center" showLine={true} />
        <WhyChoose />
      </div>

      <div className="category-showcase-section py-16">
        <SectionTitle title="Shop by Category" subtitle="Explore our diverse range of premium products." alignment="center" showLine={true} />
        <CategoryShowcase categories={categories} />
      </div>

      <div className="featured-products-section py-16">
        <SectionTitle title="Featured Products" subtitle="Handpicked items just for you." alignment="center" showLine={true} />
        <FeaturedProducts
          products={gadgets}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
          viewProduct={viewProduct}
        />
      </div>

      {/* Special Offer Section */}
      <div className="special-offers-section py-16">
        <div className='container'>
        <SectionTitle title="Special Offers" subtitle="Limited time deals you can't miss." alignment="center" showLine={true} />
        <OfferSection gadgetId={10} />
        </div>
      </div>

      <div className="cyber-monday-banner-section py-16">

        <CyberMondayBanner />
      </div>

      <div className="shoe-products-section py-16">
        <SectionTitle title="Shoe Collection" subtitle="Step into style with our premium footwear." alignment="center" showLine={true} />
        <FeaturedProducts
          products={gadgets.filter(product => product.category === 'shoes')}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
          viewProduct={viewProduct}
          disableFilters={true}
        />
      </div>

      <div className="testimonials-section py-16">
        <div className='container'>
        <SectionTitle title="What Our Customers Say" subtitle="Real reviews from satisfied shoppers." alignment="center" showLine={true} />
        <Testimonials />
        </div>
      </div>

      <div className="dress-collection-section py-16">
        <SectionTitle title="Fashion Collection" subtitle="Discover the latest trends in fashion." alignment="center" showLine={true} />
        <DressCollection wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} />
      </div>

      <div className="customer-service-section py-16">
        <CustomerService />
      </div>
    </div>
  );
};

export default HomePage;
