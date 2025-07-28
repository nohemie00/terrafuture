import React from 'react';
import HeroSection from './components/HeroSection';
import BusinessAreas from './components/BusinessAreas';
import ProjectReferences from './components/ProjectReferences';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <BusinessAreas />
      <ProjectReferences />
      <Footer />
    </div>
  );
};

export default Home; 