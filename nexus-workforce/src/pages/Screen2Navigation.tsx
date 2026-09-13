import React from 'react';

export const Screen2Navigation: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#a1a1aa]">
            <span>WORKFORCE_OS</span><span>/</span>
            <span className="text-[#71717a]">SYSTEMS</span><span>/</span>
            <span className="text-black font-medium">OVERVIEW &amp; COMMAND</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="font-headline-lg text-2xl font-semibold text-black tracking-tight">Executive Command Surface</h1>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full font-mono-code text-xs bg-[#ecfdf5] text-[#10b981]">LIVE_ENGINE_V2.14</span>
          </div>
          <p className="font-body-sm text-xs text-[#71717a]">
            Welcome back, Elena · Acme Enterprise Telemetry updated 32s ago across 4 engineering clusters
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 px-3.5 rounded-lg bg-white text-black shadow-sm border border-[#e4e4e7] hover:bg-[#f3f3f4] transition-all flex items-center gap-2 font-label-default text-xs">
            <span className="material-symbols-outlined text-sm text-[#71717a]">radar</span> Run Workforce Scan
          </button>
          <button className="h-9 px-3.5 rounded-lg bg-white text-black shadow-sm border border-[#e4e4e7] hover:bg-[#f3f3f4] transition-all flex items-center gap-2 font-label-default text-xs">
            <span className="material-symbols-outlined text-sm text-[#71717a]">ios_share</span> Export Report
          </button>
          <button className="h-9 px-4 rounded-lg bg-black text-white shadow hover:bg-neutral-800 transition-all flex items-center gap-1.5 font-label-default text-xs">
            <span className="material-symbols-outlined text-base">person_add</span> Invite Member
          </button>
        </div>
      </div>

      {/* Operational Telemetry Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: 'business', label: 'Tenant Identity', value: 'Acme Corp', badge: 'TIER-1', badgeColor: 'bg-[#eef2ff] text-[#6366f1]' },
          { icon: 'speed', label: 'Global Allocation Density', value: '84.2%', badge: 'OPTIMAL', badgeColor: 'bg-[#ecfdf5] text-[#10b981]' },
          { icon: 'psychology', label: 'AI Dispatch Pipeline', value: '142 Queued', badge: 'AUTONOMOUS', badgeColor: 'bg-[#fffbeb] text-[#f59e0b]' },
        ].map((chip) => (
          <div key={chip.label} className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm border border-[#e4e4e7]">
            <div className="flex items-center gap-2.5">
              <span className={`w-2 h-2 rounded-full ${chip.badgeColor.includes('green') ? 'bg-[#10b981]' : chip.badgeColor.includes('yellow') ? 'bg-[#f59e0b]' : 'bg-[#6366f1]'} ${chip.badgeColor.includes('green') ? 'animate-pulse' : ''}`}></span>
              <span className="font-label-default text-xs text-[#71717a]">{chip.label}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono-metric-sm font-semibold text-black">{chip.value}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${chip.badgeColor}`}>{chip.badge}</span>
            </div>
          </div>
        ))}
      </div>

      {/* KPI 4-Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { title: 'Total Active Talent', value: '248', delta: '+12 q/q', deltaColor: 'text-[#10b981]', bottom: 'Deployed Ratio', bottomVal: '98.4% (244/248)', icon: 'groups' },
          { title: 'Capacity Allocation', value: '84.2%', badge: 'HEALTHY', badgeColor: 'bg-[#ecfdf5] text-[#10b981]', bottomLeft: '14 Overloaded', bottomRight: '8 Idled', icon: 'speed' },
          { title: 'Active Strategic Sprints', value: '18', sub: 'Projects', warning: '4 need tech leads', sprint: 'SPRINT 42', icon: 'rocket_launch' },
          { title: 'AI Match Confidence', value: '91.4%', delta: '+3.2%', deltaColor: 'text-[#10b981]', bottom: 'Sample Base', bottomVal: '142 Task Pairs', icon: 'auto_awesome' },
        ].map((kpi) => (
          <div key={kpi.title} className="p-5 rounded-lg bg-white shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-[#e4e4e7]">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-[#71717a] uppercase tracking-wider">{kpi.title}</span>
                <span className="material-symbols-outlined text-[#a1a1aa] text-lg">{kpi.icon}</span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono-metric-lg text-3xl font-bold text-black tracking-tight">{kpi.value}</span>
                {kpi.delta && <span className="font-label-sm text-xs text-[#10b981] flex items-center"><span className="material-symbols-outlined text-xs">arrow_upward</span>{kpi.delta}</span>}
                {kpi.badge && <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#ecfdf5] text-[#10b981]">{kpi.badge}</span>}
                {kpi.sub && <span className="text-xs text-[#71717a]">{kpi.sub}</span>}
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between bg-[#fafafa] -mx-5 -mb-5 px-5 py-2.5 rounded-b-lg">
              {kpi.bottom ? (
                <>
                  <span className="text-xs text-[#71717a]">{kpi.bottom}</span>
                  <span className="font-mono-code text-xs text-black font-medium">{kpi.bottomVal}</span>
                </>
              ) : kpi.bottomLeft ? (
                <>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#e11d48]"></span><span className="text-xs text-[#71717a]">{kpi.bottomLeft}</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span><span className="text-xs text-[#71717a]">{kpi.bottomRight}</span></div>
                </>
              ) : (
                <>
                  <span className="text-xs text-[#e11d48] flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">warning</span>{kpi.warning}
                  </span>
                  <span className="font-mono-code text-xs text-[#a1a1aa]">{kpi.sprint}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Command Center + Alerts Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Command Center */}
        <div className="lg:col-span-7 rounded-lg bg-white shadow-sm border border-[#e4e4e7] overflow-hidden">
          <div className="p-4 bg-[#fafafa] flex items-center justify-between border-b border-[#e4e4e7]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-black text-lg">terminal</span>
              <span className="font-bold text-black text-xs">Universal Command Dispatch</span>
              <span className="px-1.5 py-0.5 rounded font-mono-code text-[10px] bg-[#e8e8e9] text-[#71717a]">Ctrl + K</span>
            </div>
            <div className="flex items-center gap-1 text-[#a1a1aa]">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span className="font-mono-code text-[11px] text-[#71717a]">INDEXED: 1,489</span>
            </div>
          </div>
          <div className="p-5 space-y-5">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a] text-lg">search</span>
              <input type="text" placeholder="Type a prompt or jump to employee, project, capability..." className="w-full h-11 pl-10 pr-24 rounded-lg bg-[#f3f3f4] font-body-default text-sm text-black placeholder:text-[#a1a1aa] outline-none focus:bg-white focus:ring-1 focus:ring-black shadow-inner transition-colors" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded font-mono-code text-[11px] bg-[#e2e2e3] text-[#71717a]">↵ TO EXECUTE</span>
            </div>
            <div className="space-y-2">
              <span className="font-label-sm text-xs text-[#71717a] uppercase tracking-wider">Semantic Prompt Templates</span>
              <div className="flex flex-wrap gap-2">
                {['Find senior Go developers with k8s', 'Simulate Q4 backend workload', 'Marketing division hierarchy'].map((q) => (
                  <button key={q} className="px-2.5 py-1 rounded bg-[#f3f3f4] hover:bg-[#eeeeef] text-black font-mono-code text-xs transition-colors flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-[#71717a]">manage_search</span>
                    {q}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <span className="font-label-sm text-xs text-[#71717a] uppercase tracking-wider">Fast Navigation Vectors</span>
              {[
                { name: 'Elena Rostova', desc: 'Engineering Lead / Cloud Infra · 42 FTEs', badge: 'PROFILE', badgeColor: 'bg-[#e8e8e9] text-[#71717a]' },
                { name: 'Acme Cloud Migration · Phase 3', desc: '8 of 11 microservices ported · Deadline in 19 days', badge: 'PRIORITY P0', badgeColor: 'bg-[#fffbeb] text-[#f59e0b]' },
                { name: 'Sprint 42 Resource Gap Simulation', desc: 'Identified deficit: -140 engineering dev-hours', badge: 'BOTTLENECK', badgeColor: 'bg-[#fff1f2] text-[#e11d48]' },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between p-2.5 rounded-lg bg-[#f3f3f4] hover:bg-[#eeeeef] transition-all group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">{item.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
                    <div>
                      <span className="font-bold text-black text-xs block group-hover:underline">{item.name}</span>
                      <span className="text-[11px] text-[#71717a]">{item.desc}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-mono-code text-[11px] ${item.badgeColor}`}>{item.badge}</span>
                    <span className="material-symbols-outlined text-sm text-[#a1a1aa] group-hover:text-black group-hover:translate-x-0.5 transition-all">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workforce Discrepancies Alert */}
        <div className="lg:col-span-5 rounded-lg bg-white shadow-sm border border-[#e4e4e7] overflow-hidden">
          <div className="p-4 bg-[#fafafa] flex items-center justify-between border-b border-[#e4e4e7]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e11d48] text-lg">crisis_alert</span>
              <span className="font-bold text-black text-xs">Workforce Discrepancies</span>
            </div>
            <span className="px-2 py-0.5 rounded-full font-mono-code text-xs bg-[#fff1f2] text-[#e11d48] font-medium">3 REQUIRES_ACTION</span>
          </div>
          <div className="p-4 space-y-3">
            {[
              { severity: 'danger', title: 'Critical Allocation Void', time: 'T-MINUS 4H', msg: '3 core backend integration tasks are unassigned in Acme Cloud Migration. Sprint delivery date at 34% jeopardy.', action: 'Auto-Match with AI', actionIcon: 'bolt' },
              { severity: 'warning', title: 'Chronic Burnout Warning', time: 'UTILIZATION', msg: 'David Kim load reached 96% for 2 consecutive sprint cycles (Target: 75-80%).', action: 'Rebalance Workload', actionIcon: 'balance' },
              { severity: 'success', title: 'Velocity Surplus Detected', time: 'OKR_INSIGHT', msg: 'Frontend Platform team OKR pace is tracking +15% above forecast. Capable of absorbing downstream migration specs.', action: 'View Breakdown', actionIcon: 'arrow_forward' },
            ].map((alert) => (
              <div key={alert.title} className={`p-3.5 rounded-lg ${alert.severity === 'danger' ? 'bg-[#fff1f2]/40' : alert.severity === 'warning' ? 'bg-[#fffbeb]/40' : 'bg-[#ecfdf5]/40'}`}>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${alert.severity === 'danger' ? 'bg-[#e11d48]' : alert.severity === 'warning' ? 'bg-[#f59e0b]' : 'bg-[#10b981]'}`}></span>
                    <span className={`font-bold text-xs ${alert.severity === 'danger' ? 'text-[#e11d48]' : alert.severity === 'warning' ? 'text-[#f59e0b]' : 'text-[#10b981]'}`}>{alert.title}</span>
                  </div>
                  <span className="font-mono-code text-[10px] text-[#a1a1aa]">{alert.time}</span>
                </div>
                <p className="text-xs text-black leading-relaxed mb-2">{alert.msg}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono-code text-[11px] text-[#71717a]">{alert.severity === 'danger' ? 'MATCH CANDIDATES: 4 ELIGIBLE' : alert.severity === 'warning' ? 'OVERLOAD: +14 HRS/WK' : 'SURPLUS: 3.5 DAYS'}</span>
                  <button className={`h-7 px-2.5 rounded font-label-default text-xs flex items-center gap-1 shadow-sm transition-colors ${
                    alert.severity === 'danger' ? 'bg-[#e11d48] text-white hover:bg-rose-700' : 'bg-white text-black border border-[#e4e4e7] hover:bg-[#f3f3f4]'
                  }`}>
                    <span className="material-symbols-outlined text-xs">{alert.actionIcon}</span>
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Org + Heatmap + Audit Trail 3-col */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex flex-col rounded-lg bg-white shadow-sm border border-[#e4e4e7] p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#71717a]">account_tree</span><span className="font-bold text-black text-xs">Org Hierarchy Pulse</span></div>
            <span className="font-mono-code text-[11px] text-[#a1a1aa]">MOD_02</span>
          </div>
          <div className="space-y-3">
            {[{ name: 'Cloud Platform Engineering', ftes: '88 FTEs', pct: 92 }, { name: 'Core Product & Design', ftes: '64 FTEs', pct: 78 }, { name: 'Data Science & ML Ops', ftes: '52 FTEs', pct: 86 }, { name: 'Security & Compliance Hub', ftes: '44 FTEs', pct: 80 }].map((d) => (
              <div key={d.name}>
                <div className="flex justify-between text-xs mb-1"><span className="text-black">{d.name}</span><span className="font-mono-code text-[#71717a]">{d.ftes} • {d.pct}% alloc</span></div>
                <div className="w-full h-2 rounded-full bg-[#eeeeef] overflow-hidden"><div className="h-full bg-black rounded-full" style={{ width: `${d.pct}%` }}></div></div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 bg-[#fafafa] -mx-5 -mb-5 p-4 rounded-b-lg flex items-center justify-between">
            <span className="text-xs text-[#71717a]">Explore 5 operational tiers</span>
            <a className="font-label-default text-xs text-black hover:underline flex items-center gap-1 font-medium" href="#"><span>Open Org Chart</span><span className="material-symbols-outlined text-sm">open_in_new</span></a>
          </div>
        </div>

        {/* Load Variance Sparkline */}
        <div className="flex flex-col rounded-lg bg-white shadow-sm border border-[#e4e4e7] p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#71717a]">show_chart</span><span className="font-bold text-black text-xs">Load Variance Sparkline</span></div>
            <span className="font-mono-code text-[11px] text-[#a1a1aa]">MOD_07</span>
          </div>
          <p className="text-xs text-[#71717a] mb-4">Weekly aggregate cluster utilization over the last 14 business days</p>
          <div className="relative w-full h-28 bg-[#f3f3f4] rounded-lg p-2 flex items-end">
            <svg className="w-full h-full text-black overflow-visible" fill="none" viewBox="0 0 300 80">
              <defs><linearGradient id="chartGrad" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stopColor="currentColor" stopOpacity="0.18"/><stop offset="100%" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs>
              <path d="M0,65 L25,58 L50,62 L75,45 L100,50 L125,38 L150,42 L175,30 L200,34 L225,22 L250,28 L275,18 L300,24 L300,80 L0,80 Z" fill="url(#chartGrad)"/>
              <path d="M0,65 L25,58 L50,62 L75,45 L100,50 L125,38 L150,42 L175,30 L200,34 L225,22 L250,28 L275,18 L300,24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="0" x2="300" y1="26" y2="26" stroke="#e11d48" strokeDasharray="3,3" strokeWidth="1" opacity="0.7"/>
              <circle cx="275" cy="18" fill="#e11d48" r="3.5"/>
            </svg>
          </div>
          <div className="flex items-center justify-between mt-3 font-mono-code text-[11px] text-[#71717a]">
            <span>DAY -14: 71.2%</span>
            <span className="text-[#e11d48] font-medium">PEAK: 87.8% (OCT 21)</span>
            <span className="text-black font-medium">CURRENT: 84.2%</span>
          </div>
        </div>

        {/* AI Audit Trail */}
        <div className="flex flex-col rounded-lg bg-white shadow-sm border border-[#e4e4e7] p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#71717a]">history_edu</span><span className="font-bold text-black text-xs">AI Audit Trail</span></div>
            <span className="font-mono-code text-[11px] text-[#a1a1aa]">MOD_08</span>
          </div>
          <p className="text-xs text-[#71717a] mb-3">Latest autonomous decisions synthesized by the neural matching agent</p>
          <div className="space-y-3">
            {[
              { icon: 'check_circle', iconColor: 'text-[#10b981]', title: 'Shifted Sprint Task #882 → Marcus Vance', meta: 'Confidence 96.2% • Approved by Elena R.' },
              { icon: 'swap_horiz', iconColor: 'text-[#6366f1]', title: 'Backfilled Golang microservice lead role', meta: 'Confidence 89.0% • Scheduled 10:00 AM' },
              { icon: 'query_stats', iconColor: 'text-[#f59e0b]', title: 'Simulated 15% headcount stress on Q4 OKR', meta: 'Monte Carlo pass rate: 94.8%' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-2.5 p-2 rounded bg-[#f3f3f4]">
                <span className={`material-symbols-outlined text-base mt-0.5 ${item.iconColor}`}>{item.icon}</span>
                <div className="min-w-0">
                  <span className="text-xs text-black truncate font-medium block">{item.title}</span>
                  <span className="font-mono-code text-[11px] text-[#71717a]">{item.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Squad Leaders Table */}
      <div className="rounded-lg bg-white shadow-sm border border-[#e4e4e7] overflow-hidden">
        <div className="p-4 bg-[#fafafa] flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e4e4e7]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#71717a]">badge</span>
            <div>
              <h2 className="font-bold text-black text-xs">Active Squad Leaders &amp; Key Allocation Status</h2>
              <p className="text-[11px] text-[#71717a]">Cross-functional cluster anchors currently leading Tier-1 deliverables</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-mono-code text-[11px] text-[#71717a] mr-1">FILTER:</span>
            <button className="px-2.5 py-1 rounded bg-white text-black font-mono-code text-[11px] shadow-sm border border-[#e4e4e7]">ALL (248)</button>
            <button className="px-2.5 py-1 rounded text-[#71717a] hover:text-black font-mono-code text-[11px]">TECH LEADS</button>
            <button className="px-2.5 py-1 rounded text-[#71717a] hover:text-black font-mono-code text-[11px]">AT RISK</button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="h-10 bg-[#fafafa] font-label-sm text-[11px] text-[#71717a] uppercase tracking-wider border-b border-[#e4e4e7]">
                <th className="px-4 py-2 font-medium">Resource Identity</th>
                <th className="px-4 py-2 font-medium">Core Domain</th>
                <th className="px-4 py-2 font-medium">Active Anchor Project</th>
                <th className="px-4 py-2 font-medium">Capacity Band</th>
                <th className="px-4 py-2 font-medium">AI Match Fit</th>
                <th className="px-4 py-2 font-medium text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-black">
              {[
                { name: 'Elena Rostova', email: 'lead.infra@acme.internal', domain: 'Cloud Architecture', project: 'Acme Cloud Migration (Ph 3)', cap: 82, ai: '99.1%', aiColor: 'text-[#10b981]', capColor: 'bg-[#10b981]', action: 'Inspect', actionColor: '' },
                { name: 'David Kim', email: 'david.k@acme.internal', domain: 'Distributed Systems', project: 'Telemetry Kafka Pipeline', cap: 96, ai: '84.4%', aiColor: 'text-[#f59e0b]', capColor: 'bg-[#e11d48]', action: 'Rebalance', actionColor: 'bg-[#fff1f2] text-[#e11d48] hover:bg-rose-100' },
                { name: 'Sarah Lin', email: 'sarah.lin@acme.internal', domain: 'UX & Design Systems', project: 'Nexus Design Token System', cap: 74, ai: '97.8%', aiColor: 'text-[#10b981]', capColor: 'bg-[#10b981]', action: 'Inspect', actionColor: '' },
                { name: 'Alex Chen', email: 'a.chen@acme.internal', domain: 'Machine Learning (RL)', project: 'Autonomous Workforce Model v3', cap: 88, ai: '94.5%', aiColor: 'text-[#10b981]', capColor: 'bg-[#10b981]', action: 'Inspect', actionColor: '' },
              ].map((row) => (
                <tr key={row.name} className="h-12 hover:bg-[#fafafa] transition-colors border-b border-[#f4f4f5]">
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[11px]">{row.name.split(' ').map(n=>n[0]).join('')}</div>
                      <div className="flex flex-col">
                        <span className="font-medium text-black leading-tight">{row.name}</span>
                        <span className="font-mono-code text-[11px] text-[#71717a]">{row.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2"><span className="px-2 py-0.5 rounded font-mono-code text-[11px] bg-[#f3f3f4] text-black">{row.domain}</span></td>
                  <td className="px-4 py-2 font-medium">{row.project}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-mono-code text-xs font-semibold ${row.cap > 90 ? 'text-[#e11d48]' : 'text-black'}`}>{row.cap}%</span>
                      <div className="w-16 h-1.5 rounded-full bg-[#eeeeef] overflow-hidden"><div className={`h-full ${row.capColor} rounded-full`} style={{ width: `${row.cap}%` }}></div></div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`inline-flex items-center gap-1 font-mono-code text-[11px] ${row.aiColor} font-medium`}>
                      <span className="material-symbols-outlined text-xs">{row.ai.includes('99') || row.ai.includes('97') ? 'verified' : 'tune'}</span> {row.ai}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-right">
                    <button className={`h-7 px-2.5 rounded font-label-default text-xs transition-colors ${row.actionColor || 'bg-[#f3f3f4] hover:bg-[#eeeeef] text-black'}`}>{row.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-[#fafafa] flex items-center justify-between text-xs text-[#71717a] border-t border-[#e4e4e7]">
          <span>Showing 4 of 248 active enterprise contributors</span>
          <div className="flex items-center gap-2">
            <button className="h-7 px-2.5 rounded bg-white text-black shadow-sm hover:bg-[#f3f3f4] transition-colors disabled:opacity-40 border border-[#e4e4e7]">Previous</button>
            <span className="font-mono-code text-[11px]">1 / 62</span>
            <button className="h-7 px-2.5 rounded bg-white text-black shadow-sm hover:bg-[#f3f3f4] transition-colors border border-[#e4e4e7]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
