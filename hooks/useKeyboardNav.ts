import { useEffect } from 'react';

/**
 * Terminal-style keyboard shortcuts for view navigation.
 * Only active when no input/textarea is focused.
 */
export function useKeyboardNav(view: string, setView: (v: string) => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't intercept when typing in inputs
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      switch (e.key.toLowerCase()) {
        case 'escape':
          if (view !== 'hero') setView('grid');
          break;
        case 'p':
          if (view === 'grid') setView('projects');
          break;
        case 'a':
          if (view === 'grid') setView('about');
          break;
        case 'n':
          if (view === 'grid') setView('notes');
          break;
        case 'h':
          setView('hero');
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [view, setView]);
}
