import React from 'react';
import Footer from '../ui/Footer';
import Hero from '../ui/hero';

export default function MasterLayout({ children }) {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  );
}
