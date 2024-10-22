import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-12 bg-gray-100">
      <h3 className="text-3xl font-bold text-center">Key Features</h3>
      <div className="flex justify-around mt-8">
        <div className="p-4 bg-white rounded shadow-md text-center w-1/3">
          <h4 className="text-xl font-bold">POS Systems</h4>
          <p>Streamlined solutions for restaurants and supermarkets.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md text-center w-1/3">
          <h4 className="text-xl font-bold">Web Apps</h4>
          <p>Custom-built, reliable web applications for your business.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md text-center w-1/3">
          <h4 className="text-xl font-bold">Mobile Apps</h4>
          <p>Innovative and user-friendly mobile solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
