import React, { useState } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Sidebar } from '@/components/layout/Sidebar';
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

const screens: Record<string, React.FC> = {
  '1': Screen1OrgChart,
  '2': Screen2Navigation,
  '3': Screen3Employee,
  '4': Screen4Workload,
  '5': Screen5Performance,
  '6': Screen6Heatmap,
  '7': Screen7Rebalance,
  '8': Screen8Teams,
  '9': Screen9MyTasks,
  '10': Screen10Planning,
  '11': Screen11WhatIf,
  '12': Screen12Career,
};

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('2');

  const ScreenComponent = screens[currentScreen] || Screen2Navigation;

  return (
    <div className="min-h-screen bg-[#f9f9fa] font-['Inter',system-ui,sans-serif] text-[#1a1c1d] antialiased">
      <Sidebar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />

      <div className="ml-64 flex flex-col min-h-screen">
        <TopBar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />

        <main className="flex-1 p-6">
          <ScreenComponent />
        </main>
      </div>
    </div>
  );
};

export default App;
