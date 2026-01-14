import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems: { id: Screen; icon: string; label: string }[] = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'progress', icon: 'auto_stories', label: 'Journal' }, // Mapping 'Journal' to Progress screen as per design cues
    { id: 'therapists', icon: 'grid_view', label: 'Explore' },
    { id: 'profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="relative z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 pb-safe pt-2">
      <div className="flex justify-between items-center px-6 h-16">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive 
                  ? 'text-primary dark:text-primary-light' 
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <span className={`material-symbols-outlined text-[26px] ${isActive ? 'filled' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-bold tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Floating Action Button (FAB) for Chat - Only visible if not on Chat screen */}
      {currentScreen !== 'chat' && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
             <button 
                onClick={() => onNavigate('chat')}
                className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transform transition-transform active:scale-95"
            >
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
            </button>
        </div>
      )}
    </nav>
  );
};

export default BottomNav;