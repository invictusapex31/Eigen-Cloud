import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const tabs = [
  { id: 'explore', label: 'Explore Tools' },
  { id: 'oss', label: 'Open Source' },
  { id: 'hub', label: 'Model Hub' },
  { id: 'community', label: 'Community' },
];

export const TabsBar = () => {
  const [activeTab, setActiveTab] = useState('explore');

  return (
    <div className="sticky top-16 z-[500] w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-14 flex items-center overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative h-14 px-1 text-sm font-medium transition-colors outline-none",
                activeTab === tab.id ? "text-white" : "text-white/40 hover:text-white"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
