import api from './api';

export const employeeApi = {
  list: (params?: Record<string, string>) => api.get('/employees', { params }),
  get: (id: number) => api.get(`/employees/${id}`),
  create: (data: any) => api.post('/employees', data),
  update: (id: number, data: any) => api.patch(`/employees/${id}`, data),
  delete: (id: number) => api.delete(`/employees/${id}`),
  stats: () => api.get('/employees/stats'),
  bulkUpdate: (data: any) => api.patch('/employees/bulk', data),

  importCsv: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/employees/import', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  downloadTemplate: () => api.get('/employees/import/template', { responseType: 'blob' }),

  getSkills: (employeeId: number) => api.get('/employee-skills', { params: { employee_id: employeeId } }),
  assignSkill: (data: { employee_id: number; skill_id: number; level: number; verification_type?: string }) =>
    api.post('/employee-skills', data),
  updateSkill: (id: number, data: any) => api.patch(`/employee-skills/${id}`, data),
  removeSkill: (id: number) => api.delete(`/employee-skills/${id}`),
  bulkAssignSkills: (data: { employee_id: number; skills: { skill_id: number; level: number }[] }) =>
    api.post('/employee-skills/bulk', data),
  getSkillGaps: (employeeId: number) => api.get(`/employees/${employeeId}/skill-gaps`),

  getCapacity: (employeeId: number) => api.get(`/employees/${employeeId}/capacity`),
};
