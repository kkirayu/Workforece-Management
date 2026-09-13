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

type DeptForecast = {
  dept: string;
  demand: number;
  capacity: number;
  gap: number;
};

type SkillGap = {
  skill: string;
  current: number;
  required: number;
  gap: number;
  level: string;
  resolution: string;
};

const forecastData: DeptForecast[] = [
  { dept: 'Cloud Infra', demand: 4200, capacity: 3360, gap: -840 },
  { dept: 'Product & UX', demand: 3100, capacity: 2940, gap: -160 },
  { dept: 'Data & AI', demand: 2800, capacity: 2240, gap: -560 },
  { dept: 'Cybersec', demand: 2300, capacity: 2140, gap: -160 },
];

const skillGaps: SkillGap[] = [
  { skill: 'Go (Senior+)', current: 3, required: 5, gap: -2, level: 'Senior', resolution: 'Hire — 2 FTEs (Go Backend)' },
  { skill: 'Site Reliability Engineering', current: 2, required: 3, gap: -1, level: 'Staff', resolution: 'Hire — 1 Staff SRE' },
  { skill: 'MLOps / ML Platform', current: 1, required: 2, gap: -1, level: 'Lead', resolution: 'Hire — 1 ML Lead' },
  { skill: 'FinOps / Cloud Cost', current: 2, required: 2, gap: 0, level: 'Senior', resolution: 'Train — Internal Upskill' },
  { skill: 'Incident Command', current: 4, required: 3, gap: 1, level: 'Senior', resolution: 'Transfer — Reallocate within Cloud Infra' },
  { skill: 'Kafka / Event Streaming', current: 2, required: 3, gap: -1, level: 'Senior', resolution: 'Train — Certification Program' },
];

const hiringPipeline = [
  { role: 'Senior Go Engineer (x2)', stage: 'Offer Stage', source: 'LinkedIn + Referral', ttf: '18 days', candidates: 3 },
  { role: 'Staff SRE', stage: 'Final Interviews', source: 'Internal + External', ttf: '24 days', candidates: 2 },
  { role: 'ML Platform Lead', stage: 'Sourcing', source: 'Headhunter + LinkedIn', ttf: '35 days', candidates: 1 },
];

export function Screen10Planning() {
  const [activeTab, setActiveTab] = useState<'30' | '60' | '90'>('30');
  const maxDemand = Math.max(...forecastData.map((d) => d.demand));

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif", padding: 24 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontSize: 12, color: colors.textMuted }}>
        <span>WORKFORCE_OS</span><span>/</span><span>PLANNING</span><span>/</span>
        <span style={{ color: colors.textPrimary, fontWeight: 500 }}>WORKFORCE FORECASTING</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: colors.textPrimary, margin: 0 }}>30 / 60 / 90-Day Workforce Demand Forecast</h1>
          <p style={{ fontSize: 13, color: colors.textSecondary, margin: '4px 0 0' }}>AI-powered capacity modeling and hiring recommendations</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            backgroundColor: colors.card, color: colors.textPrimary, border: `1px solid ${colors.cardBorder}`,
            borderRadius: 8, padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon name="download" size={16} /> Export Forecast Model</button>
          <button style={{
            backgroundColor: colors.info, color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon name="add" size={16} /> Add Future Project Demand</button>
        </div>
      </div>

      {/* Horizon Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        {(['30', '60', '90'] as const).map((tab) => {
          const months: Record<string, string> = { '30': 'Oct 2026', '60': 'Nov 2026', '90': 'Dec 2026' };
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600,
                backgroundColor: activeTab === tab ? colors.info : colors.card,
                color: activeTab === tab ? '#fff' : colors.textSecondary,
                boxShadow: activeTab === tab ? 'none' : `inset 0 0 0 1px ${colors.cardBorder}`,
              }}
            >{tab}-Day ({months[tab]})</button>
          );
        })}
      </div>

      {/* Metric Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Total Demand', value: '12,400', unit: 'dev-hours', icon: 'bar_chart', color: colors.info, bg: colors.infoBg },
          { label: 'Capacity Deficit', value: '-1,280', unit: 'hours', icon: 'trending_down', color: colors.danger, bg: colors.dangerBg },
          { label: 'Hiring Recommendation', value: '+4 FTEs', unit: 'recommended', icon: 'person_add', color: colors.warning, bg: colors.warningBg },
          { label: 'Redistribution Potential', value: '840', unit: 'hours available', icon: 'swap_horiz', color: colors.success, bg: colors.successBg },
        ].map((m, i) => (
          <div key={i} style={{
            backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, padding: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ backgroundColor: m.bg, color: m.color, width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={m.icon} size={18} />
              </div>
              <span style={{ fontSize: 12, color: colors.textMuted, fontWeight: 500 }}>{m.label}</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 700, color: m.color }}>{m.value}</div>
            <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 2 }}>{m.unit}</div>
          </div>
        ))}
      </div>

      {/* Departmental Forecast Bars */}
      <div style={{
        backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12,
        padding: 20, marginBottom: 24,
      }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, margin: '0 0 16px' }}>Departmental Capacity vs Demand Forecast</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {forecastData.map((d, i) => {
            const demandPct = (d.demand / maxDemand) * 100;
            const capacityPct = (d.capacity / maxDemand) * 100;
            const gapPct = ((d.gap) / maxDemand) * 100;
            return (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.textPrimary }}>{d.dept}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600,
                    color: d.gap < 0 ? colors.danger : colors.success,
                  }}>{d.gap > 0 ? '+' : ''}{d.gap.toLocaleString()}h gap</span>
                </div>
                <div style={{ position: 'relative', height: 24, borderRadius: 6, backgroundColor: colors.surfaceLow, overflow: 'hidden' }}>
                  {/* Demand bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, height: '50%',
                    width: `${demandPct}%`, backgroundColor: colors.info, borderRadius: '6px 6px 0 0', opacity: 0.7,
                  }} />
                  {/* Capacity bar */}
                  <div style={{
                    position: 'absolute', top: '50%', left: 0, height: '50%',
                    width: `${capacityPct}%`, backgroundColor: colors.success, borderRadius: '0 0 6px 6px',
                  }} />
                  {/* Gap overlay */}
                  {d.gap < 0 && (
                    <div style={{
                      position: 'absolute', top: 0, left: `${capacityPct}%`,
                      width: `${Math.abs(gapPct)}%`, height: '100%',
                      backgroundColor: `${colors.danger}22`, borderLeft: `2px dashed ${colors.danger}`,
                    }} />
                  )}
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: colors.info, opacity: 0.7 }} />
                    <span style={{ fontSize: 10, color: colors.textMuted }}>Demand: {d.demand.toLocaleString()}h</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: colors.success }} />
                    <span style={{ fontSize: 10, color: colors.textMuted }}>Capacity: {d.capacity.toLocaleString()}h</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Skill Shortage Matrix */}
        <div style={{
          backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
        }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>Skill Shortage Matrix</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${colors.cardBorder}` }}>
                {['Skill', 'Shortage (h)', 'Level', 'Resolution'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '8px 8px', fontSize: 10, fontWeight: 600, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {skillGaps.map((sg, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${colors.surfaceLow}` }}>
                  <td style={{ padding: '10px 8px', fontWeight: 500, color: colors.textPrimary }}>{sg.skill}</td>
                  <td style={{ padding: '10px 8px' }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
                      color: sg.gap < 0 ? colors.danger : sg.gap > 0 ? colors.success : colors.textSecondary,
                    }}>{sg.gap > 0 ? '+' : ''}{sg.gap * 400}h</span>
                  </td>
                  <td style={{ padding: '10px 8px', color: colors.textSecondary }}>{sg.level}</td>
                  <td style={{ padding: '10px 8px' }}>
                    <span style={{
                      fontSize: 11, padding: '2px 8px', borderRadius: 4, fontWeight: 500,
                      backgroundColor: sg.resolution.startsWith('Hire') ? colors.infoBg
                        : sg.resolution.startsWith('Train') ? colors.successBg : colors.surfaceLow,
                      color: sg.resolution.startsWith('Hire') ? colors.info
                        : sg.resolution.startsWith('Train') ? colors.success : colors.textSecondary,
                    }}>{sg.resolution}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hiring Pipeline */}
        <div style={{
          backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
        }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="smart_toy" size={18} /> AI Recommended Hiring Plan
            </span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {hiringPipeline.map((hp, i) => (
              <div key={i} style={{
                padding: 14, borderRadius: 8, backgroundColor: colors.surfaceLow,
                border: `1px solid ${colors.surfaceHigh}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{hp.role}</div>
                    <div style={{ fontSize: 11, color: colors.textMuted }}>Source: {hp.source}</div>
                  </div>
                  <span style={{
                    padding: '3px 10px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                    backgroundColor: hp.stage === 'Offer Stage' ? colors.successBg : hp.stage === 'Final Interviews' ? colors.warningBg : colors.infoBg,
                    color: hp.stage === 'Offer Stage' ? colors.success : hp.stage === 'Final Interviews' ? colors.warning : colors.info,
                  }}>{hp.stage}</span>
                </div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icon name="schedule" size={14} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, color: colors.textSecondary }}>TTF: {hp.ttf}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icon name="people" size={14} />
                    <span style={{ fontSize: 11, color: colors.textSecondary }}>{hp.candidates} candidates</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div style={{ marginTop: 8, width: '100%', height: 4, borderRadius: 2, backgroundColor: colors.surfaceHigh, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 2,
                    width: hp.stage === 'Offer Stage' ? '90%' : hp.stage === 'Final Interviews' ? '65%' : '30%',
                    backgroundColor: hp.stage === 'Offer Stage' ? colors.success : hp.stage === 'Final Interviews' ? colors.warning : colors.info,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen10Planning;
