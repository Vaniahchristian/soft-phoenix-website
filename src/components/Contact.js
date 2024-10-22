import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-300 text-center">
      <h3 className="text-3xl font-bold">Get in Touch</h3>
      <p className="mt-4">Contact us at info@softpheonix.com or call us at +256 123 456 789</p>
      <div className="flex justify-center mt-6">
        <a href="https://facebook.com" className="mx-4">Facebook</a>
        <a href="https://twitter.com" className="mx-4">Twitter</a>
        <a href="https://linkedin.com" className="mx-4">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
