import React from 'react';
import { Screen, User } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  user?: User | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, user }) => {
  const firstName = user?.name.split(' ')[0] || 'Friend';
  
  return (
    <div className="px-6 pb-24 pt-4 min-h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img 
            src={user?.avatar || "https://picsum.photos/seed/default/100/100"} 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
          />
          <div>
            <h1 className="text-lg font-bold leading-tight">Good morning, {firstName}</h1>
            <p className="text-xs text-primary font-medium">Breathe in, breathe out.</p>
          </div>
        </div>
        <button className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm text-primary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Mood Check-in */}
      <section className="mt-6 mb-8 text-center">
        <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-4">How are you feeling today?</p>
        <div className="flex justify-center gap-4">
          {['😊', '😌', '😐', '😔'].map((emoji, idx) => (
            <button 
              key={idx}
              className={`size-12 rounded-2xl flex items-center justify-center text-2xl transition-all shadow-soft
                ${idx === 2 
                  ? 'bg-primary/20 ring-2 ring-primary/20 dark:bg-primary/30' 
                  : 'bg-white dark:bg-slate-800 hover:scale-105'}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <div className="space-y-5">
        
        {/* Bloom Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-soft border border-primary/10">
          <div className="flex gap-4 relative z-10">
            <div className="w-1/3 aspect-[4/5] rounded-xl bg-primary/10 overflow-hidden">
                <img src="https://picsum.photos/seed/bloomart/200/300" className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="Abstract Art" />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-xl font-bold mb-1">Talk to Bloom</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Your AI companion is here to listen, 24/7, without judgment.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('chat')}
                className="bg-primary text-white text-sm font-semibold py-2.5 px-5 rounded-lg self-start mt-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
              >
                Start Chatting
              </button>
            </div>
          </div>
          {/* Decorative Blob */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Therapist Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-soft border border-orange-100 dark:border-slate-700">
          <div className="flex gap-4 relative z-10">
            <div className="w-1/3 aspect-[4/5] rounded-xl bg-peach/20 overflow-hidden">
                 <img src="https://picsum.photos/seed/cup/200/300" className="w-full h-full object-cover opacity-90" alt="Coffee Cup" />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-xl font-bold mb-1">Find a Therapist</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Connect with professionals who understand your journey.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('therapists')}
                className="bg-gray-50 dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-600 text-sm font-semibold py-2.5 px-5 rounded-lg self-start mt-2 active:scale-95 transition-transform"
              >
                Browse Matches
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Gentle Illustration */}
      <div className="my-10 flex flex-col items-center opacity-80">
        <div className="w-48 h-32 bg-gray-100 dark:bg-slate-800 rounded-full mb-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-primary/30">self_improvement</span>
        </div>
        <p className="text-sm italic text-primary/60 mt-2">Take a moment for yourself.</p>
      </div>

      {/* Reminders */}
      <section>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold">Your Gentle Reminders</h3>
          <button className="text-primary text-sm font-medium">See all</button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-soft border-l-4 border-sage">
            <div className="size-10 rounded-full bg-sage/20 flex items-center justify-center text-primary-dark">
              <span className="material-symbols-outlined">self_improvement</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Mindfulness Walk</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">15 minutes • 11:00 AM</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-soft border-l-4 border-primary">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Session with Dr. Aris</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Virtual Call • 3:00 PM</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;