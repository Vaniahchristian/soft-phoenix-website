import React from 'react';

const Products = () => {
  return (
    <section id="products" className="py-12">
      <h3 className="text-3xl font-bold text-center">Our Products</h3>
      <div className="mt-8 flex justify-around">
        <div className="p-4 bg-white rounded shadow-md w-1/4 text-center">
          <h4 className="text-xl font-bold">Restaurant POS</h4>
          <p>Efficient point-of-sale systems tailored for restaurants.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md w-1/4 text-center">
          <h4 className="text-xl font-bold">Supermarket POS</h4>
          <p>Robust solutions for supermarket management.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md w-1/4 text-center">
          <h4 className="text-xl font-bold">Trade Mate</h4>
          <p>Our latest mobile point-of-sale app, Trade Mate.</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
