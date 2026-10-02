import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navGroups = [
  {
    label: 'COMMAND CENTER',
    items: [
      { path: '/dashboard', name: 'Overview & Dashboard', icon: 'dashboard' },
    ]
  },
  {
    label: 'ORGANIZATION',
    items: [
      { path: '/org-chart', name: 'Org Chart & Hierarchy', icon: 'account_tree' },
      { path: '/teams', name: 'Teams & Structure', icon: 'corporate_fare' },
    ]
  },
  {
    label: 'PEOPLE',
    items: [
      { path: '/employees', name: 'Employee Directory', icon: 'badge' },
      { path: '/employee', name: 'Employee Profiles', icon: 'badge' },
      { path: '/my-tasks', name: 'My Tasks & Work', icon: 'task_alt' },
    ]
  },
  {
    label: 'SKILLS & WORKLOAD',
    items: [
      { path: '/workload', name: 'Workload & Capacity', icon: 'speed' },
      { path: '/heatmap', name: 'Capacity Heatmap', icon: 'grid_view' },
    ]
  },
  {
    label: 'PERFORMANCE',
    items: [
      { path: '/performance', name: 'Performance & OKR', icon: 'stars' },
      { path: '/career', name: 'Career Development', icon: 'route' },
    ]
  },
  {
    label: 'AI INTELLIGENCE',
    items: [
      { path: '/rebalance', name: 'Rebalance Preview', icon: 'tune' },
      { path: '/what-if', name: 'What-If Simulation', icon: 'science' },
      { path: '/planning', name: 'Workforce Planning', icon: 'forecasting' },
    ]
  },
];

const systemItems = [
  { name: 'Settings & Admin', icon: 'admin_panel_settings' },
  { name: 'Audit Log', icon: 'history' },
  { name: 'AI Engine Config', icon: 'smart_toy' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#e4e4e7] z-50 flex flex-col justify-between select-none overflow-y-auto">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="h-14 px-4 flex items-center gap-2 border-b border-[#e4e4e7] bg-white shrink-0">
          <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-base">bolt</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-text-primary truncate">Nexus</span>
            <span className="font-label-sm uppercase tracking-wider text-[#71717a]">Workforce OS</span>
          </div>
        </div>

        {/* Tenant Switcher */}
        <div className="p-2 shrink-0">
          <div className="flex items-center justify-between p-2 bg-[#f3f3f4] rounded-lg border border-[#e4e4e7] cursor-pointer hover:bg-[#eeeeef] transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center font-label-default text-xs">A</div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-default text-xs text-text-primary truncate leading-tight">Acme Corp</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#eef2ff] text-[#6366f1] border border-[#c7d2fe] leading-none w-fit">Pro Plan</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#71717a] text-base">unfold_more</span>
          </div>
        </div>

        {/* Quick Search */}
        <div className="px-3 py-1 shrink-0">
          <div className="flex items-center gap-2 px-2 py-1.5 bg-[#f3f3f4] rounded-lg border border-[#e4e4e7] cursor-pointer hover:bg-[#eeeeef] transition-colors">
            <span className="material-symbols-outlined text-[#a1a1aa] text-base">search</span>
            <span className="font-label-default text-xs text-[#a1a1aa] flex-1">Quick Search</span>
            <kbd className="px-1 rounded bg-[#e2e2e3] font-mono-code text-[10px] text-[#71717a]">⌘K</kbd>
          </div>
        </div>

        {/* Navigation Groups */}
        <nav className="px-3 py-2 space-y-4 overflow-y-auto flex-1">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="font-label-sm text-[10px] uppercase tracking-[0.08em] text-[#a1a1aa] px-2 mb-1.5 font-semibold">{group.label}</div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/');
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-all ${
                        isActive
                          ? 'bg-[#e8e8e9] text-black font-semibold'
                          : 'text-[#47464a] hover:bg-[#f3f3f4] hover:text-black'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[18px] shrink-0 ${isActive ? 'text-black' : 'text-[#a1a1aa]'}`}>{item.icon}</span>
                      <span className="font-label-default text-xs truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Systems */}
          <div>
            <div className="font-label-sm text-[10px] uppercase tracking-[0.08em] text-[#a1a1aa] px-2 mb-1.5 font-semibold">SYSTEMS</div>
            <div className="space-y-0.5">
              {systemItems.map((item) => (
                <button key={item.name} className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left text-[#47464a] hover:bg-[#f3f3f4] hover:text-black transition-all">
                  <span className="material-symbols-outlined text-[18px] shrink-0 text-[#a1a1aa]">{item.icon}</span>
                  <span className="font-label-default text-xs truncate">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Footer - Current User */}
      <div className="p-3 border-t border-[#e4e4e7] shrink-0">
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[#f3f3f4] cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981] to-[#6366f1] flex items-center justify-center text-white font-label-default text-xs">DK</div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-default text-xs text-text-primary font-medium truncate">David Kim</span>
            <span className="font-body-sm text-[10px] text-[#71717a] truncate">Staff Engineer · Lead</span>
          </div>
          <span className="material-symbols-outlined text-[#a1a1aa] text-sm ml-auto">unfold_more</span>
        </div>
      </div>
    </aside>
  );
};