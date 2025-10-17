import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart, toggleWishlist, wishlistItems = [], viewProduct }) => {
  return (
    <div className="premium-products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          isInWishlist={wishlistItems.some((item) => item.id === product.id)}
          viewProduct={viewProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
