import React from 'react';
import { FaShoppingCart, FaUtensils, FaMobileAlt } from 'react-icons/fa';
import restaurantPOS from '../assets/restaurant-pos.jpg';
import supermarketPOS from '../assets/supermarket-pos.jpg';
import tradeMate from '../assets/trade-mate.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Restaurant POS",
      image: restaurantPOS,
      icon: <FaUtensils className="text-3xl text-blue-500" />,
      description: "Efficient systems for restaurant management.",
      features: [
        "Table management",
        "Order tracking",
        "Kitchen display system",
        "Inventory management"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Supermarket POS",
      image: supermarketPOS,
      icon: <FaShoppingCart className="text-3xl text-green-500" />,
      description: "Reliable solutions for supermarkets.",
      features: [
        "Barcode scanning",
        "Inventory tracking",
        "Multi-terminal support",
        "Sales analytics"
      ],
      color: "green"
    },
    {
      id: 3,
      title: "Trade Mate",
      image: tradeMate,
      icon: <FaMobileAlt className="text-3xl text-purple-500" />,
      description: "The latest mobile point-of-sale app.",
      features: [
        "Mobile payments",
        "Cloud sync",
        "Offline mode",
        "Real-time reports"
      ],
      color: "purple"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-4">Our Products</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our range of innovative POS solutions designed to meet your business needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" 
                />
                <div className={`absolute inset-0 bg-${product.color}-500/10 group-hover:bg-${product.color}-500/20 transition-colors duration-300`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {product.icon}
                  <h4 className="text-2xl font-bold">{product.title}</h4>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <svg className={`w-4 h-4 mr-2 text-${product.color}-500`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <div className="mt-6">
                  <button 
                    className={`w-full bg-${product.color}-500 text-white py-2 px-4 rounded-lg hover:bg-${product.color}-600 transition-colors duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to transform your business?</p>
          <a 
            href="#download" 
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
