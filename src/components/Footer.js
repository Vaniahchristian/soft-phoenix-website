import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">SoftPheonix</h3>
          <p className="text-gray-300 mb-4">
            Empowering businesses with innovative POS solutions and creating opportunities for growth.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/256756128506" className="hover:text-green-400 transition-colors">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
            <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
            <li><a href="#download" className="text-gray-300 hover:text-white transition-colors">Download POS</a></li>
            <li><a href="#agent-download" className="text-gray-300 hover:text-white transition-colors">Become an Agent</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <a href="tel:+256756128506" className="text-gray-300 hover:text-white transition-colors">+256 756 128506</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <a href="tel:+256780732425" className="text-gray-300 hover:text-white transition-colors">+256 780 732425</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="mailto:info@softpheonix.com" className="text-gray-300 hover:text-white transition-colors">info@softpheonix.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span className="text-gray-300">Kampala, Uganda</span>
            </li>
          </ul>
        </div>

        {/* Download Apps */}
        <div>
          <h3 className="text-xl font-bold mb-4">Download Apps</h3>
          <div className="space-y-3">
            <a href="/trademate-pos.apk" download className="block">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Trade Mate POS
              </button>
            </a>
            <a href="/trademate-agent.apk" download className="block">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                Trade Mate Agent
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SoftPheonix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
