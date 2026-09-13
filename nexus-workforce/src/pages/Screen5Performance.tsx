import React, { useState } from 'react';

export const Screen5Performance = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const tabs = [
    { id: 'skills', label: 'Skill Matrix & Competency', count: 18 },
    { id: 'workload', label: 'Workload & Capacity History', icon: 'schedule' },
    { id: 'performance', label: 'Performance Snapshot', icon: 'star' },
    { id: 'engagements', label: 'Project Engagements', icon: 'work' },
  ];

  const metrics = [
    { title: 'Overall Performance Score', value: '94.2/100', badge: 'Top 10% Staff Engineer', icon: 'verified', color: 'bg-[#ecfdf5] text-[#10b981]' },
    { title: 'OKR Achievement %', value: '91.5%', subtitle: '4/4 Objectives On Track', icon: 'flag', color: 'bg-[#eef2ff] text-[#6366f1]' },
    { title: 'Reliability (On-Time SLA)', value: '98.4%', subtitle: 'Zero SLA Breaches (6 Mo)', icon: 'check_circle', color: 'bg-[#ecfdf5] text-[#10b981]' },
    { title: 'Peer Praise Index', value: '17', subtitle: 'Compliments Received', icon: 'thumb_up', color: 'bg-[#fffbeb] text-[#f59e0b]' },
  ];

  const radarMetrics = [
    { label: 'Self-Evaluation', value: 92 },
    { label: 'Manager Review', value: 95 },
    { label: 'Peer Reviews', value: 96 },
    { label: 'Project Impact', value: 98 },
    { label: 'Mentorship', value: 88 },
  ];

  const performanceBreakdown = [
    { label: 'Task Velocity', value: 93, color: 'bg-[#000000]' },
    { label: 'Code Quality Review', value: 98, color: 'bg-[#10b981]' },
    { label: 'Deadline Adherence', value: 88, color: 'bg-[#6366f1]' },
    { label: 'Sprint Productivity', value: 94, color: 'bg-[#000000]' },
    { label: 'Mentorship & Guidance', value: 90, color: 'bg-[#f59e0b]' },
  ];

  const trendData = [
    { sprint: 'S36', score: 91 },
    { sprint: 'S37', score: 92 },
    { sprint: 'S38', score: 93 },
    { sprint: 'S39', score: 92 },
    { sprint: 'S40', score: 94 },
    { sprint: 'S41', score: 95 },
    { sprint: 'S42', score: 94 },
  ];

  const okrs = [
    { title: 'Architect & Deploy Distributed Raft Consensus Engine', progress: 95, target: 'Q4 S3' },
    { title: 'Reduce Kafka Consumer Lag by 40%', progress: 100, target: 'Completed' },
    { title: 'Mentor 3 Senior Engineers to L6 Level', progress: 85, target: 'Q4 S4' },
    { title: 'Publish eBPF Observability Whitepaper', progress: 70, target: 'Q1' },
  ];

  const leadershipMetrics = [
    { label: 'Strategic Vision', value: 90 },
    { label: 'Technical Leadership', value: 96 },
    { label: 'Cross-functional Impact', value: 88 },
    { label: 'Team Mentorship', value: 92 },
    { label: 'Execution Excellence', value: 95 },
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
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-[#000000] text-[#09090b]'
                    : 'border-transparent text-[#71717a] hover:text-[#09090b] hover:bg-[#f9f9fa]'
                }`}
              >
                {tab.id === 'performance' && <span className="material-symbols-outlined text-[18px]">star</span>}
                {tab.label}
                {tab.count && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-[#000000] text-white rounded-full">{tab.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-[#71717a]">{m.title}</h4>
                <span className="material-symbols-outlined text-[24px] text-[#71717a]">{m.icon}</span>
              </div>
              <div className="text-2xl font-bold font-[JetBrains_Mono]">{m.value}</div>
              {m.badge ? (
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${m.color}`}>
                  {m.badge}
                </span>
              ) : (
                <p className="text-sm text-[#71717a]">{m.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Multi-Rater Feedback Radar */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-4">
              <h3 className="font-semibold">Multi-Rater Feedback Pulse</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {radarMetrics.map((rm, idx) => (
                  <div key={idx} className="bg-[#f9f9fa] p-4 rounded-lg border border-[#e4e4e7] text-center space-y-2">
                    <p className="text-xs text-[#71717a] font-medium">{rm.label}</p>
                    <p className="text-xl font-bold font-[JetBrains_Mono]">{rm.value}%</p>
                    <div className="h-1.5 bg-[#e8e8e9] rounded-full overflow-hidden">
                      <div className="h-full bg-[#000000] rounded-full" style={{ width: `${rm.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Breakdown */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-4">
              <h3 className="font-semibold">Core Performance Indicators</h3>
              <div className="space-y-4">
                {performanceBreakdown.map((pb, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{pb.label}</span>
                      <span className="font-mono font-medium">{pb.value}%</span>
                    </div>
                    <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                      <div className={`h-full ${pb.color} rounded-full`} style={{ width: `${pb.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Chart Section */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-4">
              <h3 className="font-semibold">Performance Trend Progression</h3>
              <div className="flex items-end gap-3 h-[180px] pt-4">
                {trendData.map((td, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-xs font-mono font-medium">{td.score}</span>
                    <div
                      className="w-full bg-[#000000] rounded-t-md transition-all hover:bg-[#6366f1]"
                      style={{ height: `${(td.score - 80) * 5}%` }}
                    ></div>
                    <span className="text-xs text-[#71717a] font-mono">{td.sprint}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* AI Impact Analysis */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6366f1]">auto_awesome</span>
                <h3 className="font-semibold">AI Impact Analysis</h3>
              </div>
              <p className="text-sm text-[#71717a] leading-relaxed">
                David consistently operates in the top 5th percentile for system reliability and throughput. His work on the Kafka consensus layer directly unblocked 3 downstream product squads in Q3.
              </p>
            </div>

            {/* Promotion Candidacy */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Promotion Candidacy</h3>
                <span className="px-2 py-0.5 text-xs font-medium bg-[#ecfdf5] text-[#10b981] rounded">Recommended</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>L7 Principal Architect Fit</span>
                  <span className="font-bold font-[JetBrains_Mono]">88/100</span>
                </div>
                <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10b981] rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <p className="text-xs text-[#71717a]">Target Promotion Window: H1 2027</p>
            </div>

            {/* Goal Alignment & OKR Tracker */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
              <h3 className="font-semibold">OKR Tracker</h3>
              <div className="space-y-4">
                {okrs.map((okr, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-start justify-between text-xs">
                      <span className="font-medium text-[#09090b] flex-1 pr-2">{okr.title}</span>
                      <span className="font-mono text-[#71717a]">{okr.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#e8e8e9] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${okr.progress === 100 ? 'bg-[#10b981]' : 'bg-[#000000]'}`}
                        style={{ width: `${okr.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-[10px] text-[#71717a]">Target: {okr.target}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Radar (Bottom full width) */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-4">
          <h3 className="font-semibold">Leadership & Strategic Competency Radar</h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {leadershipMetrics.map((lm, idx) => (
              <div key={idx} className="p-4 bg-[#f9f9fa] rounded-lg border border-[#e4e4e7] space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-xs">{lm.label}</span>
                  <span className="font-bold font-mono text-xs">{lm.value}%</span>
                </div>
                <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                  <div className="h-full bg-[#000000] rounded-full" style={{ width: `${lm.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};