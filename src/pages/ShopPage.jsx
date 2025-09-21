import React from 'react';
import ProductList from '../components/ProductList';
import SectionTitle from '../components/SectionTitle';
import { gadgets } from '../data/gadgets';
import { useCart } from '../context/CartContext';

const ShopPage = ({ wishlistItems, toggleWishlist }) => {
  const { addToCart } = useCart();

  return (
    <div className="container">
      <SectionTitle
        title="Shop All Products"
        subtitle="Browse our complete collection of premium gadgets and accessories"
        alignment="center"
        showLine={true}
      />

      <ProductList 
        products={gadgets} 
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default ShopPage;