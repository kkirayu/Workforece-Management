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

type Member = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  capacity: number;
  sprintTasks: number;
  skillMatch: number;
  overloaded?: boolean;
};

type TeamCard = {
  name: string;
  members: number;
  util: number;
  overloaded: number;
  lead: string;
  leadAvatar: string;
};

type ProjectAllocation = {
  project: string;
  status: string;
  deadline: string;
  assignedHours: string;
  density: number;
};

const teamCards: TeamCard[] = [
  { name: 'Distributed Systems Core', members: 8, util: 92, overloaded: 2, lead: 'David Kim', leadAvatar: 'DK' },
  { name: 'Cloud Infra', members: 12, util: 81, overloaded: 0, lead: 'Elena Rostova', leadAvatar: 'ER' },
  { name: 'ML Platform', members: 6, util: 78, overloaded: 0, lead: 'Alex Chen', leadAvatar: 'AC' },
  { name: 'Security Ops', members: 5, util: 84, overloaded: 0, lead: 'Jordan Vance', leadAvatar: 'JV' },
];

const rosterMembers: Member[] = [
  { id: 1, name: 'David Kim', role: 'Tech Lead / L6 Staff', avatar: 'DK', capacity: 92, sprintTasks: 5, skillMatch: 98 },
  { id: 2, name: 'Priya Sharma', role: 'Senior Backend Engineer', avatar: 'PS', capacity: 88, sprintTasks: 4, skillMatch: 94, overloaded: true },
  { id: 3, name: 'Marcus Johnson', role: 'Backend Engineer', avatar: 'MJ', capacity: 75, sprintTasks: 3, skillMatch: 87 },
  { id: 4, name: 'Lin Wei', role: 'Senior SRE', avatar: 'LW', capacity: 95, sprintTasks: 6, skillMatch: 91, overloaded: true },
  { id: 5, name: 'Sarah O\'Brien', role: 'Backend Engineer', avatar: 'SO', capacity: 68, sprintTasks: 3, skillMatch: 82 },
  { id: 6, name: 'Raj Patel', role: 'Junior Backend Engineer', avatar: 'RP', capacity: 55, sprintTasks: 2, skillMatch: 74 },
  { id: 7, name: 'Emma Davis', role: 'Platform Engineer', avatar: 'ED', capacity: 72, sprintTasks: 3, skillMatch: 89 },
  { id: 8, name: 'Tom Nguyen', role: 'Junior SRE', avatar: 'TN', capacity: 48, sprintTasks: 2, skillMatch: 68 },
];

const projectAllocations: ProjectAllocation[] = [
  { project: 'Global Kafka Cluster Migration', status: 'Active', deadline: 'Nov 15, 2026', assignedHours: '320h / 400h', density: 80 },
  { project: 'Multi-Region Raft Consensus', status: 'Active', deadline: 'Dec 01, 2026', assignedHours: '180h / 240h', density: 75 },
  { project: 'Observability Stack v2', status: 'Planning', deadline: 'Jan 10, 2027', assignedHours: '40h / 160h', density: 25 },
  { project: 'BFCM Traffic Surge Readiness', status: 'Critical', deadline: 'Oct 28, 2026', assignedHours: '120h / 120h', density: 100 },
];

const UtilBar = ({ value, compact }: { value: number; compact?: boolean }) => {
  const color = value > 90 ? colors.danger : value > 80 ? colors.warning : colors.success;
  const bg = value > 90 ? colors.dangerBg : value > 80 ? colors.warningBg : colors.successBg;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: compact ? 60 : 80,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.surfaceLow,
        overflow: 'hidden',
      }}>
        <div style={{ width: `${value}%`, height: '100%', backgroundColor: color, borderRadius: 3, transition: 'width 0.3s' }} />
      </div>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: compact ? 11 : 12,
        fontWeight: 600,
        color,
        backgroundColor: bg,
        padding: '2px 6px',
        borderRadius: 4,
      }}>{value}%</span>
    </div>
  );
};

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => (
  <span className="material-symbols-outlined" style={{ fontSize: size }}>{name}</span>
);

export function Screen8Teams() {
  const [selectedTeam, setSelectedTeam] = useState(0);

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', fontFamily: "'Inter', sans-serif", padding: 24 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontSize: 12, color: colors.textMuted }}>
        <span>WORKFORCE_OS</span>
        <span>/</span>
        <span>ORGANIZATION</span>
        <span>/</span>
        <span style={{ color: colors.textPrimary, fontWeight: 500 }}>TEAMS & STRUCTURE</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: colors.textPrimary, margin: 0 }}>Team Capacity & Allocation Management</h1>
          <p style={{ fontSize: 13, color: colors.textSecondary, margin: '4px 0 0' }}>Monitor team utilization, reassign workloads, and manage organizational structure</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            backgroundColor: colors.info, color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Icon name="group_add" size={16} /> Create New Squad
          </button>
          <button style={{
            backgroundColor: colors.card, color: colors.textPrimary, border: `1px solid ${colors.cardBorder}`,
            borderRadius: 8, padding: '8px 16px', fontSize: 13, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Icon name="swap_horiz" size={16} /> Reassign Members
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{
        backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10,
        padding: '12px 16px', display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center',
      }}>
        <Icon name="filter_list" size={18} />
        <select style={{
          padding: '6px 12px', borderRadius: 6, border: `1px solid ${colors.cardBorder}`,
          backgroundColor: colors.surfaceLow, fontSize: 12, color: colors.textPrimary, minWidth: 140,
        }}>
          <option>All Divisions</option>
          <option>Engineering</option>
          <option>Product</option>
          <option>Data & AI</option>
        </select>
        <select style={{
          padding: '6px 12px', borderRadius: 6, border: `1px solid ${colors.cardBorder}`,
          backgroundColor: colors.surfaceLow, fontSize: 12, color: colors.textPrimary, minWidth: 140,
        }}>
          <option>All Teams</option>
          <option>Distributed Systems Core</option>
          <option>Cloud Infra</option>
          <option>ML Platform</option>
          <option>Security Ops</option>
        </select>
        <select style={{
          padding: '6px 12px', borderRadius: 6, border: `1px solid ${colors.cardBorder}`,
          backgroundColor: colors.surfaceLow, fontSize: 12, color: colors.textPrimary, minWidth: 120,
        }}>
          <option>All Status</option>
          <option>Overloaded</option>
          <option>At Capacity</option>
          <option>Available</option>
        </select>
      </div>

      {/* Team Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {teamCards.map((team, i) => (
          <div
            key={i}
            onClick={() => setSelectedTeam(i)}
            style={{
              backgroundColor: colors.card, border: `1px solid ${selectedTeam === i ? colors.info : colors.cardBorder}`,
              borderRadius: 10, padding: 16, cursor: 'pointer',
              boxShadow: selectedTeam === i ? `0 0 0 1px ${colors.info}` : 'none',
              transition: 'border-color 0.2s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: colors.textPrimary, margin: 0, lineHeight: 1.3 }}>{team.name}</h3>
              {team.overloaded > 0 && (
                <span style={{
                  backgroundColor: colors.dangerBg, color: colors.danger, fontSize: 11, fontWeight: 600,
                  padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap',
                }}>{team.overloaded} overloaded</span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, color: colors.textSecondary, fontSize: 13 }}>
              <Icon name="group" size={16} />
              <span>{team.members} members</span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: colors.textMuted, marginBottom: 4 }}>
                <span>Utilization</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{team.util}%</span>
              </div>
              <div style={{ width: '100%', height: 6, borderRadius: 3, backgroundColor: colors.surfaceLow, overflow: 'hidden' }}>
                <div style={{
                  width: `${team.util}%`, height: '100%', borderRadius: 3,
                  backgroundColor: team.util > 90 ? colors.danger : team.util > 80 ? colors.warning : colors.success,
                }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, paddingTop: 10, borderTop: `1px solid ${colors.surfaceLow}` }}>
              <div style={{
                width: 24, height: 24, borderRadius: 12, backgroundColor: colors.infoBg, color: colors.info,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700,
              }}>{team.leadAvatar}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: colors.textPrimary }}>Lead: {team.lead}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Team Roster */}
      <div style={{
        backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12,
        padding: 20, marginBottom: 24,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, margin: 0 }}>Active Team Roster</h2>
            <p style={{ fontSize: 12, color: colors.textSecondary, margin: '2px 0 0' }}>{teamCards[selectedTeam].name} &middot; {rosterMembers.length} members</p>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button style={{
              fontSize: 12, padding: '6px 12px', borderRadius: 6, border: `1px solid ${colors.cardBorder}`,
              backgroundColor: colors.card, color: colors.textPrimary, cursor: 'pointer', fontWeight: 500,
            }}>Export Roster</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rosterMembers.map((m) => (
            <div key={m.id} style={{
              display: 'grid', gridTemplateColumns: '200px 1fr 120px 100px 100px 180px',
              alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 8,
              backgroundColor: m.overloaded ? colors.dangerBg : colors.surfaceLow,
              border: `1px solid ${m.overloaded ? '#fecdd3' : 'transparent'}`,
            }}>
              {/* Avatar + Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 18, backgroundColor: colors.infoBg,
                  color: colors.info, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>{m.avatar}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: colors.textPrimary }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: colors.textSecondary }}>{m.role}</div>
                </div>
              </div>

              {/* Capacity Bar */}
              <div>
                <div style={{ fontSize: 11, color: colors.textMuted, marginBottom: 3 }}>Current Capacity</div>
                <UtilBar value={m.capacity} />
              </div>

              {/* Sprint Tasks */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: colors.textPrimary }}>{m.sprintTasks}</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>Sprint Tasks</div>
              </div>

              {/* Skill Match */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 14, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                  color: m.skillMatch > 90 ? colors.success : m.skillMatch > 80 ? colors.warning : colors.danger,
                }}>{m.skillMatch}%</div>
                <div style={{ fontSize: 10, color: colors.textMuted }}>Skill Match</div>
              </div>

              {/* Status Badge */}
              <div>
                {m.overloaded ? (
                  <span style={{
                    backgroundColor: colors.dangerBg, color: colors.danger, fontSize: 11, fontWeight: 600,
                    padding: '3px 8px', borderRadius: 4,
                  }}>Overloaded</span>
                ) : m.capacity > 80 ? (
                  <span style={{
                    backgroundColor: colors.warningBg, color: colors.warning, fontSize: 11, fontWeight: 600,
                    padding: '3px 8px', borderRadius: 4,
                  }}>At Capacity</span>
                ) : (
                  <span style={{
                    backgroundColor: colors.successBg, color: colors.success, fontSize: 11, fontWeight: 600,
                    padding: '3px 8px', borderRadius: 4,
                  }}>Available</span>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 4 }}>
                <button style={{
                  fontSize: 11, padding: '4px 8px', borderRadius: 4, border: `1px solid ${colors.cardBorder}`,
                  backgroundColor: colors.card, color: colors.textSecondary, cursor: 'pointer',
                }} title="Reassign Task"><Icon name="swap_horiz" size={14} /></button>
                <button style={{
                  fontSize: 11, padding: '4px 8px', borderRadius: 4, border: `1px solid ${colors.cardBorder}`,
                  backgroundColor: colors.card, color: colors.textSecondary, cursor: 'pointer',
                }} title="Adjust Capacity"><Icon name="tune" size={14} /></button>
                <button style={{
                  fontSize: 11, padding: '4px 8px', borderRadius: 4, border: `1px solid ${colors.cardBorder}`,
                  backgroundColor: colors.card, color: colors.textSecondary, cursor: 'pointer',
                }} title="View Profile"><Icon name="person" size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Allocation Matrix */}
      <div style={{
        backgroundColor: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 12,
        padding: 20,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: colors.textPrimary, margin: 0 }}>Project Allocation Matrix</h2>
          <span style={{ fontSize: 12, color: colors.textSecondary }}>{teamCards[selectedTeam].name}</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${colors.cardBorder}` }}>
              {['Project', 'Status', 'Deadline', 'Assigned Hours', 'Workload Density'].map((h) => (
                <th key={h} style={{
                  textAlign: 'left', padding: '10px 12px', fontSize: 11, fontWeight: 600,
                  color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5,
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projectAllocations.map((p, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${colors.surfaceLow}` }}>
                <td style={{ padding: '12px', fontWeight: 500, color: colors.textPrimary }}>{p.project}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                    backgroundColor: p.status === 'Critical' ? colors.dangerBg : p.status === 'Active' ? colors.infoBg : colors.surfaceLow,
                    color: p.status === 'Critical' ? colors.danger : p.status === 'Active' ? colors.info : colors.textSecondary,
                  }}>{p.status}</span>
                </td>
                <td style={{ padding: '12px', color: colors.textSecondary }}>{p.deadline}</td>
                <td style={{ padding: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{p.assignedHours}</td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 80, height: 6, borderRadius: 3, backgroundColor: colors.surfaceLow, overflow: 'hidden' }}>
                      <div style={{
                        width: `${p.density}%`, height: '100%', borderRadius: 3,
                        backgroundColor: p.density >= 100 ? colors.danger : p.density > 75 ? colors.warning : colors.success,
                      }} />
                    </div>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600,
                      color: p.density >= 100 ? colors.danger : p.density > 75 ? colors.warning : colors.textSecondary,
                    }}>{p.density}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Screen8Teams;
