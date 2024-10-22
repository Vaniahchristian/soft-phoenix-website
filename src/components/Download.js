import React from 'react';

const Download = () => {
  return (
    <section id="download" className="py-12 bg-gray-200">
      <h3 className="text-3xl font-bold text-center">Download Trade Mate</h3>
      <div className="mt-6 text-center">
        <a href="/IAS (1).cmd" download>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Download APK
          </button>
        </a>
      </div>
    </section>
  );
};

export default Download;
