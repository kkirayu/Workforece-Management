import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface Tenant {
  id: number;
  name: string;
  plan: string;
}

interface AppState {
  user: User | null;
  tenant: Tenant | null;
  sidebarCollapsed: boolean;
  setUser: (user: User | null) => void;
  setTenant: (tenant: Tenant | null) => void;
  toggleSidebar: () => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  tenant: null,
  sidebarCollapsed: false,
  setUser: (user) => set({ user }),
  setTenant: (tenant) => set({ tenant }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  logout: () => {
    localStorage.removeItem('auth_token');
    set({ user: null, tenant: null });
    window.location.href = '/login';
  },
}));