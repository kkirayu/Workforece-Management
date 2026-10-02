import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';

interface Employee {
  id: number;
  employeeId: string;
  name: string;
  department: string;
  team: string;
  position: string;
  level: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  utilization: number;
  avatarColor: string;
  initials: string;
}

interface Stats {
  total: number;
  active: number;
  onLeave: number;
  inactive: number;
}

const MOCK_EMPLOYEES: Employee[] = [
  { id: 1, employeeId: 'EMP-8842', name: 'David Kim', department: 'Engineering', team: 'Platform Infrastructure', position: 'Staff Distributed Systems Engineer', level: 'L7', status: 'Active', utilization: 96, avatarColor: '#6366f1', initials: 'DK' },
  { id: 2, employeeId: 'EMP-7231', name: 'Elena Rostova', department: 'Engineering', team: 'VP Office', position: 'VP of Infrastructure', level: 'L8', status: 'Active', utilization: 78, avatarColor: '#10b981', initials: 'ER' },
  { id: 3, employeeId: 'EMP-5619', name: 'Sarah Lin', department: 'Engineering', team: 'ML Platform', position: 'Senior ML Engineer', level: 'L6', status: 'Active', utilization: 85, avatarColor: '#f59e0b', initials: 'SL' },
  { id: 4, employeeId: 'EMP-9104', name: 'Alex Chen', department: 'Engineering', team: 'Backend Systems', position: 'Software Engineer II', level: 'L4', status: 'On Leave', utilization: 45, avatarColor: '#ec4899', initials: 'AC' },
  { id: 5, employeeId: 'EMP-3387', name: 'Priya Sharma', department: 'Product', team: 'Developer Experience', position: 'Product Manager', level: 'L6', status: 'Active', utilization: 92, avatarColor: '#8b5cf6', initials: 'PS' },
  { id: 6, employeeId: 'EMP-4422', name: 'Marcus Johnson', department: 'Engineering', team: 'Database Engineering', position: 'Principal Engineer', level: 'L7', status: 'Active', utilization: 88, avatarColor: '#06b6d4', initials: 'MJ' },
  { id: 7, employeeId: 'EMP-6754', name: 'Fatima Al-Zahra', department: 'Security', team: 'Application Security', position: 'Security Engineer', level: 'L5', status: 'Inactive', utilization: 0, avatarColor: '#10b981', initials: 'FA' },
  { id: 8, employeeId: 'EMP-2198', name: 'James Okafor', department: 'Engineering', team: 'Platform Infrastructure', position: 'Software Engineer I', level: 'L3', status: 'Active', utilization: 67, avatarColor: '#e11d48', initials: 'JO' },
  { id: 9, employeeId: 'EMP-8035', name: 'Yuki Tanaka', department: 'Engineering', team: 'Distributed Systems', position: 'Senior Staff Engineer', level: 'L7', status: 'Active', utilization: 102, avatarColor: '#84cc16', initials: 'YT' },
  { id: 10, employeeId: 'EMP-1156', name: 'Sofia Andersson', department: 'Design', team: 'Design Systems', position: 'Lead Product Designer', level: 'L6', status: 'On Leave', utilization: 38, avatarColor: '#f97316', initials: 'SA' },
];

const MOCK_STATS: Stats = { total: 248, active: 212, onLeave: 18, inactive: 18 };

const DIVISIONS = ['Engineering', 'Product', 'Design', 'Security', 'Data', 'Operations'];
const DEPARTMENTS = ['Platform Infrastructure', 'Backend Systems', 'ML Platform', 'Database Engineering', 'Distributed Systems', 'Developer Experience', 'Application Security', 'Design Systems', 'VP Office'];

const STATUS_OPTIONS = ['All', 'Active', 'On Leave', 'Inactive'];

export const Screen13EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [stats, setStats] = useState<Stats>(MOCK_STATS);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [division, setDivision] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const PAGE_SIZE = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { employeeApi } = await import('@/services/employeeApi');
        const [empRes, statsRes] = await Promise.all([
          employeeApi.list(),
          employeeApi.stats(),
        ]);
        setEmployees(empRes.data.data || MOCK_EMPLOYEES);
        setStats(statsRes.data.data || MOCK_STATS);
      } catch {
        setEmployees(MOCK_EMPLOYEES);
        setStats(MOCK_STATS);
        setError('Using mock data - API unavailable');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()) ||
      emp.team.toLowerCase().includes(search.toLowerCase());
    const matchesDivision = !division || emp.department === division;
    const matchesDept = !department || emp.team === department;
    const matchesStatus = status === 'All' || emp.status === status;
    return matchesSearch && matchesDivision && matchesDept && matchesStatus;
  });

  const paginatedEmployees = filteredEmployees.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(filteredEmployees.length / PAGE_SIZE);

  const clearFilters = () => {
    setSearch('');
    setDivision('');
    setDepartment('');
    setStatus('All');
    setPage(1);
  };

  const getStatusColor = (status: Employee['status']) => {
    switch (status) {
      case 'Active': return 'bg-[#10b981] text-white';
      case 'On Leave': return 'bg-[#f59e0b] text-white';
      default: return 'bg-[#a1a1aa] text-white';
    }
  };

  const getUtilColor = (util: number) => {
    if (util >= 95) return 'bg-[#e11d48]';
    if (util >= 80) return 'bg-[#f59e0b]';
    return 'bg-[#10b981]';
  };

  return (
    <div className="min-h-screen bg-[#f9f9fa] font-[Inter] text-[#09090b]">
      <div className="max-w-[1600px] mx-auto p-6 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#71717a]" aria-label="Breadcrumb">
          <span className="font-medium text-[#09090b]">WORKFORCE_OS</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span>PEOPLE</span>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span className="font-medium text-[#09090b]">EMPLOYEE DIRECTORY</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="font-headline-lg text-2xl font-bold">Employee Directory & Management</h1>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowImportModal(true)}
              className="px-4 py-2 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">upload_file</span>Import CSV
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-[#000000] text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#1a1a1a] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>Add Employee
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-2">
            <p className="text-sm text-[#71717a]">Total Employees</p>
            <p className="font-headline-lg font-bold font-[JetBrains_Mono] text-3xl">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-2">
            <p className="text-sm text-[#71717a]">Active</p>
            <p className="font-headline-lg font-bold font-[JetBrains_Mono] text-3xl text-[#10b981]">{stats.active}</p>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-2">
            <p className="text-sm text-[#71717a]">On Leave</p>
            <p className="font-headline-lg font-bold font-[JetBrains_Mono] text-3xl text-[#f59e0b]">{stats.onLeave}</p>
          </div>
          <div className="bg-white rounded-xl border border-[#e4e4e7] p-5 space-y-2">
            <p className="text-sm text-[#71717a]">Inactive</p>
            <p className="font-headline-lg font-bold font-[JetBrains_Mono] text-3xl text-[#a1a1aa]">{stats.inactive}</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] p-4">
          <div className="flex flex-wrap gap-3 items-end">
            <div className="relative flex-1 min-w-[280px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-[#a1a1aa]">search</span>
              <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-transparent"
              />
            </div>
            <select
              value={division}
              onChange={(e) => { setDivision(e.target.value); setPage(1); }}
              className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000] min-w-[200px]"
            >
              <option value="">All Divisions</option>
              {DIVISIONS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select
              value={department}
              onChange={(e) => { setDepartment(e.target.value); setPage(1); }}
              className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000] min-w-[200px]"
            >
              <option value="">All Departments</option>
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select
              value={status}
              onChange={(e) => { setStatus(e.target.value); setPage(1); }}
              className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#000000] min-w-[160px]"
            >
              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <button
              onClick={clearFilters}
              disabled={!search && !division && !department && status === 'All'}
              className="px-4 py-2.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              {/* Header */}
              <div className="grid grid-cols-12 px-5 py-3 bg-[#f9f9fa] border-b border-[#e4e4e7] text-sm font-medium text-[#71717a] uppercase tracking-wider">
                <div className="col-span-1">Avatar</div>
                <div className="col-span-1 font-mono-metric-sm">ID</div>
                <div className="col-span-2">Name</div>
                <div className="col-span-2">Department</div>
                <div className="col-span-2">Team</div>
                <div className="col-span-1">Position</div>
                <div className="col-span-1">Level</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">Utilization</div>
                <div className="col-span-1">Actions</div>
              </div>

              {/* Rows */}
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-12 px-5 py-4 border-b border-[#e4e4e7] animate-pulse">
                    <div className="col-span-1"><div className="w-10 h-10 rounded-full bg-[#e8e8e9]"></div></div>
                    <div className="col-span-1"><div className="h-4 w-20 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-2"><div className="h-4 w-32 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-2"><div className="h-4 w-28 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-2"><div className="h-4 w-36 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-1"><div className="h-4 w-24 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-1"><div className="h-4 w-12 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-1"><div className="h-4 w-20 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-1"><div className="h-4 w-28 bg-[#e8e8e9] rounded"></div></div>
                    <div className="col-span-1"><div className="h-4 w-20 bg-[#e8e8e9] rounded"></div></div>
                  </div>
                ))
              ) : paginatedEmployees.length === 0 ? (
                <div className="px-5 py-12 text-center text-[#71717a]">No employees found</div>
              ) : (
                paginatedEmployees.map((emp) => (
                  <div
                    key={emp.id}
                    className="grid grid-cols-12 px-5 py-4 border-b border-[#e4e4e7] hover:bg-[#f3f3f4] transition-colors items-center"
                  >
                    <div className="col-span-1">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-white text-sm" style={{ backgroundColor: emp.avatarColor }}>
                        {emp.initials}
                      </div>
                    </div>
                    <div className="col-span-1 font-mono-metric-sm text-[#09090b]">{emp.employeeId}</div>
                    <div className="col-span-2 font-medium">{emp.name}</div>
                    <div className="col-span-2 text-sm text-[#71717a]">{emp.department}</div>
                    <div className="col-span-2 text-sm text-[#71717a]">{emp.team}</div>
                    <div className="col-span-1 text-sm text-[#71717a]">{emp.position}</div>
                    <div className="col-span-1 font-mono-metric-sm font-medium">{emp.level}</div>
                    <div className="col-span-1">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(emp.status)}`}>
                        {emp.status}
                      </span>
                    </div>
                    <div className="col-span-1">
                      <div className="h-2 bg-[#e8e8e9] rounded-full overflow-hidden w-28">
                        <div className="h-full" style={{ width: `${Math.min(emp.utilization, 100)}%`, backgroundColor: getUtilColor(emp.utilization) }}></div>
                      </div>
                      <p className="font-mono-metric-sm text-xs text-[#71717a] mt-1">{emp.utilization}%</p>
                    </div>
                    <div className="col-span-1">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded hover:bg-[#e8e8e9] transition-colors" title="View">
                          <span className="material-symbols-outlined text-[18px] text-[#71717a]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-[#e8e8e9] transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-[18px] text-[#71717a]">edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="px-5 py-4 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-[#71717a]">
              Showing {filteredEmployees.length ? (page - 1) * PAGE_SIZE + 1 : 0} to {Math.min(page * PAGE_SIZE, filteredEmployees.length)} of {filteredEmployees.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Import CSV Modal */}
        <Modal
          isOpen={showImportModal}
          onClose={() => setShowImportModal(false)}
          title="Import Employees from CSV"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-sm text-[#71717a]">Upload a CSV file to bulk import employees. Download the template for the correct format.</p>
            <div className="border-2 border-dashed border-[#e4e4e7] rounded-xl p-8 text-center">
              <span className="material-symbols-outlined text-[40px] text-[#a1a1aa] mb-2 block">cloud_upload</span>
              <p className="text-sm text-[#71717a]">Drag & drop or click to select</p>
              <p className="text-xs text-[#a1a1aa] mt-1">CSV files only</p>
            </div>
            <button
              onClick={async () => {
                const { employeeApi } = await import('@/services/employeeApi');
                const res = await employeeApi.downloadTemplate();
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'employee_import_template.csv');
                document.body.appendChild(link);
                link.click();
                link.remove();
              }}
              className="w-full px-4 py-2 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>Download Template
            </button>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setShowImportModal(false)} className="px-4 py-2 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4]">Cancel</button>
              <button className="px-4 py-2 bg-[#000000] text-white rounded-lg text-sm font-medium hover:bg-[#1a1a1a]">Import</button>
            </div>
          </div>
        </Modal>

        {/* Add Employee Modal */}
        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Employee"
          size="md"
        >
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddModal(false); }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Employee ID</label>
                <input type="text" className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]" placeholder="EMP-XXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]" placeholder="John Doe" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Division</label>
                <select className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]">
                  <option value="">Select Division</option>
                  {DIVISIONS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Department/Team</label>
                <input type="text" className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]" placeholder="Platform Infrastructure" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Position</label>
                <input type="text" className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]" placeholder="Software Engineer" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Level</label>
                <select className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]">
                  <option value="">Select Level</option>
                  {['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'].map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#09090b] mb-1">Status</label>
                <select className="w-full px-3 py-2 border border-[#e4e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#000000]">
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-[#e4e4e7] rounded-lg text-sm font-medium hover:bg-[#f3f3f4]">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-[#000000] text-white rounded-lg text-sm font-medium hover:bg-[#1a1a1a]">Add Employee</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};