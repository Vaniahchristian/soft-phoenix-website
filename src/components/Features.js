import React from 'react';
import { FaCashRegister, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <h3 className="text-4xl font-bold text-center mb-10">Our Core Features</h3>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center w-1/4">
          <FaCashRegister size={48} className="text-blue-500 mb-4" />
          <h4 className="text-2xl font-bold">POS Systems</h4>
          <p className="mt-2 text-gray-700 text-center">Efficient systems for restaurants and supermarkets.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center w-1/4">
          <FaLaptopCode size={48} className="text-blue-500 mb-4" />
          <h4 className="text-2xl font-bold">Web Apps</h4>
          <p className="mt-2 text-gray-700 text-center">Custom-built, reliable web solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center w-1/4">
          <FaMobileAlt size={48} className="text-blue-500 mb-4" />
          <h4 className="text-2xl font-bold">Mobile Apps</h4>
          <p className="mt-2 text-gray-700 text-center">Innovative, user-friendly mobile apps.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
