import React from 'react';
import ProductList from '../components/ProductList';
import CategoryShowcase from '../components/CategoryShowcase';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';
import SpecialOffers from '../components/SpecialOffers';
import { gadgets } from '../data/gadgets';
import { useCart } from '../context/CartContext';

const HomePage = ({ wishlistItems, toggleWishlist }) => {
  
  const featuredGadgets = gadgets.slice(0, 4);
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      
      <Banner />

     

      <CategoryShowcase />

      <div className="mb-16">
        <SectionTitle
          title="Featured Gadgets"
          subtitle="Discover our handpicked selection of premium tech products"
          alignment="center"
          showLine={true}
        />
        <ProductList
          products={featuredGadgets}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
        />
      </div>

      <div className="mb-16">
        <SectionTitle
          title="Special Offers"
          subtitle="Limited time deals on our most popular products. Don't miss out!"
          alignment="center"
          showLine={true}
        />
        <SpecialOffers addToCart={addToCart} products={gadgets} />
      </div>
    </div>
  );
};

export default HomePage;