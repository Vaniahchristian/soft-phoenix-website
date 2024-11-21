import React from 'react';

const Image = ({ src, alt, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      {...props}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/fallback-image.jpg';
      }}
    />
  );
};

export default Image; 