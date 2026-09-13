import React, { useState } from 'react';

export const Screen4Workload = () => {
  const [activeTab, setActiveTab] = useState('workload');
  const [managerNotes, setManagerNotes] = useState('');

  const tabs = [
    { id: 'skills', label: 'Skill Matrix & Competency', count: 18 },
    { id: 'workload', label: 'Workload & Capacity History', icon: 'schedule' },
    { id: 'performance', label: 'Performance Snapshot', icon: 'star' },
    { id: 'engagements', label: 'Project Engagements', icon: 'work' },
  ];

  const metricCards = [
    { title: '12-Wk Avg Utilization', value: '92.4%', change: '+2.8%', trend: 'up', icon: 'trending_up', color: 'text-[#e11d48]' },
    { title: 'Peak Capacity Sprint', value: 'Sprint 41', change: '101%', trend: 'up', icon: 'arrow_upward', color: 'text-[#f59e0b]' },
    { title: 'Rebalance Events', value: '3 delegated', change: '142 PM saved', trend: 'down', icon: 'swap_horiz', color: 'text-[#6366f1]' },
    { title: 'Burnout Risk Index', value: '78/100', change: '2 consecutive sprints above 90%', trend: 'down', icon: 'local_fire_department', color: 'text-[#e11d48]' },
  ];

  const sprints = [
    { sprint: 32, capacity: 40, allocated: 35, overtime: 'None', notes: 'Baseline sprint' },
    { sprint: 33, capacity: 40, allocated: 36, overtime: 'None', notes: 'Standard allocation' },
    { sprint: 34, capacity: 40, allocated: 37, overtime: 'Light', notes: 'Incident response added' },
    { sprint: 35, capacity: 40, allocated: 38, overtime: 'Moderate', notes: 'Critical path deployment' },
    { sprint: 36, capacity: 40, allocated: 39, overtime: 'Heavy', notes: 'Q3 release prep' },
    { sprint: 37, capacity: 40, allocated: 40.5, overtime: 'Heavy', notes: 'Overloaded - incident overflow' },
    { sprint: 38, capacity: 40, allocated: 38, overtime: 'Moderate', notes: 'Post-incident recovery' },
    { sprint: 39, capacity: 40, allocated: 37, overtime: 'Light', notes: 'Knowledge transfer sessions' },
    { sprint: 40, capacity: 40, allocated: 36, overtime: 'None', notes: 'Rebalance implemented' },
    { sprint: 41, capacity: 40, allocated: 40.4, overtime: 'Heavy', notes: 'Spike - Q4 launch prep' },
    { sprint: 42, capacity: 40, allocated: 38.5, overtime: 'Moderate', notes: 'Current sprint' },
  ];

  const chartData = [
    { sprint: 32, core: 22, incidents: 3, mentorship: 5, adhoc: 5 },
    { sprint: 33, core: 24, incidents: 2, mentorship: 5, adhoc: 5 },
    { sprint: 34, core: 25, incidents: 4, mentorship: 4, adhoc: 4 },
    { sprint: 35, core: 26, incidents: 5, mentorship: 4, adhoc: 3 },
    { sprint: 36, core: 27, incidents: 4, mentorship: 4, adhoc: 4 },
    { sprint: 37, core: 28, incidents: 6, mentorship: 3, adhoc: 3.5 },
    { sprint: 38, core: 26, incidents: 4, mentorship: 4, adhoc: 4 },
    { sprint: 39, core: 25, incidents: 3, mentorship: 5, adhoc: 4 },
    { sprint: 40, core: 24, incidents: 3, mentorship: 5, adhoc: 4 },
    { sprint: 41, core: 28, incidents: 5, mentorship: 3, adhoc: 4.4 },
    { sprint: 42, core: 26, incidents: 4, mentorship: 4.5, adhoc: 4 },
  ];

  const reassignments = [
    { project: 'Kafka Quorum Redesign', to: 'Sarah Lin', hours: 8, reason: 'Sarah has Raft consensus expertise' },
    { project: 'Hiring Interview Panel', to: 'Liam Walker', hours: 6, reason: 'Liam has bandwidth and domain knowledge' },
    { project: 'Observability Scrub', to: 'Alex Chen', hours: 8, reason: 'Alex led similar initiative in Sprint 38' },
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
              <span className="px-2 py-0.5 text-xs font-medium bg-[#fff1f2] text-[#e11d48] rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] animate-pulse"></span>Overloaded
              </span>
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
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-[#000000] text-[#09090b]'
                    : 'border-transparent text-[#71717a] hover:text-[#09090b] hover:bg-[#f9f9fa]'
                }`}
              >
                {tab.id === 'workload' && <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse"></span>}
                {tab.id === 'performance' && <span className="material-symbols-outlined text-[18px]">star</span>}
                {tab.label}
                {tab.count && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-[#000000] text-white rounded-full">{tab.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Workload Filters Toolbar */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] p-4">
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000]">
              <option>Last 6 Months (Sprint 32-43)</option>
              <option>Last 3 Months</option>
              <option>Last Year</option>
            </select>
            <select className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000]">
              <option>Sprint-by-Sprint (2-Wk Cycles)</option>
              <option>Monthly Aggregated</option>
            </select>
            <select className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000]">
              <option>All Projects & Ad-Hoc</option>
              <option>Core Projects Only</option>
              <option>Critical Incidents Only</option>
            </select>
            <button className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] flex items-center gap-1.5 ml-auto">
              <span className="material-symbols-outlined text-[18px]">download</span>Export CSV
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-[#71717a]">{card.title}</h4>
                <span className="material-symbols-outlined text-[24px] text-[#71717a]">{card.icon}</span>
              </div>
              <div className="text-2xl font-bold font-[JetBrains_Mono]">{card.value}</div>
              <p className={`text-sm font-medium ${card.color}`}>{card.change}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Stacked Bar Chart */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-[#e4e4e7] p-6">
            <h3 className="font-semibold mb-6">Rolling Workload Variance</h3>
            <div className="relative">
              {/* Threshold line */}
              <div className="absolute left-0 right-0 border-t-2 border-dashed border-[#e11d48] z-10" style={{ bottom: '37%' }}>
                <span className="absolute -top-5 right-0 text-xs font-medium text-[#e11d48] bg-white px-1">85% threshold</span>
              </div>
              {/* Bars */}
              <div className="flex items-end gap-2 h-[240px] pt-4">
                {chartData.map((d, idx) => {
                  const total = d.core + d.incidents + d.mentorship + d.adhoc;
                  const scale = 240 / 44;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col" style={{ height: `${total * scale}px` }}>
                        <div className="bg-[#000000] w-full rounded-t-sm" style={{ height: `${(d.core / total) * 100}%` }}></div>
                        <div className="bg-[#e11d48] w-full" style={{ height: `${(d.incidents / total) * 100}%` }}></div>
                        <div className="bg-[#a1a1aa] w-full" style={{ height: `${(d.mentorship / total) * 100}%` }}></div>
                        <div className="bg-[#e8e8e9] w-full rounded-b-sm" style={{ height: `${(d.adhoc / total) * 100}%` }}></div>
                      </div>
                      <span className="text-[10px] text-[#71717a] font-[JetBrains_Mono]">S{d.sprint}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#e4e4e7] text-xs">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#000000] rounded-sm"></div>Core Projects</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#e11d48] rounded-sm"></div>Critical Incidents</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#a1a1aa] rounded-sm"></div>Mentorship & Admin</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#e8e8e9] rounded-sm"></div>Ad-Hoc</div>
            </div>
          </div>

          {/* Capacity Rebalance Section */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-5">
            <h3 className="font-semibold">Capacity Rebalance Proposals</h3>
            <div className="space-y-3">
              {reassignments.map((r, idx) => (
                <div key={idx} className="p-4 bg-[#f9f9fa] rounded-lg border border-[#e4e4e7] space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm">{r.project}</p>
                      <p className="text-xs text-[#71717a]">→ {r.to}</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-medium font-[JetBrains_Mono] bg-[#eef2ff] text-[#6366f1] rounded">{r.hours}h</span>
                  </div>
                  <p className="text-xs text-[#71717a]">{r.reason}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#71717a]">Manager Action Notes</label>
              <textarea
                value={managerNotes}
                onChange={e => setManagerNotes(e.target.value)}
                className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000] resize-none"
                rows={3}
                placeholder="Add notes about this rebalance..."
              />
            </div>
            <button className="w-full px-4 py-3 bg-[#000000] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined text-[18px]">send</span>Schedule Rebalance
            </button>
          </div>
        </div>

        {/* Sprint-by-Sprint Allocation Detail Table */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e4e4e7]">
            <h3 className="font-semibold">Sprint-by-Sprint Allocation Detail</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f9f9fa]">
                <tr>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Sprint</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Est. Capacity</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Allocated Hours</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Variance</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Overtime Status</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e4e4e7]">
                {sprints.map((s, idx) => {
                  const variance = s.allocated - s.capacity;
                  const isOver = variance > 0;
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9fa]'}>
                      <td className="px-5 py-3 font-mono font-medium">Sprint {s.sprint}</td>
                      <td className="px-5 py-3 font-mono">{s.capacity}h</td>
                      <td className="px-5 py-3 font-mono font-medium">{s.allocated}h</td>
                      <td className="px-5 py-3">
                        <span className={`font-mono font-medium ${isOver ? 'text-[#e11d48]' : 'text-[#10b981]'}`}>
                          {isOver ? '+' : ''}{variance.toFixed(1)}h
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          s.overtime === 'Heavy' ? 'bg-[#fff1f2] text-[#e11d48]' :
                          s.overtime === 'Moderate' ? 'bg-[#fffbeb] text-[#f59e0b]' :
                          s.overtime === 'Light' ? 'bg-[#eef2ff] text-[#6366f1]' :
                          'bg-[#ecfdf5] text-[#10b981]'
                        }`}>
                          {s.overtime}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-[#71717a]">{s.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};