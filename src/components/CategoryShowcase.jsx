import React from 'react';
import Category from './Category';
import SectionTitle from './SectionTitle';
import category1 from '../images/category-1.jpg';
import category2 from '../images/category-2.jpg';
import category3 from '../images/category-3.jpg';
import category4 from '../images/category-4.jpg';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Smart Bulb",
      image: category1,
      description: "Illuminate your home with intelligent lighting solutions",
      buttonText: "Explore Smart Bulbs"
    },
    {
      id: 2,
      name: "Video Doorbell",
      image: category2,
      description: "See who's at your door from anywhere with smart security",
      buttonText: "Explore Doorbells"
    },
    {
      id: 3,
      name: "Smart Electronics",
      image: category3,
      description: "Cutting-edge electronics for modern living",
      buttonText: "Explore Electronics"
    },
    {
      id: 4,
      name: "Smart Appliances",
      image: category4,
      description: "Transform your home with intelligent appliances",
      buttonText: "Explore Appliances"
    }
  ];

  return (
    <div className="mb-20">
      <SectionTitle
        title="Shop by Category"
        subtitle="Discover our curated collection of smart home essentials"
        alignment="center"
        showLine={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;
