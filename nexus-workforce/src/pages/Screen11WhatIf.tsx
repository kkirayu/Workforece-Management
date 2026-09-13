import React, { useState } from 'react';

const colors = {
  bg: '#f9f9fa',
  card: '#ffffff',
  cardBorder: '#e4e4e7',
  surfaceLow: '#f3f3f4',
  surfaceHigh: '#e8e8e9',
  textPrimary: '#09090b',
  textSecondary: '#71717a',
  textMuted: '#a1a1aa',
  success: '#10b981',
  successBg: '#ecfdf5',
  warning: '#f59e0b',
  warningBg: '#fffbeb',
  danger: '#e11d48',
  dangerBg: '#fff1f2',
  info: '#6366f1',
  infoBg: '#eef2ff',
};

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => (
  <span className="material-symbols-outlined" style={{ fontSize: size }}>{name}</span>
);

type ScenarioRow = {
  metric: string;
  current: string;
  scenarioA: string;
  scenarioB: string;
  unit?: string;
};

const comparisonRows: ScenarioRow[] = [
  { metric: 'Avg Team Load', current: '84.2%', scenarioA: '76.8%', scenarioB: '82.1%' },
  { metric: 'Project Deadlines', current: '12 at risk', scenarioA: '4 at risk', scenarioB: '7 at risk' },
  { metric: 'Attrition Risk', current: '18%', scenarioA: '11%', scenarioB: '14%' },
  { metric: 'Monthly Budget', current: '$486,000', scenarioA: '$510,000', scenarioB: '$498,000' },
  { metric: 'Delivery On-Time', current: '76%', scenarioA: '88%', scenarioB: '82%' },
  { metric: 'Avg Skill Match', current: '87%', scenarioA: '91%', scenarioB: '89%' },
];

const scenarios = [
  { label: 'Q4 BFCM Surge', desc: 'Seasonal traffic spike — 3x normal load' },
  { label: 'Project Titan Launch', desc: 'Major product launch with aggressive timeline' },
  { label: 'Custom Assumptions', desc: 'Define your own simulation parameters' },
];

export function Screen11WhatIf() {
  const [baseScenario, setBaseScenario] = useState(0);
  const [headcount, setHeadcount] = useState(3);
  const [capacityStrain, setCapacityStrain] = useState(15);
  const [projectDelay, setProjectDelay] = useState(1);
  const [simulating, setSimulating] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const runSim = () => {
    setSimulating(true);
    setTimeout(() => { setSimulating(false); setShowResults(true); }, 1500);
  };

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif", padding: 24 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontSize: 12, color: colors.textMuted }}>
        <span>WORKFORCE_OS</span><span>/</span><span>AI ENGINE</span><span>/</span>
        <span style={{ color: colors.textPrimary, fontWeight: 500 }}>SCENARIO SIMULATION</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: colors.textPrimary, margin: 0 }}>Scenario & What-If Simulation Engine</h1>
          <p style={{ fontSize: 13, color: colors.textSecondary, margin: '4px 0 0' }}>AI-powered scenario modeling for strategic workforce decisions</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            backgroundColor: colors.card, color: colors.textPrimary, border: `1px solid ${colors.cardBorder}`,
            borderRadius: 8, padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon name="save" size={16} /> Save Scenario</button>
          <button style={{
            backgroundColor: colors.info, color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon name="play_arrow" size={16} /> Run Monte Carlo Simulation</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 16 }}>
        {/* Left: Scenario Builder */}
        <div style={{
          backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20, alignSelf: 'flex-start',
        }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>Scenario Builder</h2>

          {/* Base Condition */}
          <label style={{ fontSize: 11, fontWeight: 600, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5, display: 'block', marginBottom: 6 }}>
            Base Condition
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
            {scenarios.map((s, i) => (
              <div
                key={i}
                onClick={() => setBaseScenario(i)}
                style={{
                  padding: '10px 12px', borderRadius: 8, cursor: 'pointer', border: `1px solid ${baseScenario === i ? colors.info : colors.cardBorder}`,
                  backgroundColor: baseScenario === i ? colors.infoBg : colors.surfaceLow,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: baseScenario === i ? colors.info : colors.textPrimary }}>{s.label}</div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Headcount Delta */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: colors.textSecondary }}>Headcount Delta (FTEs)</label>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700,
                  color: headcount > 0 ? colors.success : headcount < 0 ? colors.danger : colors.textPrimary,
                }}>{headcount > 0 ? '+' : ''}{headcount}</span>
              </div>
              <input
                type="range" min={-5} max={10} value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                style={{ width: '100%', accentColor: colors.info }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.textMuted, marginTop: 2 }}>
                <span>-5 FTEs</span><span>+10 FTEs</span>
              </div>
            </div>

            {/* Capacity Strain */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: colors.textSecondary }}>Capacity Strain</label>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700,
                  color: capacityStrain > 20 ? colors.danger : capacityStrain > 10 ? colors.warning : colors.textPrimary,
                }}>+{capacityStrain}%</span>
              </div>
              <input
                type="range" min={0} max={30} value={capacityStrain}
                onChange={(e) => setCapacityStrain(Number(e.target.value))}
                style={{ width: '100%', accentColor: colors.warning }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.textMuted, marginTop: 2 }}>
                <span>0%</span><span>+30%</span>
              </div>
            </div>

            {/* Project Delay */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: colors.textSecondary }}>Project Delay</label>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700,
                  color: projectDelay > 2 ? colors.danger : projectDelay > 0 ? colors.warning : colors.textPrimary,
                }}>{projectDelay} {projectDelay === 1 ? 'week' : 'weeks'}</span>
              </div>
              <input
                type="range" min={0} max={4} value={projectDelay}
                onChange={(e) => setProjectDelay(Number(e.target.value))}
                style={{ width: '100%', accentColor: colors.danger }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: colors.textMuted, marginTop: 2 }}>
                <span>0 weeks</span><span>4 weeks</span>
              </div>
            </div>
          </div>

          {/* Run Button */}
          <button
            onClick={runSim}
            disabled={simulating}
            style={{
              width: '100%', marginTop: 20, padding: '10px 0', borderRadius: 8, border: 'none',
              backgroundColor: simulating ? colors.surfaceHigh : colors.info, color: simulating ? colors.textMuted : '#fff',
              fontSize: 13, fontWeight: 600, cursor: simulating ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}
          >
            {simulating ? <><Icon name="hourglass_top" size={16} /> Simulating...</> : <><Icon name="play_arrow" size={16} /> Run Simulation</>}
          </button>
        </div>

        {/* Right: Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Simulation Results */}
          {showResults && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {[
                  {
                    label: 'Utilization Impact',
                    before: '84.2%', after: '76.8%', color: colors.success, icon: 'speed',
                    detail: 'Reduced from baseline',
                  },
                  {
                    label: 'Risk Mitigation',
                    before: 'Medium', after: 'Low', color: colors.info, icon: 'shield',
                    detail: '94.2% confidence',
                  },
                  {
                    label: 'On-Time Probability',
                    before: '76%', after: '88%', color: colors.success, icon: 'event_available',
                    detail: '+12% improvement',
                  },
                  {
                    label: 'Cost Impact',
                    before: '$486k/mo', after: '+$24k/mo', color: colors.warning, icon: 'paid',
                    detail: '$510k/mo total',
                  },
                ].map((r, i) => (
                  <div key={i} style={{
                    backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`,
                    borderRadius: 10, padding: 16,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                      <div style={{ backgroundColor: `${r.color}15`, color: r.color, width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={r.icon} size={16} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 500, color: colors.textMuted }}>{r.label}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.textMuted, textDecoration: 'line-through' }}>{r.before}</span>
                      <Icon name="arrow_forward" size={12} />
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: r.color }}>{r.after}</span>
                    </div>
                    <span style={{ fontSize: 10, color: colors.textMuted }}>{r.detail}</span>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div style={{
                backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
              }}>
                <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>Comparison View</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${colors.cardBorder}` }}>
                      {['Metric', 'Current State', 'Scenario A (BFCM)', 'Scenario B (Titan)'].map((h) => (
                        <th key={h} style={{
                          textAlign: 'left', padding: '10px 12px', fontSize: 11, fontWeight: 600,
                          color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5,
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${colors.surfaceLow}` }}>
                        <td style={{ padding: '12px', fontWeight: 500, color: colors.textPrimary }}>{row.metric}</td>
                        <td style={{ padding: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: colors.textSecondary }}>{row.current}</td>
                        <td style={{ padding: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600, color: colors.info }}>{row.scenarioA}</td>
                        <td style={{ padding: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600, color: colors.warning }}>{row.scenarioB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Action Bar */}
          <div style={{
            backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="smart_toy" size={18} />
              <span style={{ fontSize: 13, color: colors.textSecondary }}>
                Scenario "{scenarios[baseScenario].label}" — HC {headcount > 0 ? '+' : ''}{headcount}, Strain +{capacityStrain}%, Delay {projectDelay}w
              </span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{
                padding: '8px 16px', borderRadius: 8, border: `1px solid ${colors.cardBorder}`,
                backgroundColor: colors.card, color: colors.textPrimary, fontSize: 13, fontWeight: 500,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              }}><Icon name="check_circle" size={16} /> Apply Scenario to Live Engine</button>
              <button style={{
                padding: '8px 16px', borderRadius: 8, border: `1px solid ${colors.cardBorder}`,
                backgroundColor: colors.card, color: colors.textPrimary, fontSize: 13, fontWeight: 500,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              }}><Icon name="share" size={16} /> Share with Executive Board</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen11WhatIf;
