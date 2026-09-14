import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAppStore } from '@/stores/useAppStore';
import { Screen1OrgChart } from '@/pages/Screen1OrgChart';
import { Screen2Navigation } from '@/pages/Screen2Navigation';
import { Screen3Employee } from '@/pages/Screen3Employee';
import { Screen4Workload } from '@/pages/Screen4Workload';
import { Screen5Performance } from '@/pages/Screen5Performance';
import { Screen6Heatmap } from '@/pages/Screen6Heatmap';
import { Screen7Rebalance } from '@/pages/Screen7Rebalance';
import { Screen8Teams } from '@/pages/Screen8Teams';
import { Screen9MyTasks } from '@/pages/Screen9MyTasks';
import { Screen10Planning } from '@/pages/Screen10Planning';
import { Screen11WhatIf } from '@/pages/Screen11WhatIf';
import { Screen12Career } from '@/pages/Screen12Career';
import { Login } from '@/pages/Login';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: (
      <ErrorBoundary>
        <AppLayout />
      </ErrorBoundary>
    ),
    children: [
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Screen2Navigation /> },
      { path: 'org-chart', element: <Screen1OrgChart /> },
      { path: 'employee/:id?', element: <Screen3Employee /> },
      { path: 'workload', element: <Screen4Workload /> },
      { path: 'performance', element: <Screen5Performance /> },
      { path: 'heatmap', element: <Screen6Heatmap /> },
      { path: 'rebalance', element: <Screen7Rebalance /> },
      { path: 'teams', element: <Screen8Teams /> },
      { path: 'my-tasks', element: <Screen9MyTasks /> },
      { path: 'planning', element: <Screen10Planning /> },
      { path: 'what-if', element: <Screen11WhatIf /> },
      { path: 'career', element: <Screen12Career /> },
    ],
  },
]);

export const AppRoutes: React.FC = () => {
  const { user } = useAppStore();
  const isAuthenticated = !!user;

  return (
    <QueryClientProvider client={queryClient}>
      {isAuthenticated ? <RouterProvider router={router} /> : <Login />}
    </QueryClientProvider>
  );
};