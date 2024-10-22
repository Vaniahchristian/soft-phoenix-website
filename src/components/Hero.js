import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Example image

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-20 flex flex-col justify-center items-center" 
      style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-blue-800/50"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold">Welcome to SoftPheonix</h2>
        <p className="mt-6 text-lg">Leading the way in point-of-sale systems and mobile solutions with <span className="font-bold">Trade Mate</span>.</p>
        <a href="#download">
          <button className="mt-8 bg-white text-blue-700 py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform">
            Download Trade Mate
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
