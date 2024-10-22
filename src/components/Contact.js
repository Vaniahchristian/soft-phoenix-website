import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-gray-700 to-gray-900 text-white text-center relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl opacity-20 animate-ping"></div>

      <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">Get in Touch</h3>
      <p className="max-w-md mx-auto mt-4 text-lg drop-shadow-md">
        Reach out to us at 
        <a href="mailto:info@softpheonix.com" className="text-blue-400 underline ml-1">info@softpheonix.com</a> 
        <p> or call us at</p> 
        <a href="tel:+256756128506" className="text-blue-400 underline ml-1">+256 756 128506</a> 
            || 
        <a href="tel:+256780732425" className="text-blue-400 underline ml-1">+256 780 732425</a>
      </p>

      
      
      

     
    </section>
  );
};

export default Contact;
