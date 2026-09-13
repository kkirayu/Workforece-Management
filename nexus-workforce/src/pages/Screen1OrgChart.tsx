import React, { useState } from 'react';

export const Screen1OrgChart: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('david-kim');
  const [viewMode, setViewMode] = useState<'canvas' | 'list'>('canvas');

  return (
    <div className="space-y-4">
      {/* Top Breadcrumb & Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex items-center gap-1 font-mono-code text-xs text-[#a1a1aa]">
          <span className="hover:text-black cursor-pointer transition-colors">WORKFORCE_OS</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer transition-colors">SYSTEMS</span>
          <span>/</span>
          <span className="text-black font-semibold">ORG CHART &amp; HIERARCHY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-[#e8e8e9] text-[#71717a] font-mono-code text-[11px]">
            <span className="material-symbols-outlined text-xs text-[#10b981]">sync</span>
            Tree Synced: 2m ago (HRIS Bridge v4.1)
          </span>
          <div className="h-3 w-px bg-[#e2e2e3]"></div>
          <button className="h-8 px-2.5 inline-flex items-center gap-1.5 rounded-lg bg-white text-black font-label-default text-xs shadow-sm border border-[#e4e4e7] hover:bg-[#f3f3f4] transition-colors">
            <span className="material-symbols-outlined text-base text-[#71717a]">file_download</span>
            <span>Export Hierarchy</span>
            <span className="material-symbols-outlined text-sm text-[#a1a1aa]">expand_more</span>
          </button>
        </div>
      </div>

      {/* Header & View Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline-lg text-2xl font-semibold text-black tracking-tight">
            Enterprise Organization Hierarchy &amp; Talent Tree
          </h1>
          <p className="font-body-default text-xs text-[#71717a] mt-0.5">
            Explore multi-echelon reporting lines, staffing quotas, and real-time workload utilization across 4 active divisions and 18 functional nodes.
          </p>
        </div>
        <div className="inline-flex p-1 bg-[#eeeeef] rounded-lg">
          <button
            onClick={() => setViewMode('canvas')}
            className={`h-7 px-3 flex items-center gap-1.5 rounded font-label-default text-xs transition-all ${
              viewMode === 'canvas' ? 'bg-white text-black shadow-sm font-semibold' : 'text-[#71717a] hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">account_tree</span>
            <span>Tree Canvas</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`h-7 px-3 flex items-center gap-1.5 rounded font-label-default text-xs transition-all ${
              viewMode === 'list' ? 'bg-white text-black shadow-sm font-semibold' : 'text-[#71717a] hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">view_list</span>
            <span>Tabular List</span>
          </button>
        </div>
      </div>

      {/* Search & Filters Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-white rounded-xl shadow-sm border border-[#e4e4e7]">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <div className="relative min-w-[220px] max-w-xs flex-1">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#a1a1aa] text-base">search</span>
            <input
              type="text"
              placeholder="Search role, name, or node..."
              className="w-full h-8 pl-8 pr-12 bg-[#f3f3f4] rounded-lg font-body-sm text-xs text-black placeholder:text-[#a1a1aa] outline-none"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-1 rounded bg-[#e2e2e3] font-mono-code text-[10px] text-[#a1a1aa]">⌘K</kbd>
          </div>
          <select className="h-8 px-2.5 bg-[#f3f3f4] rounded-lg font-label-default text-xs text-black outline-none cursor-pointer">
            <option>All Divisions (4)</option>
            <option>Cloud Platform &amp; Infra</option>
            <option>Core Product &amp; UX</option>
            <option>Data Intelligence &amp; ML</option>
            <option>Trust &amp; Cybersec</option>
          </select>
          <select className="h-8 px-2.5 bg-[#f3f3f4] rounded-lg font-label-default text-xs text-black outline-none cursor-pointer">
            <option>All Workloads (100%)</option>
            <option>Critical / Overloaded (&gt;90%)</option>
            <option>Moderate (80-90%)</option>
            <option>Healthy (60-80%)</option>
            <option>Underallocated (&lt;60%)</option>
          </select>
          <select className="h-8 px-2.5 bg-[#f3f3f4] rounded-lg font-label-default text-xs text-black outline-none cursor-pointer">
            <option>All Seniority (L3 - L8)</option>
            <option>Executive / C-Suite (L8+)</option>
            <option>VP &amp; Directors (L6-L7)</option>
            <option>Staff &amp; Leads (L5-L6)</option>
            <option>Senior &amp; Mid (L3-L4)</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <button className="h-8 px-2.5 flex items-center gap-1 rounded-lg bg-[#f3f3f4] hover:bg-[#eeeeef] text-[#71717a] font-label-default text-xs transition-colors">
            <span className="material-symbols-outlined text-[16px]">unfold_less</span>
            <span>Collapse Teams</span>
          </button>
          <button className="h-8 px-2.5 flex items-center gap-1 rounded-lg bg-[#f3f3f4] hover:bg-[#eeeeef] text-[#71717a] font-label-default text-xs transition-colors">
            <span className="material-symbols-outlined text-[16px]">unfold_more</span>
            <span>Expand All</span>
          </button>
        </div>
      </div>

      {/* Headcount Summary Metric Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { label: 'Total Headcount', value: '248', sub: 'FTEs / 100%', color: 'text-black', badge: 'groups' },
          { label: 'Healthy Workload', value: '176', sub: '71.0%', color: 'text-[#10b981]', bg: 'bg-[#ecfdf5] text-[#10b981]' },
          { label: 'Approaching Cap', value: '44', sub: '17.7%', color: 'text-[#f59e0b]', bg: 'bg-[#fffbeb] text-[#f59e0b]' },
          { label: 'Overloaded', value: '14', sub: '5.6% Critical', color: 'text-[#e11d48]', bg: 'bg-[#fff1f2] text-[#e11d48]', ping: true },
          { label: 'Underallocated', value: '14', sub: '5.6% Capacity', color: 'text-[#6366f1]', bg: 'bg-[#eef2ff] text-[#6366f1]' },
        ].map((metric) => (
          <div key={metric.label} className="p-3 px-4 bg-white rounded-xl shadow-sm border border-[#e4e4e7] flex flex-col">
            <div className="flex items-center justify-between">
              <span className={`font-label-sm text-[11px] uppercase tracking-wider font-semibold ${metric.color}`}>{metric.label}</span>
              {metric.ping ? (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e11d48]"></span>
                </span>
              ) : (
                <span className="material-symbols-outlined text-[#a1a1aa] text-base">{metric.badge || 'fiber_manual_record'}</span>
              )}
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono-metric-lg text-2xl font-bold text-black">{metric.value}</span>
              <span className={`inline-flex items-center px-1 rounded font-mono-code text-[10px] ${metric.bg || 'text-[#a1a1aa]'}`}>{metric.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Canvas & Inspector Split View */}
      <div className="relative w-full flex flex-col xl:flex-row gap-4 items-start">
        {/* Primary Flowchart Canvas */}
        <div className="w-full xl:flex-1 bg-white rounded-xl shadow-sm border border-[#e4e4e7] overflow-hidden min-h-[720px] flex flex-col">
          {/* Canvas Toolbar */}
          <div className="h-10 px-4 bg-[#fafafa] border-b border-[#e4e4e7] flex items-center justify-between select-none">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#71717a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
              <span>CANVAS: 2D VECTOR MODE</span>
              <span>|</span>
              <span className="font-medium">Scale: 100%</span>
            </div>
            <div className="flex items-center gap-1 bg-[#f3f3f4] p-0.5 rounded-lg">
              {['add', 'remove', 'restart_alt', 'filter_center_focus'].map((icon) => (
                <button key={icon} className="w-6 h-6 flex items-center justify-center rounded hover:bg-white text-[#71717a] hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-sm">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dot Grid Surface & Org Nodes */}
          <div className="flex-1 w-full overflow-auto p-8 bg-[#fafafa] flex flex-col items-center gap-8" style={{ backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            {/* CEO Root Node */}
            <div className="flex flex-col items-center">
              <div className="w-80 p-3 bg-white rounded-xl shadow-md border border-[#e4e4e7] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm">AW</div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10b981] rounded-full ring-2 ring-white"></span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 font-semibold text-black text-sm">
                        Alexander Wright
                        <span className="material-symbols-outlined text-xs text-[#6366f1]">verified</span>
                      </div>
                      <div className="text-xs text-[#71717a]">Chief Executive Officer</div>
                      <div className="font-mono-code text-[11px] text-[#a1a1aa]">Acme Enterprise Holdings</div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-[#e8e8e9] font-mono-code text-[10px] text-[#71717a]">L8 Exec</span>
                </div>
                <div className="mt-3 pt-2 flex items-center justify-between bg-[#f3f3f4] p-2 rounded-lg text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-[#71717a] block">Org Utilization</span>
                    <span className="font-mono-metric-sm font-semibold text-black">81.4% Avg</span>
                  </div>
                  <div className="h-6 w-px bg-[#e2e2e3]"></div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-[#71717a] block">Org Headcount</span>
                    <span className="font-mono-metric-sm font-semibold text-black">248 FTEs</span>
                  </div>
                </div>
              </div>
              <div className="h-8 w-0.5 bg-[#e2e2e3]"></div>
              <div className="w-[800px] h-0.5 bg-[#e2e2e3] relative">
                <div className="absolute left-0 top-0 w-0.5 h-6 bg-[#e2e2e3]"></div>
                <div className="absolute left-[33%] top-0 w-0.5 h-6 bg-[#e2e2e3]"></div>
                <div className="absolute left-[67%] top-0 w-0.5 h-6 bg-[#e2e2e3]"></div>
                <div className="absolute right-0 top-0 w-0.5 h-6 bg-[#e2e2e3]"></div>
              </div>
            </div>

            {/* 4 Divisions Row */}
            <div className="w-full flex justify-between gap-4 pt-4">
              {[
                { name: '01. Cloud Platform', vp: 'Elena Rostova', title: 'VP Infrastructure', ftes: '88 FTEs · 5 Teams', load: '92% Overloaded', color: 'text-[#e11d48]', bg: 'bg-[#fff1f2]', alert: '92% Alert', border: 'ring-2 ring-black' },
                { name: '02. Product & UX', vp: 'Marcus Sterling', title: 'VP Product', ftes: '64 FTEs · 6 Teams', load: '78% Nominal', color: 'text-[#10b981]', bg: 'bg-[#ecfdf5]', alert: '78% Healthy' },
                { name: '03. Data & AI', vp: 'Dr. Priya Nair', title: 'Chief AI Scientist', ftes: '52 FTEs · 4 Teams', load: '86% Approaching', color: 'text-[#f59e0b]', bg: 'bg-[#fffbeb]', alert: '86% Moderate' },
                { name: '04. Trust & Cybersec', vp: 'Jordan Vance', title: 'Chief Infosec Officer', ftes: '44 FTEs · 3 Teams', load: '80% Nominal', color: 'text-[#10b981]', bg: 'bg-[#ecfdf5]', alert: '80% Healthy' },
              ].map((div) => (
                <div key={div.name} className={`w-60 p-3 bg-white rounded-xl shadow-sm border border-[#e4e4e7] cursor-pointer hover:shadow transition-all ${div.border || ''}`}>
                  <div className="flex items-center justify-between pb-2 mb-2 bg-[#f3f3f4] -mx-3 -mt-3 p-2 rounded-t-xl">
                    <span className="font-label-sm text-xs font-semibold text-black truncate">{div.name}</span>
                    <span className={`px-1.5 py-0.5 rounded font-mono-code text-[10px] ${div.bg} ${div.color} font-medium`}>{div.alert}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-xs">
                      {div.vp.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-black text-xs truncate">{div.vp}</div>
                      <div className="text-[11px] text-[#71717a] truncate">{div.title}</div>
                      <div className="font-mono-code text-[10px] text-[#a1a1aa]">{div.ftes}</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#f4f4f5] flex justify-between text-[11px]">
                    <span className="text-[#71717a]">Capacity:</span>
                    <span className={`font-mono-code font-semibold ${div.color}`}>{div.load}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Distributed Systems Team Direct Reports View */}
            <div className="w-full bg-[#f3f3f4]/50 p-4 rounded-xl border border-[#e4e4e7] space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-[#e4e4e7]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e11d48]"></span>
                  <span className="font-bold text-black text-xs">Team: Distributed Systems Core</span>
                </div>
                <span className="font-mono-code text-xs text-[#71717a]">8 Members · Lead: D. Kim</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { id: 'david-kim', name: 'David Kim', role: 'Staff Distributed Systems Eng', level: 'L6 Staff', load: '96% Load', status: 'CRITICAL', color: 'text-[#e11d48]', border: 'border-2 border-[#e11d48] bg-[#fff1f2]/20', sub: '6 Sprints · 0h slack · 8 Reports' },
                  { id: 'sarah-lin', name: 'Sarah Lin', role: 'Senior Cloud Architect', level: 'L5 Senior', load: '74% Load', status: 'HEALTHY', color: 'text-[#10b981]', border: 'border border-[#e4e4e7]', sub: '3 Active Projects · 14h Slack' },
                  { id: 'alex-chen', name: 'Alex Chen', role: 'ML Infra Platform Eng', level: 'L4 Mid', load: '88% Load', status: 'MODERATE', color: 'text-[#f59e0b]', border: 'border border-[#e4e4e7]', sub: '2 Deployments · 5h Slack' },
                ].map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedNode(card.id)}
                    className={`p-3 bg-white rounded-xl shadow-sm cursor-pointer transition-all hover:shadow ${card.border}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                          {card.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-black text-xs flex items-center gap-1">
                            {card.name}
                            <span className="px-1 py-0 rounded font-mono-code text-[9px] bg-[#e8e8e9] text-[#71717a]">{card.level}</span>
                          </div>
                          <div className="text-[11px] text-[#71717a]">{card.role}</div>
                        </div>
                      </div>
                      <span className={`px-1.5 py-0.5 rounded font-mono-code text-[10px] font-bold ${card.color} bg-[#f3f3f4]`}>{card.load}</span>
                    </div>
                    <div className="mt-2 text-[10px] font-mono-code text-[#a1a1aa]">{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Talent Node Inspector Right Panel */}
        <div className="w-full xl:w-96 bg-white rounded-xl shadow-sm border border-[#e4e4e7] p-4 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#e4e4e7]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-black text-lg">person_search</span>
              <span className="font-bold text-black text-sm">Talent Node Inspector</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-[#fff1f2] text-[#e11d48] font-mono-code text-[10px] font-bold">Overload Active</span>
          </div>

          {/* Selected Member Hero */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center text-base">DK</div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-black text-sm">David Kim</h3>
                <span className="px-1.5 py-0.5 rounded bg-[#e8e8e9] font-mono-code text-[10px]">L6 Staff</span>
              </div>
              <p className="text-xs text-[#71717a]">Staff Distributed Systems Eng</p>
              <span className="font-mono-code text-[10px] text-[#a1a1aa]">Cloud Infra · Kafka Core Mesh</span>
            </div>
          </div>

          {/* Metric Bento */}
          <div className="grid grid-cols-3 gap-2 bg-[#f3f3f4] p-3 rounded-xl text-center">
            <div>
              <span className="text-[9px] uppercase text-[#71717a] block">Workload</span>
              <span className="font-mono-metric-sm font-bold text-[#e11d48]">96.2%</span>
              <span className="text-[9px] text-[#e11d48] block">+16% avg</span>
            </div>
            <div>
              <span className="text-[9px] uppercase text-[#71717a] block">Allocations</span>
              <span className="font-mono-metric-sm font-bold text-black">6 Tasks</span>
              <span className="text-[9px] text-[#71717a] block">2 Critical</span>
            </div>
            <div>
              <span className="text-[9px] uppercase text-[#71717a] block">Reports</span>
              <span className="font-mono-metric-sm font-bold text-black">8 ICs</span>
              <span className="text-[9px] text-[#10b981] block">Span OK</span>
            </div>
          </div>

          {/* AI Burnout Alert */}
          <div className="p-3 bg-[#fff1f2] rounded-xl border border-[#fecdd3] space-y-2">
            <div className="flex items-center gap-1.5 text-[#e11d48] font-bold text-xs">
              <span className="material-symbols-outlined text-base">bolt</span>
              High Burnout Velocity Detected
            </div>
            <p className="text-xs text-[#1a1c1d] leading-relaxed">
              David is currently allocated to 4 critical path deliverables simultaneously. Projected delivery failure in sprint 38 if unmitigated.
            </p>
            <button className="w-full h-8 rounded bg-[#e11d48] text-white font-label-default text-xs font-semibold hover:bg-rose-700 transition-colors">
              Execute AI Workload Rebalance
            </button>
          </div>

          {/* Competency Matrix */}
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[#71717a] font-semibold block">Core Competency Matrix</span>
            <div className="flex flex-wrap gap-1">
              {['Go / Golang', 'Apache Kafka', 'Raft Consensus', 'Kubernetes CRDs', 'eBPF Networking'].map((skill) => (
                <span key={skill} className="px-2 py-0.5 rounded bg-[#f3f3f4] font-mono-code text-[11px] text-black">{skill}</span>
              ))}
            </div>
          </div>

          {/* Active Directives */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-wider text-[#71717a] font-semibold">Active Project Directives</span>
              <span className="font-mono-code text-[10px] text-[#a1a1aa]">40h / 40h</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: 'Global Kafka Cluster Migration', meta: 'P0 Priority · Lead Arch', hours: '22h/wk' },
                { name: 'Multi-Region Raft Quorum Tuning', meta: 'P1 Priority · Lead Arch', hours: '12h/wk' },
                { name: 'Hiring: Staff System SRE Candidates', meta: 'Talent Loop', hours: '6h/wk' },
              ].map((proj) => (
                <div key={proj.name} className="p-2 rounded-lg bg-[#f3f3f4] flex justify-between items-center text-xs">
                  <div>
                    <div className="font-medium text-black truncate max-w-[180px]">{proj.name}</div>
                    <div className="font-mono-code text-[10px] text-[#a1a1aa]">{proj.meta}</div>
                  </div>
                  <span className="font-mono-code font-semibold text-black">{proj.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reporting Line */}
          <div className="space-y-1 pt-2 border-t border-[#e4e4e7]">
            <span className="text-[10px] uppercase tracking-wider text-[#71717a] font-semibold block">Direct Reporting Line</span>
            <div className="p-2 rounded-lg bg-[#f3f3f4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-[10px]">ER</div>
                <div>
                  <div className="font-semibold text-black text-xs">Elena Rostova</div>
                  <div className="text-[10px] text-[#71717a]">VP Infrastructure (Manager)</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#a1a1aa] text-base">chevron_right</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button className="h-9 rounded-lg border border-[#e4e4e7] bg-white text-black font-label-default text-xs font-medium hover:bg-[#f3f3f4] transition-colors">
              Full Talent Dossier
            </button>
            <button className="h-9 rounded-lg bg-black text-white font-label-default text-xs font-semibold hover:bg-neutral-800 transition-colors">
              Shift Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
