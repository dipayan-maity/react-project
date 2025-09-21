import React from 'react';

const Category = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white">
      {/* Category Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      {/* Category Content - Placed below the image */}
      <div className="p-6">
        <h3 className="text-2xl text-center font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {category.name}
        </h3>
       
      </div>
    </div>
  );
};

export default Category;