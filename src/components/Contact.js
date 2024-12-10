import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-700 relative overflow-hidden mx-4 md:mx-20">
      {/* Enhanced background elements 
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>*/}

      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h3>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-8 text-gray-800">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+256756128506" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      +256 756 128506
                    </a>
                    <br />
                    <a href="tel:+256780732425" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      +256 780 732425
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:namanyakarim1@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                     namanyakarim1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FaWhatsapp className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/256756128506" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      +256 756 128506
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FaTelegram className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Telegram</p>
                    <a 
                      href="https://t.me/+wIFuPD-mqnIxYmFk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 transition-colors font-semibold inline-flex items-center group"
                    >
                      Join our Telegram Group
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300 font-semibold">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours - enhanced styling */}
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">Business Hours</h4>
              <div className="space-y-3">
                <p className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-blue-600">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-blue-600">9:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-red-500">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - enhanced styling */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-semibold mb-8 text-gray-800">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
