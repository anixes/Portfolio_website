import React, { useState } from 'react';
import { MotionsiteMichaelSmith } from './experiments/MotionsiteMichaelSmith';
import { PortalVex } from './experiments/PortalVex';
import { PortalNexora } from './experiments/PortalNexora';
import { PortalEditorial } from './experiments/PortalEditorial';
import { FreelanceDesignPro } from './experiments/FreelanceDesignPro';
import { PortfolioDataScience } from './experiments/PortfolioDataScience';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('home');

  const renderView = () => {
    switch (currentRoute) {
      case 'home':
      case 'motionsite-michaelsmith':
        return <MotionsiteMichaelSmith onSelectRoute={setCurrentRoute} />;
      case 'portal-vex':
        return <PortalVex onSelectRoute={setCurrentRoute} />;
      case 'portal-nexora':
        return <PortalNexora onSelectRoute={setCurrentRoute} />;
      case 'portal-editorial':
        return <PortalEditorial onSelectRoute={setCurrentRoute} />;
      case 'freelance-designpro':
        return <FreelanceDesignPro />;
      case 'portfolio-ml':
        return <PortfolioDataScience />;
      default:
        return <MotionsiteMichaelSmith onSelectRoute={setCurrentRoute} />;
    }
  };

  return (
    <main className="w-full min-h-screen bg-black text-[#D7E2EA] font-sans relative">
      {renderView()}
    </main>
  );
};

export default App;
