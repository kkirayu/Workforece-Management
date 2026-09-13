import React, { useState } from 'react';

export const Screen7Rebalance = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [riskAcknowledged, setRiskAcknowledged] = useState(false);

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-[#f9f9fa] flex items-center justify-center font-[Inter]">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-[#000000] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#1a1a1a]"
        >
          <span className="material-symbols-outlined">open_in_new</span>Open Rebalance Preview
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9fa] font-[Inter] text-[#09090b]">
      

      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
        {/* Modal */}
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-[720px] max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-[#e4e4e7] px-6 py-5 flex items-start justify-between z-10">
            <div>
              <h2 className="text-lg font-bold">Talent Rebalancing Protocol</h2>
              <p className="text-sm text-[#71717a] mt-1 max-w-[520px]">
                Preview the workload redistribution impact for David Kim before commitment. All changes are simulated until approval.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-[#f3f3f4] transition-colors -mt-1"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            {/* Bento Grid: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Task Delegations */}
              <div className="bg-[#f9f9fa] rounded-xl border border-[#e4e4e7] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#6366f1]">swap_horiz</span>
                  <h4 className="text-sm font-semibold">Task Delegations</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-5 h-5 rounded bg-[#eef2ff] text-[#6366f1] flex items-center justify-center text-[10px] font-bold">1</span>
                    <div>
                      <p className="font-medium">Kafka Mesh Migration</p>
                      <p className="text-[#71717a]">16h → Sarah Lin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-5 h-5 rounded bg-[#eef2ff] text-[#6366f1] flex items-center justify-center text-[10px] font-bold">2</span>
                    <div>
                      <p className="font-medium">Observability Scrub</p>
                      <p className="text-[#71717a]">12h → Liam Walker</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Capacity Utilization */}
              <div className="bg-[#f9f9fa] rounded-xl border border-[#e4e4e7] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#10b981]">engineering</span>
                  <h4 className="text-sm font-semibold">New Capacity Utilization</h4>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold font-[JetBrains_Mono] text-[#10b981]">78.2%</p>
                  <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10b981] rounded-full" style={{ width: '78.2%' }}></div>
                  </div>
                  <p className="text-[10px] text-[#71717a]">Within optimal range (70-85%)</p>
                </div>
              </div>

              {/* Burnout Trajectory */}
              <div className="bg-[#f9f9fa] rounded-xl border border-[#e4e4e7] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#f59e0b]">trending_down</span>
                  <h4 className="text-sm font-semibold">Burnout Trajectory</h4>
                </div>
                <div className="space-y-2">
                  <div className="h-16 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <path d="M10,10 L40,12 L80,15 L120,20 L160,35 L190,50" stroke="#e11d48" strokeWidth="2" strokeDasharray="4,3" fill="none" strokeLinecap="round" />
                      <path d="M10,10 L40,12 L80,15 L120,20 L160,35 L190,50" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
                      <circle cx="190" cy="50" r="3" fill="#10b981" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-[#10b981]">arrow_downward</span>
                    <p className="text-[10px] text-[#10b981] font-medium">Projected sustainable workload in 1 sprint</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workload Comparison Bar Chart */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
              <h4 className="font-semibold text-sm">Workload Comparison</h4>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Current State</span>
                    <span className="font-mono font-bold text-[#e11d48]">96.2%</span>
                  </div>
                  <div className="h-6 bg-[#e8e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#000000] rounded-full flex items-center justify-end pr-2" style={{ width: '96.2%' }}>
                      <span className="text-[10px] font-mono text-white font-medium">Overloaded</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">After Rebalance</span>
                    <span className="font-mono font-bold text-[#10b981]">78.2%</span>
                  </div>
                  <div className="h-6 bg-[#e8e8e9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10b981] rounded-full flex items-center justify-end pr-2" style={{ width: '78.2%' }}>
                      <span className="text-[10px] font-mono text-white font-medium">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Content (Strategic Rationale, Team Delta, Promotion Impact) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Strategic Rationale */}
              <div className="bg-[#f9f9fa] rounded-xl border border-[#e4e4e7] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#6366f1]">auto_awesome</span>
                  <h4 className="text-sm font-semibold">Strategic Rationale</h4>
                </div>
                <p className="text-xs text-[#71717a] leading-relaxed">
                  David's contributions are irreplaceable in the short-term consensus layer, but continued 96%+ utilization threatens Q4 delivery confidence. Sarah and Liam both have adjacent skills with verified competency. This rebalance preserves velocity while restoring sustainable capacity.
                </p>
              </div>

              {/* Affected Team Capacity Delta */}
              <div className="bg-[#f9f9fa] rounded-xl border border-[#e4e4e7] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#f59e0b]">move_down</span>
                  <h4 className="text-sm font-semibold">Team Capacity Delta</h4>
                </div>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">David Kim</span>
                    <span className="font-mono font-medium text-[#10b981]">-28h (↓18%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Sarah Lin</span>
                    <span className="font-mono font-medium text-[#f59e0b]">+16h (↑22%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Liam Walker</span>
                    <span className="font-mono font-medium text-[#f59e0b]">+12h (↑18%)</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#e4e4e7]">
                    <span className="font-medium">Net Team Velocity</span>
                    <span className="font-mono font-medium text-[#10b981]">-0h (Neutral)</span>
                  </div>
                </div>
              </div>

              {/* Promotion Impact */}
              <div className="bg-[#f9f9fa] rounded-xl border border-[#e4e4e7] p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#10b981]">shield</span>
                  <h4 className="text-sm font-semibold">Promotion Impact</h4>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <span className="material-symbols-outlined text-[#10b981]">check_circle</span>
                  <span className="text-sm font-medium text-[#10b981]">No Negative Impact</span>
                </div>
                <p className="text-xs text-[#71717a]">
                  Rebalancing strengthens the L7 candidacy case by demonstrating strategic capacity awareness and team-first leadership.
                </p>
              </div>
            </div>

            {/* Warning Section */}
            <div className="bg-[#fff1f2] rounded-xl border border-[#fecdd3] p-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e11d48]">warning</span>
                <h4 className="font-semibold text-[#e11d48]">What You're Missing by Not Rebalancing</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-[#fecdd3] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#e11d48]">warning</span>
                    <span className="text-xs font-medium">Missed Milestone</span>
                  </div>
                  <p className="text-[11px] text-[#71717a]">68% probability of missed Sprint 38 milestone if current load persists</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-[#fecdd3] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#e11d48]">warning</span>
                    <span className="text-xs font-medium">Critical Degradation</span>
                  </div>
                  <p className="text-[11px] text-[#71717a]">Critical consent layer degradation risk from rushed implementations under fatigue</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-[#fecdd3] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#e11d48]">warning</span>
                    <span className="text-xs font-medium">Knowledge Bottleneck</span>
                  </div>
                  <p className="text-[11px] text-[#71717a]">Knowledge bottlenecks forming in consensus and Kafka sub-systems</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="space-y-3 pt-2">
              <button
                className="w-full px-6 py-3.5 bg-[#000000] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="material-symbols-outlined">swap_horiz</span>Acknowledge Risks & Rebalance
              </button>
              <p className="text-[10px] text-[#a1a1aa] text-center leading-relaxed">
                By proceeding, you acknowledge this action requires Lead approval and will be recorded in the audit trail. All changes are rolled back if approval is not received within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};