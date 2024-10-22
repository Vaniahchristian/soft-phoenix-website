import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">SoftPheonix</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#download" className="hover:underline">Download</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
