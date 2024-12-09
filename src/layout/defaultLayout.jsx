import React from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

const DefaultTemplate = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow p-4 ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;