import React from 'react';
import Filters from '../components/Homepage/Filters/Filters';
import Hero from '../components/Homepage/Hero';

const Homepage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <Filters />
    </div>
  );
};

export default Homepage;
