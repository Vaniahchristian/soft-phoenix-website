import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>SoftPheonix - Innovative POS Solutions & Business Management</title>
      <meta name="title" content="SoftPheonix - Innovative POS Solutions & Business Management" />
      <meta name="description" content="Transform your business with Trade Mate POS. Efficient point-of-sale solutions for restaurants, supermarkets, and retail stores in Uganda." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://softpheonix.com/" />
      <meta property="og:title" content="SoftPheonix - Innovative POS Solutions" />
      <meta property="og:description" content="Transform your business with Trade Mate POS. Efficient point-of-sale solutions for restaurants, supermarkets, and retail stores." />
      <meta property="og:image" content="https://softpheonix.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://softpheonix.com/" />
      <meta property="twitter:title" content="SoftPheonix - Innovative POS Solutions" />
      <meta property="twitter:description" content="Transform your business with Trade Mate POS. Efficient point-of-sale solutions for restaurants, supermarkets, and retail stores." />
      <meta property="twitter:image" content="https://softpheonix.com/twitter-image.jpg" />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="POS, point of sale, restaurant POS, supermarket POS, retail POS, Uganda, Trade Mate, business management" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="SoftPheonix" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://softpheonix.com/" />
    </Helmet>
  );
};

export default SEO; 