import React from 'react';
import { 
  FaCashRegister, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCloud, 
  FaChartLine, 
  FaUserFriends 
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCashRegister size={48} />,
      title: "POS Systems",
      description: "Efficient systems for restaurants and supermarkets.",
      details: [
        "Easy-to-use interface",
        "Real-time inventory tracking",
        "Multi-branch support",
        "Offline capability"
      ],
      color: "blue"
    },
    {
      icon: <FaLaptopCode size={48} />,
      title: "Web Apps",
      description: "Custom-built, reliable web solutions.",
      details: [
        "Responsive design",
        "Cross-platform compatibility",
        "Secure architecture",
        "API integration"
      ],
      color: "green"
    },
    {
      icon: <FaMobileAlt size={48} />,
      title: "Mobile Apps",
      description: "Innovative, user-friendly mobile apps.",
      details: [
        "Native performance",
        "Push notifications",
        "Offline support",
        "Regular updates"
      ],
      color: "purple"
    },
    {
      icon: <FaCloud size={48} />,
      title: "Cloud Sync",
      description: "Seamless data synchronization across devices.",
      details: [
        "Real-time sync",
        "Automatic backups",
        "Data encryption",
        "Version control"
      ],
      color: "indigo"
    },
    {
      icon: <FaChartLine size={48} />,
      title: "Analytics",
      description: "Comprehensive business insights and reporting.",
      details: [
        "Sales analytics",
        "Custom reports",
        "Data visualization",
        "Export options"
      ],
      color: "red"
    },
    {
      icon: <FaUserFriends size={48} />,
      title: "Multi-User",
      description: "Robust user management and permissions.",
      details: [
        "Role-based access",
        "Activity tracking",
        "Team collaboration",
        "User analytics"
      ],
      color: "yellow"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make our solutions stand out from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`text-${feature.color}-500 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className={`w-4 h-4 mr-2 text-${feature.color}-500`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to learn more about our features?</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Add this to your CSS */}
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

export default Features;
