import React, { useState } from 'react';

export const Screen6Heatmap = () => {
  const [selectedRow, setSelectedRow] = useState<string | null>('David Kim');

  const employees = [
    { name: 'David Kim', division: 'Platform', role: 'Staff Engineer', highlight: true },
    { name: 'Sarah Lin', division: 'Backend', role: 'Senior Engineer' },
    { name: 'Maria Santos', division: 'Platform', role: 'Senior Engineer' },
    { name: 'Alex Chen', division: 'Observability', role: 'Staff Engineer' },
    { name: 'Jordan Vance', division: 'Backend', role: 'Senior Engineer' },
    { name: 'Priya Nair', division: 'Data', role: 'Lead Engineer' },
    { name: 'Liam Walker', division: 'Platform', role: 'Senior Engineer' },
    { name: 'Emily Chen', division: 'Data', role: 'Senior Engineer' },
    { name: 'Carlos Rodriguez', division: 'Observability', role: 'Lead Engineer' },
    { name: 'Wei Zhang', division: 'Backend', role: 'Staff Engineer' },
  ];

  const sprints = ['Sprint 32', 'Sprint 33', 'Sprint 34', 'Sprint 35', 'Sprint 36', 'Sprint 37', 'Sprint 38', 'Sprint 39', 'Sprint 40', 'Sprint 41', 'Sprint 42', 'Sprint 43'];

  const heatmapData: Record<string, number[]> = {
    'David Kim': [78, 82, 85, 90, 92, 95, 88, 85, 83, 97, 96, 72],
    'Sarah Lin': [65, 70, 72, 75, 78, 80, 76, 74, 72, 82, 78, 70],
    'Maria Santos': [72, 74, 76, 78, 80, 82, 79, 77, 75, 84, 81, 74],
    'Alex Chen': [68, 70, 72, 74, 76, 78, 75, 73, 71, 80, 77, 68],
    'Jordan Vance': [55, 58, 60, 62, 64, 66, 63, 61, 59, 68, 65, 55],
    'Priya Nair': [80, 82, 84, 86, 88, 90, 87, 85, 83, 92, 89, 82],
    'Liam Walker': [70, 72, 74, 76, 78, 80, 77, 75, 73, 82, 79, 72],
    'Emily Chen': [50, 52, 54, 56, 58, 60, 57, 55, 53, 62, 59, 50],
    'Carlos Rodriguez': [85, 87, 89, 91, 93, 95, 92, 90, 88, 96, 94, 86],
    'Wei Zhang': [62, 64, 66, 68, 70, 72, 69, 67, 65, 74, 71, 63],
  };

  const getCellColor = (value: number) => {
    if (value >= 95) return 'bg-[#e11d48] text-white';
    if (value >= 85) return 'bg-[#f59e0b] text-white';
    if (value >= 70) return 'bg-[#6366f1] text-white';
    return 'bg-[#10b981] text-white';
  };

  const departments = [
    { name: 'Platform Infrastructure', count: 18, capacity: 78, color: 'bg-[#000000]' },
    { name: 'Backend Services', count: 14, capacity: 72, color: 'bg-[#6366f1]' },
    { name: 'Observability & SRE', count: 12, capacity: 68, color: 'bg-[#10b981]' },
    { name: 'Data Engineering', count: 10, capacity: 65, color: 'bg-[#f59e0b]' },
  ];

  const teams = [
    { name: 'Distributed Systems', utilization: 92 },
    { name: 'API Gateway', utilization: 78 },
    { name: 'Data Pipeline', utilization: 71 },
    { name: 'Platform Core', utilization: 85 },
    { name: 'Observability', utilization: 68 },
  ];

  const recommendations = [
    {
      project: 'Kafka Mesh Migration',
      from: 'David Kim',
      to: 'Sarah Lin',
      justification: 'Sarah completed consensus protocol deep-dive. Available capacity: 8.2 hrs/wk.',
      hoursSaved: 16,
    },
    {
      project: 'Observability Rewrite',
      from: 'David Kim',
      to: 'Liam Walker',
      justification: 'Liam led Prometheus migration. Project aligns with his Q4 growth plan.',
      hoursSaved: 12,
    },
  ];

  const historyLog = [
    { timestamp: '2026-09-10 14:32', action: 'Delegated Observability Scrub to Alex Chen', status: 'Implemented' },
    { timestamp: '2026-09-08 09:15', action: 'Shifted Hiring Panel duties to Liam Walker', status: 'Approved' },
    { timestamp: '2026-09-05 16:44', action: 'Suggested Kafka Quorum handoff to Sarah Lin', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9fa] font-[Inter] text-[#09090b]">
      

      <div className="max-w-[1920px] mx-auto p-6 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a]">
          <span className="font-medium text-[#09090b]">WORKFORCE_OS</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span>ANALYTICS</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span className="font-medium text-[#09090b]">CAPACITY HEATMAP</span>
        </nav>

        {/* Title Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Capacity & Workload Heatmap</h1>
            <p className="text-[#71717a] text-sm">Enterprise Heat Map · Sprint Utilization Distribution Across Engineering</p>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000]">
              <option>All Divisions</option>
              <option>Platform Infrastructure</option>
              <option>Backend Services</option>
              <option>Observability & SRE</option>
              <option>Data Engineering</option>
            </select>
            <select className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000]">
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
        </div>

        {/* Top-Level Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#71717a]">Team Utilization</p>
              <p className="text-2xl font-bold font-[JetBrains_Mono]">96.2%</p>
            </div>
            <span className="material-symbols-outlined text-[32px] text-[#71717a]">trending_up</span>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#71717a]">Available Capacity</p>
              <p className="text-2xl font-bold font-[JetBrains_Mono]">38.5 hrs</p>
            </div>
            <span className="material-symbols-outlined text-[32px] text-[#10b981]">check_circle</span>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#71717a]">Overloaded Count</p>
              <p className="text-2xl font-bold font-[JetBrains_Mono] text-[#e11d48]">2</p>
            </div>
            <span className="material-symbols-outlined text-[32px] text-[#e11d48]">warning</span>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#71717a]">Avg Utilization</p>
              <p className="text-2xl font-bold font-[JetBrains_Mono]">78.4%</p>
            </div>
            <span className="material-symbols-outlined text-[32px] text-[#71717a]">analytics</span>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#71717a]">Sprints Tracked</p>
              <p className="text-2xl font-bold font-[JetBrains_Mono]">12</p>
            </div>
            <span className="material-symbols-outlined text-[32px] text-[#71717a]">groups</span>
          </div>
        </div>

        {/* Main Grid: Sidebar + Heatmap + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department Breakdown */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
              <h3 className="font-semibold text-sm">Department Breakdown</h3>
              <div className="space-y-3">
                {departments.map((dept, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium truncate">{dept.name}</span>
                      <span className="text-[#71717a] font-mono">{dept.count}</span>
                    </div>
                    <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                      <div className={`h-full ${dept.color} rounded-full`} style={{ width: `${dept.capacity}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Average Bandwidth by Team */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-3">
              <h3 className="font-semibold text-sm">Average Bandwidth by Team</h3>
              <div className="space-y-2">
                {teams.map((team, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${team.utilization > 90 ? 'bg-[#e11d48]' : team.utilization > 80 ? 'bg-[#f59e0b]' : 'bg-[#10b981]'}`}></span>
                      <span>{team.name}</span>
                    </div>
                    <span className="font-mono font-medium">{team.utilization}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heatmap Grid (center) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
            <div className="p-4 border-b border-[#e4e4e7]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                <input
                  type="text"
                  placeholder="Search employees..."
                  className="px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm flex-1 bg-[#f9f9fa] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-[#f9f9fa]">
                  <tr>
                    <th className="px-3 py-3 text-left font-medium text-[#71717a] sticky left-0 bg-[#f9f9fa] z-10 min-w-[160px]">Employee</th>
                    {sprints.map(s => (
                      <th key={s} className="px-2 py-3 text-center font-medium text-[#71717a] min-w-[60px]">{s.replace('Sprint ', 'S')}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e4e7]">
                  {employees.map((emp, empIdx) => (
                    <tr
                      key={empIdx}
                      className={`${emp.highlight ? 'bg-[#fff1f2] border-l-2 border-l-[#e11d48]' : empIdx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9fa]'} ${selectedRow === emp.name ? 'ring-2 ring-[#000000] ring-inset' : ''}`}
                      onClick={() => setSelectedRow(emp.name)}
                    >
                      <td className="px-3 py-2.5 sticky left-0 z-10">
                        <div className="font-medium text-[#09090b]">{emp.name}</div>
                        <div className="text-[#71717a] text-[10px]">{emp.role} · {emp.division}</div>
                      </td>
                      {(heatmapData[emp.name] || []).map((val, sprintIdx) => (
                        <td key={sprintIdx} className="px-1 py-2 text-center">
                          <div className={`w-full h-8 rounded flex items-center justify-center font-mono font-medium ${getCellColor(val)}`}>
                            {val}%
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Heatmap Legend */}
            <div className="px-4 py-3 border-t border-[#e4e4e7] bg-[#f9f9fa]">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-medium text-[#71717a]">Utilization:</span>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-4 rounded bg-[#10b981]"></div><span>&lt;70%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-4 rounded bg-[#6366f1]"></div><span>70-85%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-4 rounded bg-[#f59e0b]"></div><span>85-95%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-4 rounded bg-[#e11d48]"></div><span>&gt;95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: AI Rebalancer */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6366f1]">auto_awesome</span>
                <h3 className="font-semibold text-sm">AI-Powered Workload Rebalancer</h3>
              </div>
              <div className="space-y-3">
                {recommendations.map((rec, idx) => (
                  <div key={idx} className="p-3 bg-[#f9f9fa] rounded-lg border border-[#e4e4e7] space-y-2">
                    <div className="text-xs">
                      <span className="font-medium text-[#09090b]">Move {rec.project}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#71717a]">
                      <span className="font-medium">{rec.from}</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      <span className="font-medium text-[#000000]">{rec.to}</span>
                      <span className="px-1.5 py-0.5 bg-[#eef2ff] text-[#6366f1] rounded font-mono">{rec.hoursSaved}h saved</span>
                    </div>
                    <p className="text-[10px] text-[#71717a] leading-relaxed">{rec.justification}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-2 py-1.5 bg-[#10b981] text-white text-xs font-medium rounded flex items-center justify-center gap-1 hover:bg-[#0d9668] transition-colors">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>Approve
                      </button>
                      <button className="flex-1 px-2 py-1.5 bg-[#fff1f2] text-[#e11d48] text-xs font-medium rounded flex items-center justify-center gap-1 hover:bg-[#ffe4e6] transition-colors">
                        <span className="material-symbols-outlined text-[14px]">close</span>Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Approved Actions / History Log */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e4e4e7]">
            <h3 className="font-semibold">Approved Actions / History Log</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f9f9fa]">
                <tr>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Timestamp</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Action</th>
                  <th className="px-5 py-3 text-left font-medium text-[#71717a] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e4e4e7]">
                {historyLog.map((log, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9fa]'}>
                    <td className="px-5 py-3 font-mono text-xs text-[#71717a]">{log.timestamp}</td>
                    <td className="px-5 py-3">{log.action}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        log.status === 'Implemented' ? 'bg-[#ecfdf5] text-[#10b981]' :
                        log.status === 'Approved' ? 'bg-[#eef2ff] text-[#6366f1]' :
                        'bg-[#fffbeb] text-[#f59e0b]'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};