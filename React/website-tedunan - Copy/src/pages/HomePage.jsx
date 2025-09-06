import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import VolumeSection from '../components/home/VolumeSection';

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProblemSection />
      <VolumeSection />
    </div>
  );
};

export default HomePage;