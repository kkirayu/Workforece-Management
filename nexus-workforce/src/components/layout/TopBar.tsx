import React from 'react';

interface TopBarProps {
  currentScreen?: string;
  onScreenChange?: (screen: string) => void;
}

export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center h-14 px-6 bg-white border-b border-[#e4e4e7] shrink-0 gap-6">
      {/* Breadcrumb Path */}
      <div className="flex items-center gap-1.5 text-xs text-[#a1a1aa] shrink-0">
        <span className="hover:text-black cursor-pointer transition-colors">Acme</span>
        <span className="hover:text-black cursor-pointer transition-colors">Enterprise</span>
        <span className="material-symbols-outlined text-[14px] text-[#c8c5ca]">chevron_right</span>
        <span className="text-black font-medium whitespace-nowrap">Workforce Intelligence</span>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-sm relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#a1a1aa] text-base">search</span>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-9 pl-9 pr-12 bg-[#f3f3f4] rounded-lg font-body-default text-sm text-black placeholder:text-[#a1a1aa] outline-none focus:bg-white focus:ring-1 focus:ring-black transition-all"
        />
        <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-[#e2e2e3] font-mono-code text-[11px] text-[#71717a]">Ctrl K</kbd>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 shrink-0">
        {/* AI Copilot */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ecfdf5] border border-[#a7f3d0] cursor-pointer hover:bg-[#d1fae5] transition-colors">
          <span className="material-symbols-outlined text-[#10b981] text-base">auto_awesome</span>
          <span className="font-label-default text-xs text-[#10b981] font-medium whitespace-nowrap">AI Copilot</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#10b981] text-white">Ready</span>
        </div>

        {/* New Task */}
        <button className="flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm whitespace-nowrap">
          <span className="material-symbols-outlined text-base">add</span>
          <span className="font-label-default text-xs">New Task / Allocation</span>
        </button>

        {/* Notifications */}
        <button className="relative h-9 w-9 shrink-0 flex items-center justify-center rounded-lg border border-[#e4e4e7] hover:bg-[#f3f3f4] transition-colors">
          <span className="material-symbols-outlined text-[#71717a] text-lg">notifications</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#e11d48] text-white text-[10px] font-bold flex items-center justify-center">3</span>
        </button>

        {/* Help */}
        <button className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg border border-[#e4e4e7] hover:bg-[#f3f3f4] transition-colors">
          <span className="material-symbols-outlined text-[#71717a] text-lg">help</span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2 pl-2 ml-1 border-l border-[#e4e4e7] cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981] to-[#6366f1] flex items-center justify-center text-white font-label-default text-xs">ER</div>
          <div className="hidden flex-col md:block">
            <div className="font-label-default text-xs text-text-primary font-medium">Elena Rostova</div>
            <div className="font-body-sm text-[10px] text-[#71717a]">Lead / Eng Manager</div>
          </div>
          <span className="material-symbols-outlined text-[#a1a1aa] text-base">expand_more</span>
        </div>
      </div>
    </header>
  );
};
