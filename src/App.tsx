import React, { useState, useEffect, useCallback } from 'react';
import { MotionsiteMichaelSmith } from './experiments/MotionsiteMichaelSmith';
import { PortalVex } from './experiments/PortalVex';
import { PortalNexora } from './experiments/PortalNexora';
import { PortalEditorial } from './experiments/PortalEditorial';
import { FreelanceDesignPro } from './experiments/FreelanceDesignPro';
import { PortfolioDataScience } from './experiments/PortfolioDataScience';
import { DevRouteSwitcher } from './components/DevRouteSwitcher';

// Helper to determine route from current pathname or hash
const resolveRouteFromUrl = (): string => {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const target = path || hash;

  if (!target || target === 'ml' || target === 'resume' || target === 'portfolio-ml') {
    // Default live route is Animesh's ML Resume & Portfolio (Verified)
    return 'portfolio-ml';
  }

  if (target === 'preview' || target === 'dev' || target === 'site' || target === 'home' || target === 'motionsite' || target === 'motionsite-michaelsmith') {
    return 'preview';
  }

  if (target === 'portal-vex') return 'portal-vex';
  if (target === 'portal-nexora') return 'portal-nexora';
  if (target === 'portal-editorial') return 'portal-editorial';
  if (target === 'freelance-designpro' || target === 'designpro') return 'freelance-designpro';

  // Safe fallback to Live ML Resume
  return 'portfolio-ml';
};

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(resolveRouteFromUrl);

  // Sync state when browser navigation occurs (back/forward or hash change)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(resolveRouteFromUrl());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Handler to navigate between routes and keep URL in sync
  const handleNavigate = useCallback((newRoute: string) => {
    setCurrentRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'instant' });

    let targetPath = '/';
    if (newRoute === 'portfolio-ml') {
      targetPath = '/';
    } else if (newRoute === 'preview' || newRoute === 'home' || newRoute === 'motionsite-michaelsmith') {
      targetPath = '/preview';
    } else {
      targetPath = `/${newRoute}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ route: newRoute }, '', targetPath);
    }
  }, []);

  const renderView = () => {
    switch (currentRoute) {
      case 'portfolio-ml':
        return <PortfolioDataScience />;
      case 'preview':
      case 'home':
      case 'motionsite-michaelsmith':
        return <MotionsiteMichaelSmith onSelectRoute={handleNavigate} />;
      case 'portal-vex':
        return <PortalVex onSelectRoute={handleNavigate} />;
      case 'portal-nexora':
        return <PortalNexora onSelectRoute={handleNavigate} />;
      case 'portal-editorial':
        return <PortalEditorial onSelectRoute={handleNavigate} />;
      case 'freelance-designpro':
        return <FreelanceDesignPro />;
      default:
        return <PortfolioDataScience />;
    }
  };

  return (
    <main className="w-full min-h-screen bg-black text-[#D7E2EA] font-sans relative">
      {renderView()}

      {/* Development / Preview Switcher to toggle between Live ML Resume and In-Progress Site */}
      <DevRouteSwitcher
        currentRoute={currentRoute}
        onRouteChange={handleNavigate}
      />
    </main>
  );
};

export default App;

