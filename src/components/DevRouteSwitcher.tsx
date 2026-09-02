import React, { useState } from 'react';
import { Sparkles, Layers, ChevronDown, ChevronUp, FileText, X } from 'lucide-react';

interface DevRouteSwitcherProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
}

export const DevRouteSwitcher: React.FC<DevRouteSwitcherProps> = ({
  currentRoute,
  onRouteChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-3 left-3 sm:bottom-4 sm:right-4 z-50 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700/60 shadow-xl backdrop-blur-md transition-all text-xs flex items-center gap-1.5"
        title="Open Route Switcher"
      >
        <Layers className="w-4 h-4 text-purple-400" />
      </button>
    );
  }

  const isMLResume = currentRoute === 'portfolio-ml';

  const otherPortals = [
    { id: 'portal-vex', label: 'Portal Vex' },
    { id: 'portal-nexora', label: 'Portal Nexora' },
    { id: 'portal-editorial', label: 'Editorial' },
    { id: 'freelance-designpro', label: 'DesignPro' },
  ];

  return (
    <aside aria-label="Developer Route Switcher" className="fixed bottom-2 left-2 sm:bottom-4 sm:right-4 z-50 flex flex-col items-start sm:items-end select-none font-sans scale-85 sm:scale-100 origin-bottom-left sm:origin-bottom-right">
      {/* Expanded Panel */}
      {isOpen && (
        <div className="mb-2 w-72 rounded-2xl bg-[#121214]/95 border border-white/10 backdrop-blur-xl shadow-2xl p-3.5 text-xs text-neutral-300 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5 font-medium text-white">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Route & View Switcher</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1 text-neutral-400 hover:text-white rounded hover:bg-white/10 transition-colors"
                title="Dismiss to small icon"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-[11px] text-neutral-400 mb-2.5 leading-relaxed">
            Switch between the live resume seen by visitors and the full site under construction.
          </p>

          <div className="flex flex-col gap-1.5 mb-3">
            {/* Live ML Resume Button */}
            <button
              onClick={() => onRouteChange('portfolio-ml')}
              className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium text-left ${
                isMLResume
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-white text-xs font-semibold">ML Resume (Live Default)</div>
                  <div className="text-[10px] text-emerald-400/80">Serving at / and /resume</div>
                </div>
              </div>
              {isMLResume && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
            </button>

            {/* New Site in Progress */}
            <button
              onClick={() => onRouteChange('preview')}
              className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium text-left ${
                currentRoute === 'preview' || currentRoute === 'motionsite-michaelsmith' || currentRoute === 'home'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-white text-xs font-semibold">New Full Site (In Progress)</div>
                  <div className="text-[10px] text-purple-400/80">Serving at /preview</div>
                </div>
              </div>
              {(currentRoute === 'preview' || currentRoute === 'motionsite-michaelsmith' || currentRoute === 'home') && (
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              )}
            </button>
          </div>

          {/* Other experiments */}
          <div className="pt-2 border-t border-white/5">
            <div className="text-[10px] uppercase font-semibold tracking-wider text-neutral-500 mb-1.5">
              Other Explorations
            </div>
            <div className="grid grid-cols-2 gap-1">
              {otherPortals.map((portal) => (
                <button
                  key={portal.id}
                  onClick={() => onRouteChange(portal.id)}
                  className={`px-2 py-1 rounded-lg text-[11px] text-left transition-colors truncate ${
                    currentRoute === portal.id
                      ? 'bg-white/15 text-white font-medium'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {portal.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Bar */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#141416]/90 border border-white/15 backdrop-blur-xl shadow-2xl text-xs">
        <button
          onClick={() => onRouteChange(isMLResume ? 'preview' : 'portfolio-ml')}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all"
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isMLResume ? 'bg-emerald-400 animate-pulse' : 'bg-purple-400 animate-pulse'
            }`}
          />
          <span className="text-white font-medium text-xs">
            {isMLResume ? 'Live ML Resume' : 'New Site (Preview)'}
          </span>
          <span className="text-[10px] text-neutral-400 px-1.5 py-0.5 rounded bg-white/5 uppercase tracking-wide">
            Toggle
          </span>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          title={isOpen ? 'Collapse panel' : 'Expand route switcher'}
        >
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>
    </aside>
  );
};
