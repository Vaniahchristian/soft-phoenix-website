import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR-GA4-ID');

const Features = lazy(() => import('./components/Features'));
const Products = lazy(() => import('./components/Products'));
const Download = lazy(() => import('./components/Download'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Features />
          <Products />
          <Download />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
