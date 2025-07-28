import React from 'react';
import HeroSection from './components/HeroSection';
import BusinessAreas from './components/BusinessAreas';
import ProjectReferences from './components/ProjectReferences';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import Workflow from './components/Workflow';
import ExpectedOutcomes from './components/ExpectedOutcomes';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeroSection />
      <BusinessAreas />
      <ProjectReferences />
      <TechnicalCapabilities />
      <Workflow />
      <ExpectedOutcomes />
      <Footer />
    </div>
  );
};

export default Home; 