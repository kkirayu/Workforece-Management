import type { Employee, Task, OKR, PerformanceCycle, RebalanceScenario } from '../types';

const FIRST_NAMES = [
  'David','Sarah','Michael','Jennifer','James','Emily','Robert','Jessica','William','Ashley',
  'Ahmad','Maria','Carlos','Yuki','Wei','Priya','Olga','Hans','Fatima','Liam',
  'Emma','Noah','Sophia','Alexander','Isabella','Daniel','Mia','Matthew','Charlotte','Andrew',
  'Grace','Thomas','Ella','Joseph','Aria','Charles','Chloe','Christopher','Zoey','Ryan',
  'Lily','Nathan','Ava','Benjamin','Evelyn','Samuel','Scarlett','Henry','Victoria','Ethan',
];

const LAST_NAMES = [
  'Kim','Johnson','Patel','Chen','Rodriguez','Williams','Nakamura','Brown','Garcia','Singh',
  'Mueller','Anderson','Taylor','Martinez','Lee','White','Clark','Harris','Lewis','Walker',
  'Young','King','Wright','Scott','Green','Baker','Adams','Nelson','Hill','Campbell',
  'Mitchell','Roberts','Carter','Phillips','Evans','Turner','Torres','Parker','Collins','Edwards',
  'Stewart','Morris','Murphy','Rivera','Cook','Rogers','Morgan','Peterson','Cooper','Reed',
];

const DIVISIONS = ['Engineering','Product','Design','Operations','Sales'] as const;

const DEPARTMENTS: Record<string, string[]> = {
  Engineering: ['Backend','Frontend','DevOps','QA','Data'],
  Product: ['Product Management','Business Analysis'],
  Design: ['UI/UX','Brand Design'],
  Operations: ['People Ops','Finance'],
  Sales: ['Enterprise Sales','SMB Sales'],
};

const TEAMS: Record<string, string[]> = {
  Backend: ['Platform Core','API Services','Integrations'],
  Frontend: ['Web App','Mobile App','Design System'],
  DevOps: ['Infrastructure','SRE'],
  QA: ['Manual QA','Automation'],
  Data: ['Analytics','ML Engineering'],
  'Product Management': ['Core Product','Growth'],
  'Business Analysis': ['Enterprise Solutions'],
  'UI/UX': ['Product Design','Research'],
  'Brand Design': ['Marketing Design'],
  'People Ops': ['Recruitment','Employee Relations'],
  Finance: ['Accounting','FP&A'],
  'Enterprise Sales': ['Mid-Market','Strategic'],
  'SMB Sales': ['Inside Sales'],
};

const SKILLS_BY_DIV: Record<string, string[]> = {
  Engineering: ['Python','TypeScript','React','Node.js','Go','Kubernetes','AWS','PostgreSQL','Redis','GraphQL'],
  Product: ['Roadmapping','User Research','Data Analysis','A/B Testing','SQL','Jira'],
  Design: ['Figma','Prototyping','User Research','Design Systems','Adobe CC','Sketch'],
  Operations: ['HR Management','Compliance','Budgeting','Process Design'],
  Sales: ['CRM','Negotiation','Presentation','Contract Management'],
};

const LEVELS = ['Junior','Mid','Senior','Staff','Principal'] as const;
const LOCATIONS = ['Jakarta','Singapore','Remote','San Francisco'] as const;
const STATUSES = ['Active','Active','Active','Active','On Leave'] as const;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function pick<T>(arr: readonly T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickN<T>(arr: readonly T[], n: number, rng: () => number): T[] {
  const shuffled = [...arr].sort(() => rng() - 0.5);
  return shuffled.slice(0, n);
}

function seededEmployees(): Employee[] {
  const rng = seededRandom(42);
  const employees: Employee[] = [];

  for (let i = 0; i < 50; i++) {
    const firstName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lastName = LAST_NAMES[i % LAST_NAMES.length];
    const division = pick(DIVISIONS, rng);
    const dept = pick(DEPARTMENTS[division], rng);
    const team = pick(TEAMS[dept], rng);
    const level = pick(LEVELS, rng);
    const skillDiv = SKILLS_BY_DIV[division] || SKILLS_BY_DIV.Engineering;
    const skills = pickN(skillDiv, 2 + Math.floor(rng() * 4), rng);
    const skillLevels: Record<string, number> = {};
    skills.forEach((s) => { skillLevels[s] = 1 + Math.floor(rng() * 5); });

    const capacityHours = pick([20, 30, 40], rng);
    const allocatedHours = Math.round(capacityHours * (0.4 + rng() * 0.75) * 10) / 10;
    const actualHours = Math.round(allocatedHours * (0.7 + rng() * 0.4) * 10) / 10;
    const utilization = Math.min(Math.round((allocatedHours / capacityHours) * 100 * 10) / 10, 130);
    const performanceScore = Math.round((2.5 + rng() * 2.5) * 10) / 10;

    const joinDate = new Date(2020, 0, 1);
    joinDate.setDate(joinDate.getDate() + Math.floor(rng() * 1800));

    const positions: Record<string, string[]> = {
      Engineering: ['Software Engineer','Senior Engineer','Staff Engineer','Principal Engineer','Engineering Manager'],
      Product: ['Product Manager','Senior PM','Business Analyst'],
      Design: ['UX Designer','UI Designer','Design Lead'],
      Operations: ['HR Specialist','Finance Analyst'],
      Sales: ['Account Executive','Sales Manager','SDR'],
    };

    employees.push({
      id: `EMP${String(i + 1).padStart(4, '0')}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@nexustech.com`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}`,
      division,
      department: dept,
      team,
      position: pick(positions[division] || ['Specialist'], rng),
      level,
      status: pick(STATUSES, rng) as Employee['status'],
      joinDate: joinDate.toISOString().split('T')[0],
      location: pick(LOCATIONS, rng),
      skills,
      skillLevels,
      capacityHours,
      allocatedHours,
      actualHours,
      utilization,
      performanceScore,
      reportsCount: Math.floor(rng() * 8),
    });
  }

  employees.forEach((e) => {
    const candidates = employees.filter(
      (c) => c.id !== e.id && ['Senior','Staff','Lead','Manager','Director'].includes(c.level),
    );
    if (candidates.length) {
      e.managerId = pick(candidates, rng).id;
    }
  });

  return employees;
}

export const EMPLOYEES = seededEmployees();

export const ORG_TREE: Record<string, Record<string, Record<string, string[]>>> = {};
DIVISIONS.forEach((div) => {
  ORG_TREE[div] = {};
  DEPARTMENTS[div].forEach((dept) => {
    ORG_TREE[div][dept] = {};
    TEAMS[dept].forEach((team) => {
      ORG_TREE[div][dept][team] = EMPLOYEES
        .filter((e) => e.division === div && e.department === dept && e.team === team)
        .map((e) => e.name);
    });
  });
});

export const WEEKLY_DATA = (() => {
  const rng = seededRandom(100);
  const data: { week: string; employee: string; capacity: number; allocated: number; actual: number }[] = [];
  for (let w = 1; w <= 12; w++) {
    EMPLOYEES.slice(0, 20).forEach((emp) => {
      data.push({
        week: `W${w}`,
        employee: emp.name,
        capacity: emp.capacityHours,
        allocated: Math.round(emp.allocatedHours * (0.85 + rng() * 0.3) * 10) / 10,
        actual: Math.round(emp.allocatedHours * (0.7 + rng() * 0.4) * 10) / 10,
      });
    });
  }
  return data;
})();

export const OKRS: OKR[] = [
  { id: '1', goal: 'Improve Platform Reliability', keyResult: 'Achieve 99.9% uptime', progress: 87, owner: 'David Kim', quarter: 'Q3 2026', status: 'On Track' },
  { id: '2', goal: 'Accelerate Feature Delivery', keyResult: 'Reduce avg cycle time to 3 days', progress: 62, owner: 'Sarah Johnson', quarter: 'Q3 2026', status: 'At Risk' },
  { id: '3', goal: 'Enhance Customer Satisfaction', keyResult: 'NPS score >= 75', progress: 91, owner: 'Michael Patel', quarter: 'Q3 2026', status: 'On Track' },
  { id: '4', goal: 'Build AI Capabilities', keyResult: 'Launch 3 AI-powered features', progress: 45, owner: 'Emily Chen', quarter: 'Q3 2026', status: 'Behind' },
  { id: '5', goal: 'Strengthen Security Posture', keyResult: 'Zero critical vulnerabilities', progress: 78, owner: 'James Williams', quarter: 'Q3 2026', status: 'On Track' },
  { id: '6', goal: 'Grow Revenue', keyResult: 'Increase ARR by 25%', progress: 55, owner: 'Jennifer Brown', quarter: 'Q3 2026', status: 'At Risk' },
  { id: '7', goal: 'Improve Developer Experience', keyResult: 'CI/CD pipeline < 10min', progress: 72, owner: 'Robert Garcia', quarter: 'Q3 2026', status: 'On Track' },
  { id: '8', goal: 'Expand Market Presence', keyResult: 'Enter 2 new regions', progress: 38, owner: 'Jessica Lee', quarter: 'Q3 2026', status: 'Behind' },
];

export const KPIS = [
  { kpi: 'Task Completion Rate', target: 90, actual: 85, weight: 30 },
  { kpi: 'Code Quality Score', target: 8.5, actual: 7.8, weight: 25 },
  { kpi: 'Deadline Adherence', target: 95, actual: 88, weight: 20 },
  { kpi: 'Productivity Index', target: 80, actual: 76, weight: 15 },
  { kpi: 'Collaboration Score', target: 90, actual: 92, weight: 10 },
];

export const PERFORMANCE_CYCLES: PerformanceCycle[] = (() => {
  const rng = seededRandom(200);
  return Array.from({ length: 12 }, (_, i) => ({
    month: `2026-${String(i + 1).padStart(2, '0')}`,
    completion: Math.round((70 + rng() * 25) * 10) / 10,
    quality: Math.round((65 + rng() * 27) * 10) / 10,
    deadline: Math.round((75 + rng() * 23) * 10) / 10,
    productivity: Math.round((60 + rng() * 28) * 10) / 10,
    collaboration: Math.round((70 + rng() * 25) * 10) / 10,
    overall: Math.round((70 + rng() * 23) * 10) / 10,
  }));
})();

export const HEATMAP_DATA: number[][] = (() => {
  const rng = seededRandom(300);
  return Array.from({ length: 25 }, () =>
    Array.from({ length: 12 }, () => 40 + Math.floor(rng() * 70)),
  );
})();

export const HEATMAP_ROWS = EMPLOYEES.slice(0, 25).map((e) => e.name);
export const HEATMAP_COLS = Array.from({ length: 12 }, (_, i) => `W${i + 1}`);

export const REBALANCE_SCENARIO: RebalanceScenario = (() => {
  const emp = EMPLOYEES[3];
  return {
    employee: emp,
    currentTasks: [
      { id: 't1', title: 'Payment Gateway Integration', project: 'FinTech Suite', hours: 16, priority: 'High', status: 'In Progress', dueDate: '2026-10-15', keep: true },
      { id: 't2', title: 'API Rate Limiting', project: 'Platform Core', hours: 12, priority: 'Medium', status: 'In Progress', dueDate: '2026-10-20', keep: true },
      { id: 't3', title: 'Database Migration v3', project: 'Infrastructure', hours: 10, priority: 'High', status: 'Ready', dueDate: '2026-10-25', keep: true },
      { id: 't4', title: 'Code Review Sprint', project: 'Internal', hours: 8, priority: 'Low', status: 'In Progress', dueDate: '2026-10-30', keep: true },
    ],
    proposedTasks: [
      { id: 't1', title: 'Payment Gateway Integration', project: 'FinTech Suite', hours: 16, priority: 'High', status: 'In Progress', dueDate: '2026-10-15', keep: true },
      { id: 't2', title: 'API Rate Limiting', project: 'Platform Core', hours: 12, priority: 'Medium', status: 'In Progress', dueDate: '2026-10-20', keep: true },
      { id: 't3', title: 'Database Migration v3', project: 'Infrastructure', hours: 10, priority: 'High', status: 'Ready', dueDate: '2026-10-25', reassignedTo: 'Liam Walker', keep: false },
      { id: 't4', title: 'Code Review Sprint', project: 'Internal', hours: 8, priority: 'Low', status: 'In Progress', dueDate: '2026-10-30', keep: true },
      { id: 't5', title: 'Auth Service Refactor', project: 'Platform Core', hours: 14, priority: 'Medium', status: 'Ready', dueDate: '2026-11-05', isNew: true, keep: true },
    ],
    impact: {
      currentUtilization: 123,
      proposedUtilization: 78,
      affectedProjects: 2,
      riskLevel: 'Low',
      skillMatch: 92,
    },
  };
})();

export function getUtilizationColor(util: number): string {
  if (util < 60) return 'text-blue-400';
  if (util < 80) return 'text-green-400';
  if (util < 90) return 'text-yellow-400';
  if (util <= 100) return 'text-orange-400';
  return 'text-red-500';
}

export function getUtilizationBg(util: number): string {
  if (util < 60) return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  if (util < 80) return 'bg-green-500/10 text-green-400 border-green-500/20';
  if (util < 90) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  if (util <= 100) return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
  return 'bg-red-500/10 text-red-400 border-red-500/20';
}

export function getUtilizationHex(util: number): string {
  if (util < 60) return '#60a5fa';
  if (util < 80) return '#4ade80';
  if (util < 90) return '#facc15';
  if (util <= 100) return '#fb923c';
  return '#ef4444';
}

export function getUtilizationLabel(util: number): string {
  if (util < 60) return 'Underutilized';
  if (util < 80) return 'Healthy';
  if (util < 90) return 'High';
  if (util <= 100) return 'Overloaded';
  return 'Critical';
}

export function getPerformanceColor(score: number): string {
  if (score >= 4.5) return '#4ade80';
  if (score >= 3.5) return '#60a5fa';
  if (score >= 2.5) return '#facc15';
  return '#ef4444';
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'On Track': return 'bg-green-500/10 text-green-400 border border-green-500/20';
    case 'At Risk': return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
    case 'Behind': return 'bg-red-500/10 text-red-400 border border-red-500/20';
    case 'Completed': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    default: return 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
  }
}

export function getPriorityColor(p: string): string {
  switch (p) {
    case 'Critical': return 'bg-red-500/10 text-red-400 border border-red-500/20';
    case 'High': return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
    case 'Medium': return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20';
    case 'Low': return 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
    default: return 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
  }
}
