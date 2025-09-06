import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import InnovationPage from './pages/InnovationPage';
import ProgramPage from './pages/ProgramPage';
import EducationPage from './pages/EducationPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'innovation':
        return <InnovationPage />;
      case 'program':
        return <ProgramPage />;
      case 'education':
        return <EducationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        {renderActiveTab()}
      </main>
      <Footer />
    </div>
  );
};

export default App;