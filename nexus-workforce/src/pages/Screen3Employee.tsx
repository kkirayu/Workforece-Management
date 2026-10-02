import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { employeeApi } from '@/services/employeeApi';

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  verification_type: string;
  recency: string;
  is_active: boolean;
}

interface EmployeeData {
  id: number;
  employee_id: string;
  name: string;
  department: string;
  team: string;
  position: string;
  level: string;
  status: string;
  email: string;
  location: string;
  manager: string;
  utilization: number;
  allocated_hours: number;
  available_hours: number;
  critical_path_sprints: number;
  mentorship_pods: number;
}

interface SkillGap {
  id: number;
  skill: string;
  criticality: string;
  description: string;
  progress: number;
}

interface TargetReadiness {
  target_level: string;
  target_role: string;
  readiness_pct: number;
}

const DEFAULT_EMPLOYEE: EmployeeData = {
  id: 1,
  employee_id: 'EMP-8842',
  name: 'David Kim',
  department: 'Platform Infrastructure',
  team: 'Distributed Systems',
  position: 'Staff Distributed Systems Engineer',
  level: 'L7',
  status: 'Active',
  email: 'david.k@acme.internal',
  location: 'San Francisco Hybrid',
  manager: 'Elena Rostova, VP Infra',
  utilization: 96.2,
  allocated_hours: 38.5,
  available_hours: 1.5,
  critical_path_sprints: 4,
  mentorship_pods: 2,
};

const DEFAULT_SKILLS: Skill[] = [
  { id: 1, name: 'Go/Golang', category: 'Backend Systems', level: 5, verification_type: 'ARB Certified', recency: 'Active Sprint 42', is_active: true },
  { id: 2, name: 'Apache Kafka', category: 'Event Streaming', level: 5, verification_type: 'Peer Confirmed', recency: 'Sprint 41', is_active: false },
  { id: 3, name: 'Distributed Consensus/Raft', category: 'Distributed Systems', level: 4, verification_type: 'ARB Certified', recency: 'Sprint 41', is_active: false },
  { id: 4, name: 'Kubernetes CRDs', category: 'Platform Engineering', level: 4, verification_type: 'Peer Confirmed', recency: 'Active Sprint 42', is_active: true },
  { id: 5, name: 'eBPF & Kernel Observability', category: 'Systems Programming', level: 3, verification_type: 'Peer Confirmed', recency: 'Sprint 39', is_active: false },
  { id: 6, name: 'Rust Systems', category: 'Systems Programming', level: 4, verification_type: 'ARB Certified', recency: 'Sprint 40', is_active: false },
  { id: 7, name: 'High-Concurrency DB Design', category: 'Database Engineering', level: 5, verification_type: 'ARB Certified', recency: 'Active Sprint 42', is_active: true },
];

const DEFAULT_GAPS: SkillGap[] = [
  { id: 1, skill: 'Formal Verification (TLA+)', criticality: 'Critical', description: 'Required for L7 consensus protocol design', progress: 15 },
  { id: 2, skill: 'Large-Scale ML Infra', criticality: 'High', description: 'Needed for cross-org ML platform initiatives', progress: 35 },
];

const DEFAULT_READINESS: TargetReadiness = { target_level: 'L7 Principal', target_role: 'Distributed Systems Architect', readiness_pct: 82 };

const LEVEL_LABELS: Record<number, string> = { 1: 'Novice', 2: 'Developing', 3: 'Proficient', 4: 'Advanced', 5: 'Master' };

const MASTERY_STYLES: Record<string, { bg: string; ring: string }> = {
  'ARB Certified': { bg: 'bg-[#6366f1]', ring: 'bg-[#eef2ff] text-[#6366f1]' },
  'Peer Confirmed': { bg: 'bg-[#10b981]', ring: 'bg-[#ecfdf5] text-[#10b981]' },
};

export const Screen3Employee: React.FC = () => {
  const params = useParams();
  const employeeId = Number(params.id) || 1;

  const [employee, setEmployee] = useState<EmployeeData>(DEFAULT_EMPLOYEE);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [gaps, setGaps] = useState<SkillGap[]>(DEFAULT_GAPS);
  const [readiness, setReadiness] = useState<TargetReadiness>(DEFAULT_READINESS);
  const [activeTab, setActiveTab] = useState('skills');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [empRes, skillsRes, gapsRes] = await Promise.all([
          employeeApi.get(employeeId),
          employeeApi.getSkills(employeeId),
          employeeApi.getSkillGaps(employeeId),
        ]);
        setEmployee(empRes.data.data || DEFAULT_EMPLOYEE);
        setSkills(skillsRes.data.data || DEFAULT_SKILLS);
        setGaps(gapsRes.data.data || DEFAULT_GAPS);
      } catch {
        setEmployee(DEFAULT_EMPLOYEE);
        setSkills(DEFAULT_SKILLS);
        setGaps(DEFAULT_GAPS);
        setError('API unavailable - using mock data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [employeeId]);

  const tabs = [
    { id: 'skills', label: 'Skill Matrix & Competency', count: skills.length },
    { id: 'workload', label: 'Workload & Capacity History' },
    { id: 'performance', label: 'Performance Snapshot' },
    { id: 'engagements', label: 'Project Engagements' },
  ];

  const initials = employee.name.split(' ').map(n => n[0]).join('');

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
          <span className="font-medium text-[#09090b]">{employee.name} <span className="font-normal text-[#71717a]">({employee.employee_id})</span></span>
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
              <span className="material-symbols-outlined text-[18px] mr-1">download</span>Export Talent Card (PDF)
            </button>
            <button className="px-4 py-2 bg-[#000000] text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#1a1a1a] transition-colors">
              <span className="material-symbols-outlined animate-spin">auto_awesome</span>AI Rebalance Suggestions
            </button>
          </div>
        </div>

        {/* Hero Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Profile Info */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{initials}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold">{employee.name}</h1>
                  <span className="px-2 py-0.5 text-xs font-medium bg-[#09090b] text-white rounded">{employee.level}</span>
                  <span className="px-2 py-0.5 text-xs font-medium bg-[#6366f1] text-white rounded">Staff Engineer</span>
                </div>
                <p className="text-[#71717a] mt-1">{employee.position} · {employee.department}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm pt-2 border-t border-[#e4e4e7]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">badge</span>
                <span className="font-mono-metric-sm font-medium">{employee.employee_id}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">email</span>
                <span>{employee.email}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">location_on</span>
                <span>{employee.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3f3f4] rounded-lg">
                <span className="material-symbols-outlined text-[16px] text-[#71717a]">supervisor_account</span>
                <span>Manager: {employee.manager}</span>
              </div>
            </div>
          </div>

          {/* Right: Workload */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#e4e4e7] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Current Workload Index</h3>
              <span className={`px-2 py-0.5 text-xs font-medium rounded ${employee.utilization > 100 ? 'bg-[#fff1f2] text-[#e11d48]' : employee.utilization >= 80 ? 'bg-[#fffbeb] text-[#f59e0b]' : 'bg-[#ecfdf5] text-[#10b981]'}`}>
                {employee.utilization > 100 ? 'Overloaded' : employee.utilization >= 80 ? 'At Capacity' : 'Under-Utilized'}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-headline-lg font-bold font-[JetBrains_Mono] text-3xl">{employee.utilization}%</span>
                <span className="text-[#71717a]">Utilization</span>
              </div>
              <div className="h-3 bg-[#e8e8e9] rounded-full overflow-hidden">
                <div className="h-full flex" style={{ width: `${Math.min(employee.utilization, 100)}%` }}>
                  <div className="bg-[#000000]" style={{ width: '78%' }}></div>
                  {employee.utilization > 100 && <div className="bg-[#e11d48]" style={{ width: `${Math.min((employee.utilization - 78) / employee.utilization * 100, 22)}%` }}></div>}
                  <div className="bg-[#10b981]" style={{ width: `${Math.max(0, 100 - employee.utilization) / employee.utilization * 100}%` }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#71717a]">
                <div><span className="font-medium text-[#09090b]">{employee.allocated_hours}</span> hrs/wk Allocated</div>
                <div><span className="font-medium text-[#09090b]">{employee.available_hours}</span> hrs/wk Available</div>
                <div><span className="font-medium text-[#09090b]">{employee.critical_path_sprints}</span> Critical Path Sprints</div>
                <div><span className="font-medium text-[#09090b]">{employee.mentorship_pods}</span> Mentorship Pods</div>
              </div>
            </div>
            <button className="w-full text-sm text-[#6366f1] font-medium hover:underline mt-2">Adjust Capacity &rarr;</button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
          <div className="flex border-b border-[#e4e4e7]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#000000] text-[#09090b]'
                    : 'border-transparent text-[#71717a] hover:text-[#09090b] hover:bg-[#f9f9fa]'
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-[#000000] text-white rounded-full">{tab.count}</span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'skills' && (
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-1 max-w-sm">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-[#a1a1aa]">search</span>
                  <input type="text" placeholder="Search skills..." className="w-full pl-10 pr-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]" />
                </div>
                <button className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">add</span>Endorse Skill
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Skills Table */}
                <div className="lg:col-span-8">
                  {loading ? (
                    <div className="space-y-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-16 bg-[#f9f9fa] rounded-lg animate-pulse"></div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {skills.map(skill => (
                        <div key={skill.id} className="flex items-center gap-4 px-4 py-3 rounded-lg border border-[#e4e4e7] hover:bg-[#f3f3f4] transition-colors">
                          <div className="flex-1">
                            <div className="font-medium text-sm">{skill.name}</div>
                            <div className="text-xs text-[#71717a]">{skill.category}</div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(l => (
                              <div key={l} className={`w-6 h-6 rounded flex items-center justify-center ${l <= skill.level ? 'bg-[#000000]' : 'bg-[#e8e8e9]'}`}>
                                {l <= skill.level && <span className="material-symbols-outlined text-[12px] text-white">check</span>}
                              </div>
                            ))}
                          </div>
                          <span className="text-xs text-[#71717a] whitespace-nowrap">L{skill.level} {LEVEL_LABELS[skill.level]}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${MASTERY_STYLES[skill.verification_type]?.ring || 'bg-[#f3f3f4] text-[#71717a]'}`}>
                            {skill.verification_type}
                          </span>
                          <span className={`flex items-center gap-1 text-xs whitespace-nowrap ${skill.is_active ? 'text-[#10b981]' : 'text-[#71717a]'}`}>
                            {skill.is_active && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>}
                            {skill.recency}
                          </span>
                          <div className="flex items-center gap-1">
                            <button className="p-1 rounded hover:bg-[#e8e8e9] transition-colors" title="Edit">
                              <span className="material-symbols-outlined text-[16px] text-[#71717a]">edit</span>
                            </button>
                            <button className="p-1 rounded hover:bg-[#e8e8e9] transition-colors" title="Remove">
                              <span className="material-symbols-outlined text-[16px] text-[#a1a1aa]">delete</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Target Readiness */}
                  <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Target Readiness</h3>
                      <span className="text-xs text-[#71717a]">{readiness.target_level}</span>
                    </div>
                    <p className="text-sm text-[#71717a]">{readiness.target_role}</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Readiness</span>
                        <span className="font-mono-metric-sm font-medium">{readiness.readiness_pct}%</span>
                      </div>
                      <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden">
                        <div className="h-full bg-[#10b981] rounded-full" style={{ width: `${readiness.readiness_pct}%` }}></div>
                      </div>
                    </div>
                    <div className="space-y-3 pt-2 border-t border-[#e4e4e7]">
                      {gaps.map(gap => (
                        <div key={gap.id} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{gap.skill}</span>
                            <span className={`px-1.5 py-0.5 text-xs font-medium rounded ${gap.criticality === 'Critical' ? 'bg-[#fff1f2] text-[#e11d48]' : 'bg-[#fffbeb] text-[#f59e0b]'}`}>
                              {gap.criticality}
                            </span>
                          </div>
                          <p className="text-xs text-[#71717a]">{gap.description}</p>
                          <div className="h-1.5 bg-[#e8e8e9] rounded-full overflow-hidden">
                            <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: `${gap.progress}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Peer Review Pulse */}
                  <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-3">
                    <h3 className="font-semibold">Peer Review Pulse</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold font-[JetBrains_Mono] text-[#f59e0b]">4.9</span>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-[#f59e0b]">star</span>)}
                      </div>
                      <span className="text-sm text-[#71717a]">19 360-Reviews</span>
                    </div>
                    <blockquote className="text-sm text-[#71717a] italic border-l-2 border-[#e4e4e7] pl-3 py-1">
                      "David's ability to navigate complex consensus protocols while mentoring junior engineers is exceptional. His Kafka CRD work saved us months."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'skills' && (
            <div className="p-12 text-center text-[#71717a]">
              <span className="material-symbols-outlined text-[40px] text-[#a1a1aa] mb-2 block">construction</span>
              <p className="text-sm">This tab is under development.</p>
            </div>
          )}
        </div>

        {/* Historical Trend Preview */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] p-6">
          <h3 className="font-semibold mb-4">6-Week Rolling Workload</h3>
          <div className="h-32 relative">
            <svg className="w-full h-full" viewBox="0 0 600 128" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L50,92 L100,85 L150,80 L200,75 L250,70 L300,65 L350,62 L400,60 L450,58 L500,55 L550,53 L600,52"
                stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
              />
              <path
                d="M0,100 L50,92 L100,85 L150,80 L200,75 L250,70 L300,65 L350,62 L400,60 L450,58 L500,55 L550,53 L600,52"
                stroke="#000000" strokeWidth="1" fill="url(#sparklineGrad)"
              />
              <circle cx="550" cy="53" r="4" fill="#e11d48" />
              <text x="550" y="45" fontSize="10" fill="#e11d48" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="bold">{employee.utilization}%</text>
            </svg>
            <div className="flex justify-between text-xs text-[#71717a] mt-2">
              <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 5</span><span>Week 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
