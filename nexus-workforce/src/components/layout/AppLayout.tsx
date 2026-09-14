import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f9fa] font-['Inter',system-ui,sans-serif] text-[#1a1c1d] antialiased">
      <Sidebar />
      <div className="ml-64 flex flex-col min-h-screen">
        <TopBar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};