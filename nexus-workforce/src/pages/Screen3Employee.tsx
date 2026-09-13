import React, { useState } from 'react';

export const Screen3Employee = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skill Matrix & Competency', count: 18 },
    { id: 'workload', label: 'Workload & Capacity History' },
    { id: 'performance', label: 'Performance Snapshot' },
    { id: 'engagements', label: 'Project Engagements' },
  ];

  const kpis = [
    {
      title: 'Core Technical Depth',
      value: '4.8/5.0',
      subtitle: 'Top 2%',
      icon: 'psychology',
    },
    {
      title: 'Architectural Velocity',
      value: '94th percentile',
      subtitle: 'Progress',
      progress: 94,
      icon: 'speed',
    },
    {
      title: 'Skill Verification Level',
      value: '18 Skills Active',
      subtitle: 'Certified by Architecture Board',
      icon: 'verified',
    },
    {
      title: 'Target L7 Skill Gaps',
      value: '2 Priority Items',
      subtitle: 'Identified',
      icon: 'flag',
    },
  ];

  const skills = [
    { name: 'Go/Golang', domain: 'Backend Systems', level: 5, authority: 'ARB Certified', recency: 'Active Sprint 42', recencyActive: true },
    { name: 'Apache Kafka', domain: 'Event Streaming', level: 5, authority: 'Peer Confirmed 14', recency: 'Sprint 41' },
    { name: 'Distributed Consensus/Raft', domain: 'Distributed Systems', level: 4, authority: 'ARB Certified', recency: 'Sprint 41' },
    { name: 'Kubernetes CRDs', domain: 'Platform Engineering', level: 4, authority: 'Peer Confirmed 9', recency: 'Active Sprint 42', recencyActive: true },
    { name: 'eBPF & Kernel Observability', domain: 'Systems Programming', level: 3, authority: 'Peer Confirmed 6', recency: 'Sprint 39' },
    { name: 'Rust Systems', domain: 'Systems Programming', level: 4, authority: 'ARB Certified', recency: 'Sprint 40' },
    { name: 'High-Concurrency DB Design', domain: 'Database Engineering', level: 5, authority: 'ARB Certified', recency: 'Active Sprint 42', recencyActive: true },
  ];

  const gaps = [
    { skill: 'Formal Verification (TLA+)', criticality: 'Critical', description: 'Required for L7 consensus protocol design', progress: 15 },
    { skill: 'Large-Scale ML Infra', criticality: 'High', description: 'Needed for cross-org ML platform initiatives', progress: 35 },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9fa] font-[Inter] text-[#09090b]">
      

      <div className="max-w-[1600px] mx-auto p-6 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a]" aria-label="Breadcrumb">
          <span className="font-medium text-[#09090b]">WORKFORCE_OS</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span>TALENT & SKILLS</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span>EMPLOYEE DIRECTORY</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span className="font-medium text-[#09090b]">DAVID KIM <span className="font-normal text-[#71717a]">(EMP-8842)</span></span>
        </nav>

        {/* Status & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></span>
              <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-50 animate-pulse" style={{ animationDelay: '500ms' }}></span>
            </span>
            <div>
              <p className="font-medium">Active & Compliant</p>
              <p className="text-xs text-[#71717a]">Last synced 6m ago via Workday</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] transition-colors">
              <span className="material-symbols-outlined text-[18px] mr-1">edit</span>Edit Profile
            </button>
            <button className="px-4 py-2 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] transition-colors">
              <span className="material-symbols-outlined text-[18px] mr-1">download</span>Export Talent Card
            </button>
            <button className="px-4 py-2 bg-[#000000] text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined animate-spin">auto_awesome</span>AI Rebalance Suggestions
            </button>
          </div>
        </div>

        {/* Hero Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-xl bg-[#e8e8e9] flex items-center justify-center">
                <span className="material-symbols-outlined text-[40px] text-[#71717a]">person</span>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">David Kim</h1>
                <p className="text-[#71717a]">Staff Distributed Systems Engineer · Platform Infrastructure</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm pt-2 border-t border-[#e4e4e7]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">badge</span>
                <span className="font-mono font-medium">EMP-8842</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">email</span>
                <span>david.k@acme.internal</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">location_on</span>
                <span>San Francisco Hybrid</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">supervisor_account</span>
                <span>Manager: Elena Rostova, VP Infra</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Current Workload Index</h3>
              <span className="px-2 py-0.5 text-xs font-medium bg-[#fff1f2] text-[#e11d48] rounded">Overloaded</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">96.2%</span>
                <span className="text-[#71717a]">Utilization</span>
              </div>
              <div className="h-3 bg-[#e8e8e9] rounded-full overflow-hidden">
                <div className="h-full flex" style={{ width: '96.2%' }}>
                  <div className="bg-[#000000]" style={{ width: '75%' }}></div>
                  <div className="bg-[#e11d48]" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#71717a]">
                <div><span className="font-medium text-[#09090b]">38.5</span> hrs/wk Allocated</div>
                <div><span className="font-medium text-[#09090b]">1.5</span> hrs/wk Available</div>
                <div><span className="font-medium text-[#09090b]">4</span> Critical Path Sprints</div>
                <div><span className="font-medium text-[#09090b]">2</span> Mentorship Pods</div>
              </div>
            </div>
            <button className="w-full text-sm text-[#6366f1] font-medium hover:underline mt-2">Adjust Capacity →</button>
          </div>
        </div>

        {/* Segmented Tabs */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
          <div className="flex border-b border-[#e4e4e7]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#000000] text-[#09090b]'
                    : 'border-transparent text-[#71717a] hover:text-[#09090b] hover:bg-[#f9f9fa]'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-[#000000] text-white rounded-full">{tab.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Scorecards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-[#71717a]">{kpi.title}</h4>
                <span className="material-symbols-outlined text-[24px] text-[#71717a]">{kpi.icon}</span>
              </div>
              <div className="text-2xl font-bold font-[JetBrains_Mono]">{kpi.value}</div>
              <p className="text-sm text-[#71717a]">{kpi.subtitle}</p>
              {kpi.progress && (
                <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-[#000000] rounded-full" style={{ width: `${kpi.progress}%` }}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search/Filter Toolbar */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] p-4">
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[280px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-[#a1a1aa]">search</span>
              <input
                type="text"
                placeholder="Search skills, domains, authorities..."
                className="w-full pl-10 pr-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000]">
              <option>All Domains</option>
              <option>Backend Systems</option>
              <option>Distributed Systems</option>
              <option>Platform Engineering</option>
              <option>Systems Programming</option>
              <option>Database Engineering</option>
            </select>
            <button className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">verified</span>Verified Only
            </button>
            <button className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">sort</span>Sort by Level
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Verified Skill Inventory Table */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f9f9fa] border-b border-[#e4e4e7]">
                  <tr>
                    <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Skill & Domain</th>
                    <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Mastery Level</th>
                    <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Verification Authority</th>
                    <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Production Recency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e4e7]">
                  {skills.map((skill, idx) => (
                    <tr key={idx} className="hover:bg-[#f9f9fa] transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-xs text-[#71717a]">{skill.domain}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(l => (
                            <div key={l} className={`w-6 h-6 rounded flex items-center justify-center ${
                              l <= skill.level ? 'bg-[#000000]' : 'bg-[#e8e8e9]'
                            }`}>
                              {l <= skill.level && (
                                <span className="material-symbols-outlined text-[12px] text-white">check</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-[#71717a] mt-1">L{skill.level} {['Novice','Developing','Proficient','Advanced','Master'][skill.level-1]}</div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          skill.authority.includes('ARB') ? 'bg-[#eef2ff] text-[#6366f1]' : 'bg-[#ecfdf5] text-[#10b981]'
                        }`}>
                          {skill.authority}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`flex items-center gap-1 text-xs ${
                          skill.recencyActive ? 'text-[#10b981]' : 'text-[#71717a]'
                        }`}>
                          {skill.recencyActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>}
                          {skill.recency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Target Readiness */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Target Readiness</h3>
                <span className="text-xs text-[#71717a]">L7 Principal</span>
              </div>
              <p className="text-sm text-[#71717a]">Distributed Systems Architect</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Readiness</span>
                  <span className="font-medium font-[JetBrains_Mono]">82%</span>
                </div>
                <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10b981] rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="space-y-3 pt-2 border-t border-[#e4e4e7]">
                {gaps.map((gap, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{gap.skill}</span>
                      <span className={`px-1.5 py-0.5 text-xs font-medium rounded ${
                        gap.criticality === 'Critical' ? 'bg-[#fff1f2] text-[#e11d48]' : 'bg-[#fffbeb] text-[#f59e0b]'
                      }`}>
                        {gap.criticality}
                      </span>
                    </div>
                    <p className="text-xs text-[#71717a]">{gap.description}</p>
                    <div className="h-1.5 bg-[#e8e8e9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: `${gap.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peer Review Pulse */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-3">
              <h3 className="font-semibold">Peer Review Pulse</h3>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold font-[JetBrains_Mono] text-[#f59e0b]">4.9</span>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[#f59e0b]">star</span>)}
                </div>
                <span className="text-sm text-[#71717a]">19 360-Reviews</span>
              </div>
              <blockquote className="text-sm text-[#71717a] italic border-l-2 border-[#e4e4e7] pl-3 py-1">
                "David's ability to navigate complex consensus protocols while mentoring junior engineers is exceptional. His Kafka CRD work saved us months."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom Sparkline */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] p-6">
          <h3 className="font-semibold mb-4">6-Week Rolling Workload</h3>
          <div className="h-32 relative">
            <svg className="w-full h-full" viewBox="0 0 600 128" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L50,92 L100,85 L150,80 L200,75 L250,70 L300,65 L350,62 L400,60 L450,58 L500,55 L550,53 L600,52"
                stroke="#000000"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0,100 L50,92 L100,85 L150,80 L200,75 L250,70 L300,65 L350,62 L400,60 L450,58 L500,55 L550,53 L600,52"
                stroke="#000000"
                strokeWidth="1"
                fill="url(#sparklineGrad)"
              />
              <circle cx="550" cy="53" r="4" fill="#e11d48" />
              <text x="550" y="45" fontSize="10" fill="#e11d48" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">96%</text>
            </svg>
            <div className="flex justify-between text-xs text-[#71717a] mt-2">
              <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 5</span><span>Week 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};