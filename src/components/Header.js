import React, { useState, useEffect } from 'react';
import { FaDownload, FaUserTie, FaBars, FaTimes } from 'react-icons/fa';
import '../App.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#products", label: "Products" },
    { href: "#download", label: "Download POS", icon: <FaDownload className="inline-block" /> },
    { href: "#agent-download", label: "Become Agent", icon: <FaUserTie className="inline-block" /> },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 py-8 ${
        isScrolled 
          ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-gray-800 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            {/* Add your logo image here */}
            <h1 className="text-2xl font-bold text-white">
              <span className="text-blue-400">Soft</span>Pheonix
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1 group"
                  >
                    {link.icon && <span className="group-hover:scale-110 transition-transform">{link.icon}</span>}
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <nav className="pt-4 pb-6">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-400 transition-colors flex items-center space-x-2 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon && <span>{link.icon}</span>}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
