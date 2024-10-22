import React from 'react';
import restaurantPOS from '../assets/restaurant-pos.jpg';
import supermarketPOS from '../assets/supermarket-pos.jpg';
import tradeMate from '../assets/trade-mate.jpg';

const Products = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <h3 className="text-4xl font-bold text-center mb-10">Our Products</h3>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <div className="max-w-xs bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <img src={restaurantPOS} alt="Restaurant POS" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-2xl font-bold">Restaurant POS</h4>
            <p className="text-gray-700 mt-2">Efficient systems for restaurant management.</p>
          </div>
        </div>
        <div className="max-w-xs bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <img src={supermarketPOS} alt="Supermarket POS" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-2xl font-bold">Supermarket POS</h4>
            <p className="text-gray-700 mt-2">Reliable solutions for supermarkets.</p>
          </div>
        </div>
        <div className="max-w-xs bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <img src={tradeMate} alt="Trade Mate App" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="text-2xl font-bold">Trade Mate</h4>
            <p className="text-gray-700 mt-2">The latest mobile point-of-sale app.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
