import React from 'react';
import heroImage from '../assets/hero-image.jpg';
import first from '../assets/1.jpg';
import second from '../assets/2.jpg';
import { FaDownload, FaUserTie, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    heroImage, // your existing hero image
    // Add more image imports and paths here
    first,
    second,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images[currentImageIndex]} 
          alt={`Hero Background ${currentImageIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all z-20"
        >
          <FaChevronLeft className="text-2xl" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all z-20"
        >
          <FaChevronRight className="text-2xl" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-blue-400">SoftPheonix</span>
          </h1>
          
          {/* Subheading with Typing Effect */}
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 animate-fade-in-delay-1">
            Empowering businesses with{' '}
            <span className="font-bold text-blue-400 typing-text">
              Trade Mate POS
            </span>
          </p>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Join our network of successful agents and earn commissions while helping businesses grow
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <a href="#download" className="group">
              <button className="w-full sm:w-auto bg-blue-600 text-white py-4 px-8 rounded-full 
                               flex items-center justify-center gap-3 
                               hover:bg-blue-700 transform hover:scale-105 
                               transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <FaDownload className="text-xl group-hover:rotate-12 transition-transform" />
                <span>Download Trade Mate POS</span>
                <FaArrowRight className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </button>
            </a>
            
            <a href="#agent-download" className="group">
              <button className="w-full sm:w-auto bg-transparent text-white py-4 px-8 rounded-full 
                               flex items-center justify-center gap-3 
                               border-2 border-white hover:border-blue-400 hover:text-blue-400 
                               transform hover:scale-105 transition-all duration-300">
                <FaUserTie className="text-xl group-hover:rotate-12 transition-transform" />
                <span>Become an Agent</span>
                <FaArrowRight className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-delay-4">
            {[
              { label: 'Active Users', value: '1000+' },
              { label: 'Businesses', value: '500+' },
              { label: 'Agents', value: '100+' },
              { label: 'Countries', value: '3+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white/50 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>  */}


      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .typing-text {
          overflow: hidden;
          border-right: .15em solid #60A5FA;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end),
                     blink-caret .75s step-end infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 1s ease-out 0.5s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 1s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 1s ease-out 1.5s both;
        }

        .animate-fade-in-delay-4 {
          animation: fadeIn 1s ease-out 2s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
