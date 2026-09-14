import api from './api';

// Auth
export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
};

// Dashboard
export const dashboardApi = {
  getMetrics: () => api.get('/dashboard'),
  getAlerts: () => api.get('/dashboard/alerts'),
  getSquadLeaders: () => api.get('/dashboard/squad-leaders'),
};

// Organization
export const orgApi = {
  getTree: () => api.get('/organization/tree'),
};

// Employees
export const employeeApi = {
  list: (params?: Record<string, string>) => api.get('/employees', { params }),
  get: (id: number) => api.get(`/employees/${id}`),
  create: (data: any) => api.post('/employees', data),
  update: (id: number, data: any) => api.patch(`/employees/${id}`, data),
  delete: (id: number) => api.delete(`/employees/${id}`),
  getCapacity: (id: number) => api.get(`/employees/${id}/capacity`),
};

// Skills
export const skillApi = {
  list: (params?: Record<string, string>) => api.get('/skills', { params }),
  get: (id: number) => api.get(`/skills/${id}`),
  create: (data: any) => api.post('/skills', data),
  update: (id: number, data: any) => api.patch(`/skills/${id}`, data),
  delete: (id: number) => api.delete(`/skills/${id}`),
  getMatrix: () => api.get('/skills/matrix'),
};

// Projects
export const projectApi = {
  list: (params?: Record<string, string>) => api.get('/projects', { params }),
  get: (id: number) => api.get(`/projects/${id}`),
  create: (data: any) => api.post('/projects', data),
  update: (id: number, data: any) => api.patch(`/projects/${id}`, data),
  delete: (id: number) => api.delete(`/projects/${id}`),
  getTasks: (projectId: number) => api.get(`/projects/${projectId}/tasks`),
  createTask: (projectId: number, data: any) => api.post(`/projects/${projectId}/tasks`, data),
};

// Tasks
export const taskApi = {
  update: (projectId: number, taskId: number, data: any) =>
    api.patch(`/projects/${projectId}/tasks/${taskId}`, data),
  updateStatus: (taskId: number, status: string) =>
    api.patch(`/tasks/${taskId}/status`, { status }),
  assign: (taskId: number, employeeId: number) =>
    api.post(`/tasks/${taskId}/assign`, { employee_id: employeeId }),
};

// Capacity
export const capacityApi = {
  getHeatmap: (params?: Record<string, string>) =>
    api.get('/capacity/heatmap', { params }),
  getTeamCapacity: (teamId: number) =>
    api.get(`/capacity/team/${teamId}`),
  getEmployeeCapacity: (employeeId: number, params?: Record<string, string>) =>
    api.get(`/employees/${employeeId}/capacity`, { params }),
};

// Performance
export const performanceApi = {
  getCycles: () => api.get('/performance/cycles'),
  getReviews: (params?: Record<string, string>) =>
    api.get('/performance/reviews', { params }),
  submitReview: (data: any) => api.post('/performance/reviews', data),
  getDashboard: (employeeId: number) =>
    api.get(`/performance/dashboard/${employeeId}`),
};

// Goals
export const goalApi = {
  list: (params?: Record<string, string>) => api.get('/goals', { params }),
  create: (data: any) => api.post('/goals', data),
  update: (id: number, data: any) => api.patch(`/goals/${id}`, data),
  delete: (id: number) => api.delete(`/goals/${id}`),
};

export default {
  auth: authApi,
  dashboard: dashboardApi,
  org: orgApi,
  employees: employeeApi,
  skills: skillApi,
  projects: projectApi,
  tasks: taskApi,
  capacity: capacityApi,
  performance: performanceApi,
  goals: goalApi,
};