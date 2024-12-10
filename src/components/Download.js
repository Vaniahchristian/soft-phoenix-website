import React from 'react';
import { 
  FaDownload, 
  FaUserTie, 
  FaCheckCircle, 
  FaAndroid, 
  FaMobileAlt,
  FaCloudDownloadAlt 
} from 'react-icons/fa';

const Download = () => {
  const posFeatures = [
    "Easy-to-use interface",
    "Offline capability",
    "Real-time sync",
    "Inventory management",
    "Sales reporting",
    "Multi-user support"
  ];

  const agentFeatures = [
    "Commission tracking",
    "Client management",
    "Performance analytics",
    "Real-time earnings",
    "Lead management",
    "Support system"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements 
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* POS App Section */}
        <div id="download" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Download Trade Mate POS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your business with our powerful POS solution. Get started today and experience 
              seamless business management.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaMobileAlt className="text-4xl text-blue-500" />
                  <h3 className="text-2xl font-bold">Trade Mate POS App</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {posFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <a href="/trademate-pos.apk" download className="group">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg 
                                   hover:bg-blue-700 transition-all duration-300 
                                   flex items-center justify-center gap-2 group">
                      <FaAndroid className="text-xl group-hover:rotate-12 transition-transform" />
                      <span>Download for Android</span>
                      <FaCloudDownloadAlt className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </a>
                  <p className="text-sm text-gray-500 text-center">
                    Version 2.0.1 | Size: 15MB
                  </p>
                </div>
              </div>
              <div className="relative">
                {/* Add your app screenshot/mockup image here */}
                <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <FaMobileAlt className="text-6xl text-blue-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent App Section */}
        <div id="agent-download" className="pt-20 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Become a Trade Mate Agent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our network of successful agents and earn commissions by helping businesses adopt Trade Mate POS. 
              Start your journey today!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                {/* Add your agent app screenshot/mockup image here */}
                <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <FaUserTie className="text-6xl text-green-300" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserTie className="text-4xl text-green-500" />
                  <h3 className="text-2xl font-bold">Trade Mate Agent App</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {agentFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <a href="/trademate-agent.apk" download className="group">
                    <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg 
                                   hover:bg-green-700 transition-all duration-300 
                                   flex items-center justify-center gap-2 group">
                      <FaAndroid className="text-xl group-hover:rotate-12 transition-transform" />
                      <span>Download Agent App</span>
                      <FaCloudDownloadAlt className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </a>
                  <p className="text-sm text-gray-500 text-center">
                    Version 1.5.0 | Size: 12MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Want to learn more about becoming an agent?</p>
            <a href="#contact" className="inline-block text-blue-600 hover:text-blue-700 font-medium hover:underline">
              Contact us for more information →
            </a>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
      `}</style>
    </section>
  );
};

export default Download;
