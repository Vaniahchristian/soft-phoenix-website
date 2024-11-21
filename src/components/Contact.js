import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

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
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl opacity-20 animate-ping"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">Get in Touch</h3>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+256756128506" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +256 756 128506
                    </a>
                    <br />
                    <a href="tel:+256780732425" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +256 780 732425
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:namanyakarim1@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                     namanyakarim1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/256756128506" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +256 756 128506
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-6">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
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
