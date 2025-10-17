import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import { gadgets } from '../data/gadgets';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ShopPage = ({ wishlistItems, toggleWishlist }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <main className="shop-page">
      <Banner />

      <div className="container">
        <ProductList
          products={gadgets} // All products
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlistItems={wishlistItems}
          viewProduct={viewProduct} // For product details navigation
        />
      </div>
    </main>
  );
};

export default ShopPage;
