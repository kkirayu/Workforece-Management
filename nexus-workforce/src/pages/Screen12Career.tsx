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

type SkillGapRow = {
  skill: string;
  current: string;
  target: string;
  gap: string;
  gapSeverity: 'low' | 'mid' | 'high';
  action: string;
  recommendation: string;
};

type IDPGoal = {
  id: number;
  title: string;
  status: 'In Progress' | 'Enrolled' | 'Completed';
  progress: number;
  deadline?: string;
};

const readinessDimensions = [
  { label: 'Technical Depth', value: 96 },
  { label: 'System Ownership', value: 92 },
  { label: 'Mentorship', value: 88 },
  { label: 'Cross-functional Leadership', value: 74 },
  { label: 'Strategic Impact', value: 68 },
];

const skillGaps: SkillGapRow[] = [
  { skill: 'Large-Scale System Design', current: 'L6 Advanced', target: 'L7 Expert', gap: '-1', gapSeverity: 'low', action: 'Lead initiative', recommendation: 'Multi-Region Sharding Project' },
  { skill: 'Financial Acumen (FinOps)', current: 'L5 Proficient', target: 'L7 Expert', gap: '-2', gapSeverity: 'high', action: 'Certification', recommendation: 'FinOps at Scale (Coursera)' },
  { skill: 'Org-Wide Leadership', current: 'L5 Proficient', target: 'L7 Expert', gap: '-2', gapSeverity: 'high', action: 'Stretch assignment', recommendation: 'Cross-team architecture council' },
  { skill: 'Technical Vision & Strategy', current: 'L6 Advanced', target: 'L7 Expert', gap: '-1', gapSeverity: 'mid', action: 'Strategic project', recommendation: 'Lead 2027 platform roadmap' },
  { skill: 'Industry Thought Leadership', current: 'L5 Proficient', target: 'L6 Advanced+', gap: '-1', gapSeverity: 'mid', action: 'Publish / Speak', recommendation: 'KubeCon 2027 proposal' },
  { skill: 'Executive Communication', current: 'L6 Advanced', target: 'L7 Expert', gap: '-1', gapSeverity: 'low', action: 'Practice', recommendation: 'Board presentation shadowing' },
];

const idpGoals: IDPGoal[] = [
  { id: 1, title: 'Lead Multi-Region Sharding Architecture Initiative', status: 'In Progress', progress: 65, deadline: 'Q1 2027' },
  { id: 2, title: 'Complete FinOps Cost at Scale Certification', status: 'Enrolled', progress: 20, deadline: 'Q4 2026' },
  { id: 3, title: 'Mentor 2 Senior Engineers to Staff Level', status: 'Completed', progress: 100 },
];

const careerLevels = [
  { level: 'L5 Senior', title: 'Senior Engineer', pct: 100, color: colors.success, completed: true },
  { level: 'L6 Staff', title: 'Staff Engineer', pct: 100, color: colors.success, current: true },
  { level: 'L7 Principal', title: 'Principal Engineer', pct: 82, color: colors.info, next: true },
  { level: 'L8 Distinguished', title: 'Distinguished Engineer', pct: 0, color: colors.textMuted },
];

const statusStyle: Record<string, { bg: string; color: string }> = {
  'In Progress': { bg: colors.infoBg, color: colors.info },
  'Enrolled': { bg: colors.warningBg, color: colors.warning },
  'Completed': { bg: colors.successBg, color: colors.success },
};

export function Screen12Career() {
  const [activeGoal, setActiveGoal] = useState(1);
  const avgReadiness = Math.round(readinessDimensions.reduce((s, d) => s + d.value, 0) / readinessDimensions.length);

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif", padding: 24 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontSize: 12, color: colors.textMuted }}>
        <span>WORKFORCE_OS</span><span>/</span><span>PERFORMANCE</span><span>/</span>
        <span style={{ color: colors.textPrimary, fontWeight: 500 }}>CAREER DEVELOPMENT</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: colors.textPrimary, margin: 0 }}>Career Progression & Skill Matrix</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <span style={{ fontSize: 13, color: colors.textSecondary }}>David Kim</span>
            <span style={{ backgroundColor: colors.infoBg, color: colors.info, fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 4 }}>Target: L7 Principal Engineer</span>
          </div>
        </div>
      </div>

      {/* Career Pathway Map */}
      <div style={{
        backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12,
        padding: 20, marginBottom: 20,
      }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 16px' }}>Career Pathway</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {careerLevels.map((cl, i) => (
            <React.Fragment key={i}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                {/* Circle */}
                <div style={{
                  width: 48, height: 48, borderRadius: 24, margin: '0 auto 8px',
                  backgroundColor: cl.completed ? colors.successBg : cl.current ? colors.infoBg : colors.surfaceLow,
                  border: `2px solid ${cl.completed ? colors.success : cl.current ? colors.info : cl.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {cl.completed ? (
                    <Icon name="check" size={20} />
                  ) : cl.current ? (
                    <Icon name="person" size={20} />
                  ) : cl.next ? (
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, color: colors.info }}>{cl.pct}%</span>
                  ) : (
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.textMuted }}>{cl.pct}%</span>
                  )}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: cl.current ? colors.info : colors.textPrimary }}>{cl.level}</div>
                <div style={{ fontSize: 11, color: colors.textMuted }}>{cl.title}</div>
                {cl.completed && <span style={{ fontSize: 10, color: colors.success, fontWeight: 500 }}>100% complete</span>}
                {cl.current && <span style={{ fontSize: 10, color: colors.info, fontWeight: 500 }}>Current position</span>}
              </div>
              {i < careerLevels.length - 1 && (
                <div style={{
                  flex: 0.6, height: 2, backgroundColor: cl.completed ? colors.success : colors.surfaceHigh,
                  borderRadius: 1, position: 'relative', marginBottom: 30,
                }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {/* Promotion Readiness Index */}
        <div style={{
          backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: 0 }}>Promotion Readiness Index</h2>
            <div style={{
              width: 56, height: 56, borderRadius: 28,
              border: `3px solid ${colors.info}`, backgroundColor: colors.infoBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, color: colors.info }}>{avgReadiness}%</span>
            </div>
          </div>

          {/* Radar-style breakdown (vertical bars) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {readinessDimensions.map((d, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 12, color: colors.textSecondary }}>{d.label}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600,
                    color: d.value >= 90 ? colors.success : d.value >= 80 ? colors.info : d.value >= 70 ? colors.warning : colors.danger,
                  }}>{d.value}%</span>
                </div>
                <div style={{ width: '100%', height: 8, borderRadius: 4, backgroundColor: colors.surfaceLow, overflow: 'hidden' }}>
                  <div style={{
                    width: `${d.value}%`, height: '100%', borderRadius: 4,
                    backgroundColor: d.value >= 90 ? colors.success : d.value >= 80 ? colors.info : d.value >= 70 ? colors.warning : colors.danger,
                    transition: 'width 0.5s',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Gap Matrix */}
        <div style={{
          backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
        }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>Skill Gap Matrix</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${colors.cardBorder}` }}>
                {['Skill', 'Gap', 'Action', 'Recommendation'].map((h) => (
                  <th key={h} style={{
                    textAlign: 'left', padding: '8px 6px', fontSize: 10, fontWeight: 600,
                    color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {skillGaps.map((sg, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${colors.surfaceLow}` }}>
                  <td style={{ padding: '10px 6px' }}>
                    <div style={{ fontWeight: 500, color: colors.textPrimary }}>{sg.skill}</div>
                    <div style={{ fontSize: 10, color: colors.textMuted }}>{sg.current} → {sg.target}</div>
                  </td>
                  <td style={{ padding: '10px 6px' }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700,
                      color: sg.gapSeverity === 'high' ? colors.danger : sg.gapSeverity === 'mid' ? colors.warning : colors.textSecondary,
                    }}>{sg.gap}</span>
                  </td>
                  <td style={{ padding: '10px 6px' }}>
                    <span style={{
                      fontSize: 11, padding: '2px 8px', borderRadius: 4, fontWeight: 500,
                      backgroundColor: sg.action === 'Certification' ? colors.warningBg : sg.action.includes('Lead') ? colors.infoBg : colors.surfaceLow,
                      color: sg.action === 'Certification' ? colors.warning : sg.action.includes('Lead') ? colors.info : colors.textSecondary,
                    }}>{sg.action}</span>
                  </td>
                  <td style={{ padding: '10px 6px', fontSize: 11, color: colors.textSecondary, maxWidth: 180 }}>{sg.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* IDP Goals */}
      <div style={{
        backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12,
        padding: 20, marginBottom: 20,
      }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>Individual Development Plan (IDP) Goals</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {idpGoals.map((g) => (
            <div
              key={g.id}
              onClick={() => setActiveGoal(g.id)}
              style={{
                padding: 14, borderRadius: 8, cursor: 'pointer', border: `1px solid ${activeGoal === g.id ? colors.info : colors.surfaceLow}`,
                backgroundColor: activeGoal === g.id ? colors.infoBg : colors.surfaceLow,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 10,
                    backgroundColor: g.status === 'Completed' ? colors.success : g.status === 'In Progress' ? colors.info : colors.warning,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {g.status === 'Completed' && <Icon name="check" size={12} />}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: colors.textPrimary }}>{g.title}</span>
                </div>
                <span style={{
                  padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                  backgroundColor: statusStyle[g.status].bg, color: statusStyle[g.status].color,
                }}>{g.status}</span>
              </div>
              {/* Progress */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
                <div style={{ flex: 1, height: 6, borderRadius: 3, backgroundColor: colors.surfaceHigh, overflow: 'hidden' }}>
                  <div style={{
                    width: `${g.progress}%`, height: '100%', borderRadius: 3,
                    backgroundColor: g.status === 'Completed' ? colors.success : g.status === 'In Progress' ? colors.info : colors.warning,
                  }} />
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, color: colors.textSecondary }}>{g.progress}%</span>
                {g.deadline && <span style={{ fontSize: 11, color: colors.textMuted }}>Due: {g.deadline}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manager Notes & Timeline */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Manager Approval & Mentorship Notes */}
        <div style={{
          backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
        }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="rate_review" size={18} /> Manager Review Notes
            </span>
          </h2>
          <div style={{ padding: 14, borderRadius: 8, backgroundColor: colors.surfaceLow, marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 14, backgroundColor: colors.successBg,
                  color: colors.success, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700,
                }}>ER</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>Elena Rostova</span>
              </div>
              <span style={{ fontSize: 11, color: colors.textMuted }}>Oct 10, 2026</span>
            </div>
            <p style={{ fontSize: 12, color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
              David has consistently demonstrated staff-level ownership and is operating at the L7 boundary.
              The Kafka migration leadership and Raft consensus work show clear principal-level impact.
              Primary gaps are in financial acumen and org-wide strategic visibility — both addressable within Q4/Q1.
              <strong>Recommendation:</strong> Target L7 promo packet submission for Q1 2027 cycle.
            </p>
          </div>

          <div style={{ padding: 14, borderRadius: 8, backgroundColor: colors.surfaceLow }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 14, backgroundColor: colors.infoBg,
                  color: colors.info, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700,
                }}>AC</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>Alex Chen (Mentor)</span>
              </div>
              <span style={{ fontSize: 11, color: colors.textMuted }}>Oct 8, 2026</span>
            </div>
            <p style={{ fontSize: 12, color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
              David's mentorship of junior engineers is exceptional — both mentees are on track for Staff.
              Continue pushing for cross-functional leadership and conference visibility.
            </p>
          </div>
        </div>

        {/* Next 1:1 Agenda & Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
          }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 12px' }}>Next 1:1 Agenda Items</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { icon: 'flag', text: 'Q4 goal alignment & sprint priorities', time: '5 min' },
                { icon: 'school', text: 'FinOps certification progress review', time: '10 min' },
                { icon: 'architecture', text: 'Multi-Region Sharding project kickoff', time: '15 min' },
                { icon: 'emoji_events', text: 'L7 promotion timeline discussion', time: '10 min' },
                { icon: 'groups', text: 'Cross-functional council membership', time: '5 min' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: `1px solid ${colors.surfaceLow}` }}>
                  <Icon name={item.icon} size={16} />
                  <span style={{ flex: 1, fontSize: 12, color: colors.textPrimary }}>{item.text}</span>
                  <span style={{ fontSize: 10, color: colors.textMuted, fontFamily: "'JetBrains Mono', monospace" }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12, padding: 20,
          }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary, margin: '0 0 12px' }}>Promotion Timeline</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { phase: 'Skill Gap Closure', date: 'Q4 2026', status: 'In Progress', color: colors.info },
                { phase: 'Promotion Packet Draft', date: 'Dec 2026', status: 'Upcoming', color: colors.warning },
                { phase: 'Cross-Review & Calibration', date: 'Jan 2027', status: 'Upcoming', color: colors.textMuted },
                { phase: 'Formal Promotion Decision', date: 'Q1 2027', status: 'Target', color: colors.success },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: 5, backgroundColor: p.color, flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: colors.textPrimary }}>{p.phase}</div>
                    <div style={{ fontSize: 10, color: colors.textMuted }}>{p.date}</div>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 4,
                    backgroundColor: p.status === 'In Progress' ? colors.infoBg : colors.surfaceLow,
                    color: p.status === 'In Progress' ? colors.info : colors.textMuted,
                  }}>{p.status}</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 16, padding: 12, borderRadius: 8, backgroundColor: colors.successBg,
              border: `1px solid #a7f3d0`, display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Icon name="event" size={18} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: colors.success }}>Target Promotion Date</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: colors.textPrimary }}>Q1 2027 (March 2027)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen12Career;
