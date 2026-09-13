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

type Task = {
  id: number;
  title: string;
  project: string;
  priority: 'P0' | 'P1' | 'P2';
  dueDate: string;
  allocatedHours: number;
  loggedHours: number;
  skills: string[];
  subtasks: { label: string; done: boolean }[];
  comments: { author: string; text: string; time: string }[];
  column: 'progress' | 'review' | 'backlog';
};

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => (
  <span className="material-symbols-outlined" style={{ fontSize: size }}>{name}</span>
);

const tasks: Task[] = [
  {
    id: 1, title: 'Global Kafka Cluster Migration', project: 'Kafka Migration', priority: 'P0',
    dueDate: 'Oct 18, 2026', allocatedHours: 22, loggedHours: 14.5,
    skills: ['Go', 'Kafka', 'Distributed Systems'],
    subtasks: [
      { label: 'Migrate prod cluster 1', done: true },
      { label: 'Migrate prod cluster 2', done: false },
      { label: 'Performance benchmarks', done: false },
    ],
    comments: [
      { author: 'Elena R.', text: 'Cluster 1 migration looks solid. Monitor latency.', time: '2h ago' },
    ],
    column: 'progress',
  },
  {
    id: 2, title: 'Multi-Region Raft Quorum Tuning', project: 'Raft Consensus', priority: 'P1',
    dueDate: 'Oct 25, 2026', allocatedHours: 12, loggedHours: 6,
    skills: ['Raft', 'Go', 'Consensus'],
    subtasks: [
      { label: 'Implement pre-vote extension', done: true },
      { label: 'Load test 3-region setup', done: false },
    ],
    comments: [],
    column: 'progress',
  },
  {
    id: 3, title: 'Hiring Panel — Senior SRE Candidates', project: 'Team Ops', priority: 'P2',
    dueDate: 'Oct 20, 2026', allocatedHours: 6, loggedHours: 4,
    skills: ['Interviewing', 'SRE'],
    subtasks: [
      { label: 'Review resumes', done: true },
      { label: 'Conduct 3 technical screens', done: true },
      { label: 'Debrief & scorecards', done: false },
    ],
    comments: [],
    column: 'progress',
  },
  {
    id: 4, title: 'Observability Stack v2 Design Doc', project: 'Observability', priority: 'P1',
    dueDate: 'Oct 22, 2026', allocatedHours: 8, loggedHours: 8,
    skills: ['Architecture', 'Prometheus', 'Grafana'],
    subtasks: [
      { label: 'Architecture proposal', done: true },
      { label: 'Cost model', done: true },
    ],
    comments: [
      { author: 'Alex Chen', text: 'Approved. Looks great.', time: '1d ago' },
    ],
    column: 'review',
  },
  {
    id: 5, title: 'Post-Incident Review: DB Failover', project: 'SRE On-Call', priority: 'P1',
    dueDate: 'Oct 19, 2026', allocatedHours: 4, loggedHours: 4,
    skills: ['Postgres', 'Incident Response'],
    subtasks: [
      { label: 'Write timeline', done: true },
      { label: 'Publish action items', done: true },
    ],
    comments: [],
    column: 'review',
  },
  {
    id: 6, title: 'FinOps Cost Audit — Q4 Prep', project: 'FinOps', priority: 'P2',
    dueDate: 'Nov 05, 2026', allocatedHours: 10, loggedHours: 0,
    skills: ['AWS', 'FinOps', 'Cost Analysis'],
    subtasks: [
      { label: 'Pull billing data', done: false },
      { label: 'Identify waste', done: false },
    ],
    comments: [],
    column: 'backlog',
  },
  {
    id: 7, title: 'Internal Tech Talk: Raft Deep Dive', project: 'Culture', priority: 'P2',
    dueDate: 'Nov 12, 2026', allocatedHours: 5, loggedHours: 0,
    skills: ['Public Speaking', 'Raft'],
    subtasks: [
      { label: 'Prepare slides', done: false },
    ],
    comments: [],
    column: 'backlog',
  },
  {
    id: 8, title: 'Service Mesh Migration Planning', project: 'Cloud Infra', priority: 'P1',
    dueDate: 'Nov 15, 2026', allocatedHours: 8, loggedHours: 0,
    skills: ['Istio', 'Kubernetes', 'Networking'],
    subtasks: [
      { label: 'Evaluate Istio vs Linkerd', done: false },
      { label: 'Migration plan', done: false },
    ],
    comments: [],
    column: 'backlog',
  },
];

const priorityColors: Record<string, { bg: string; color: string }> = {
  P0: { bg: colors.dangerBg, color: colors.danger },
  P1: { bg: colors.warningBg, color: colors.warning },
  P2: { bg: colors.surfaceLow, color: colors.textSecondary },
};

const columnLabels: Record<string, { title: string; icon: string; count: number }> = {
  progress: { title: 'In Progress', icon: 'play_circle', count: 3 },
  review: { title: 'Ready for Review', icon: 'rate_review', count: 2 },
  backlog: { title: 'Backlog / Upcoming', icon: 'inventory_2', count: 3 },
};

export function Screen9MyTasks() {
  const [expandedTask, setExpandedTask] = useState<number | null>(1);

  const loggedTotal = tasks.reduce((s, t) => s + t.loggedHours, 0);
  const allocatedTotal = tasks.reduce((s, t) => s + t.allocatedHours, 0);
  const weeklyLogged = 38.5;
  const weeklyCapacity = 40;
  const utilPct = Math.round((weeklyLogged / weeklyCapacity) * 100);

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif", padding: 24 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontSize: 12, color: colors.textMuted }}>
        <span>WORKFORCE_OS</span><span>/</span><span>MY WORK</span><span>/</span>
        <span style={{ color: colors.textPrimary, fontWeight: 500 }}>TASKS & ASSIGNMENTS</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: colors.textPrimary, margin: 0 }}>My Workload & Sprint Assignments</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <span style={{
              backgroundColor: colors.infoBg, color: colors.info, fontSize: 12, fontWeight: 600,
              padding: '4px 10px', borderRadius: 6,
            }}>40h Allocated</span>
            <span style={{
              backgroundColor: colors.warningBg, color: colors.warning, fontSize: 12, fontWeight: 600,
              padding: '4px 10px', borderRadius: 6,
            }}>1.5h Available</span>
            <span style={{ fontSize: 12, color: colors.textMuted }}>Sprint: Oct 13 – Oct 27, 2026</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            backgroundColor: colors.info, color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon name="timer" size={16} /> Log Time</button>
          <button style={{
            backgroundColor: colors.card, color: colors.textPrimary, border: `1px solid ${colors.cardBorder}`,
            borderRadius: 8, padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon name="tune" size={16} /> Request Workload Adjustment</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Main Content */}
        <div style={{ flex: 1 }}>
          {/* Kanban Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
            {(Object.keys(columnLabels) as (keyof typeof columnLabels)[]).map((colKey) => {
              const col = columnLabels[colKey];
              const colTasks = tasks.filter((t) => t.column === colKey);
              return (
                <div key={colKey} style={{
                  backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 10, padding: 14,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                    <Icon name={col.icon} size={18} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{col.title}</span>
                    <span style={{
                      marginLeft: 'auto', backgroundColor: colors.surfaceLow, color: colors.textMuted,
                      fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 10,
                    }}>{colTasks.length}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {colTasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                        style={{
                          padding: 12, borderRadius: 8, cursor: 'pointer',
                          backgroundColor: expandedTask === task.id ? colors.infoBg : colors.surfaceLow,
                          border: `1px solid ${expandedTask === task.id ? colors.info : 'transparent'}`,
                          transition: 'all 0.15s',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary, lineHeight: 1.4 }}>{task.title}</span>
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 3, whiteSpace: 'nowrap',
                            backgroundColor: priorityColors[task.priority].bg, color: priorityColors[task.priority].color,
                          }}>{task.priority}</span>
                        </div>
                        <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 6 }}>{task.project}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 11, color: colors.textSecondary }}>Due: {task.dueDate}</span>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                            color: task.loggedHours >= task.allocatedHours ? colors.success : colors.textSecondary,
                          }}>{task.loggedHours}/{task.allocatedHours}h</span>
                        </div>
                        {/* Hours bar */}
                        <div style={{ width: '100%', height: 4, borderRadius: 2, backgroundColor: colors.surfaceHigh, marginTop: 6, overflow: 'hidden' }}>
                          <div style={{
                            width: `${Math.min(100, (task.loggedHours / task.allocatedHours) * 100)}%`,
                            height: '100%', borderRadius: 2,
                            backgroundColor: task.loggedHours >= task.allocatedHours ? colors.success : colors.info,
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Task Detail */}
          {expandedTask && (() => {
            const task = tasks.find((t) => t.id === expandedTask);
            if (!task) return null;
            return (
              <div style={{
                backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`,
                borderRadius: 12, padding: 20, marginBottom: 24,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 3,
                        backgroundColor: priorityColors[task.priority].bg, color: priorityColors[task.priority].color,
                      }}>{task.priority}</span>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, margin: 0 }}>{task.title}</h3>
                    </div>
                    <p style={{ fontSize: 12, color: colors.textSecondary, margin: '2px 0 0' }}>Project: {task.project} &middot; Due: {task.dueDate}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 700, color: colors.info }}>{task.loggedHours}h</div>
                      <div style={{ fontSize: 10, color: colors.textMuted }}>Logged</div>
                    </div>
                    <div style={{ fontSize: 12, color: colors.textMuted }}>/</div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 700, color: colors.textPrimary }}>{task.allocatedHours}h</div>
                      <div style={{ fontSize: 10, color: colors.textMuted }}>Allocated</div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
                  {task.skills.map((s) => (
                    <span key={s} style={{
                      backgroundColor: colors.surfaceLow, color: colors.textSecondary, fontSize: 11, fontWeight: 500,
                      padding: '3px 10px', borderRadius: 4,
                    }}>{s}</span>
                  ))}
                  <span style={{
                    backgroundColor: colors.successBg, color: colors.success, fontSize: 11, fontWeight: 600,
                    padding: '3px 10px', borderRadius: 4, marginLeft: 4,
                  }}>92% Match</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {/* Subtasks */}
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 600, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, marginTop: 0 }}>Subtasks</h4>
                    {task.subtasks.map((st, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: `1px solid ${colors.surfaceLow}` }}>
                        <div style={{
                          width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${st.done ? colors.success : colors.cardBorder}`,
                          backgroundColor: st.done ? colors.success : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {st.done && <Icon name="check" size={12} />}
                        </div>
                        <span style={{
                          fontSize: 12, color: st.done ? colors.textMuted : colors.textPrimary,
                          textDecoration: st.done ? 'line-through' : 'none',
                        }}>{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Comments */}
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 600, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, marginTop: 0 }}>Comments</h4>
                    {task.comments.length === 0 ? (
                      <p style={{ fontSize: 12, color: colors.textMuted, fontStyle: 'italic' }}>No comments yet</p>
                    ) : task.comments.map((c, i) => (
                      <div key={i} style={{ padding: '8px 0', borderBottom: `1px solid ${colors.surfaceLow}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: colors.textPrimary }}>{c.author}</span>
                          <span style={{ fontSize: 11, color: colors.textMuted }}>{c.time}</span>
                        </div>
                        <p style={{ fontSize: 12, color: colors.textSecondary, margin: 0 }}>{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Sidebar: Personal Capacity */}
        <div style={{ width: 260, flexShrink: 0 }}>
          <div style={{
            backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`,
            borderRadius: 12, padding: 18, position: 'sticky', top: 24,
          }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary, margin: '0 0 14px' }}>Personal Capacity</h3>

            {/* Weekly Hours */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                <span style={{ color: colors.textSecondary }}>This Week</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: colors.textPrimary }}>{weeklyLogged}h / {weeklyCapacity}h</span>
              </div>
              <div style={{ width: '100%', height: 8, borderRadius: 4, backgroundColor: colors.surfaceLow, overflow: 'hidden' }}>
                <div style={{
                  width: `${utilPct}%`, height: '100%', borderRadius: 4,
                  backgroundColor: utilPct > 90 ? colors.danger : utilPct > 80 ? colors.warning : colors.success,
                }} />
              </div>
              <div style={{ fontSize: 11, color: colors.textMuted, marginTop: 4 }}>{weeklyCapacity - weeklyLogged}h remaining</div>
            </div>

            {/* Burnout Alert */}
            <div style={{
              backgroundColor: utilPct > 90 ? colors.dangerBg : colors.warningBg,
              borderRadius: 8, padding: 12, marginBottom: 16,
              border: `1px solid ${utilPct > 90 ? '#fecdd3' : '#fef3c7'}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <Icon name={utilPct > 90 ? 'warning' : 'info'} size={16} />
                <span style={{ fontSize: 12, fontWeight: 600, color: utilPct > 90 ? colors.danger : colors.warning }}>
                  {utilPct > 90 ? 'Burnout Risk' : 'Approaching Capacity'}
                </span>
              </div>
              <p style={{ fontSize: 11, color: colors.textSecondary, margin: 0 }}>
                {utilPct > 90
                  ? 'Utilization above 90%. Consider workload adjustment.'
                  : 'Utilization near capacity. Monitor closely.'}
              </p>
            </div>

            {/* Overtime Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: `1px solid ${colors.surfaceLow}`, borderBottom: `1px solid ${colors.surfaceLow}`, marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: colors.textSecondary }}>Overtime Status</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.success }}>None</span>
            </div>

            {/* Sprint Summary */}
            <div style={{ fontSize: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', color: colors.textSecondary }}>
                <span>Total Tasks</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: colors.textPrimary }}>{tasks.length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', color: colors.textSecondary }}>
                <span>Total Allocated</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: colors.textPrimary }}>{allocatedTotal}h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', color: colors.textSecondary }}>
                <span>Total Logged</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: colors.info }}>{loggedTotal}h</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', color: colors.textSecondary }}>
                <span>P0 Tasks</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: colors.danger }}>{tasks.filter((t) => t.priority === 'P0').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen9MyTasks;
