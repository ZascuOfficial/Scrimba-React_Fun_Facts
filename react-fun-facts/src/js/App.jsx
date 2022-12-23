import React from 'react';

import Nav from './Nav';
import MainContent from './MainContent';
import Footer from './Footer';

export default function App() {
  return (
    <div className="container">
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}