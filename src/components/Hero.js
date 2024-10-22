import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white text-center p-12">
      <h2 className="text-4xl font-bold">Welcome to SoftPheonix</h2>
      <p className="mt-4 text-lg">
        Your all-in-one software solutions provider. Explore our latest offering, <span className="font-bold">Trade Mate</span>, a mobile point-of-sale system.
      </p>
      <a href="#download">
        <button className="mt-6 bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
          Download Trade Mate
        </button>
      </a>
    </section>
  );
};

export default Hero;
