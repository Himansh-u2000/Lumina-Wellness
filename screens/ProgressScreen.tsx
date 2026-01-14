import React from 'react';
import { User } from '../types';

interface ProgressScreenProps {
    user?: User | null;
}

const ProgressScreen: React.FC<ProgressScreenProps> = ({ user }) => {
  const firstName = user?.name.split(' ')[0] || 'Alex';
  const avatar = user?.avatar || "https://picsum.photos/seed/alex/120/120";

  return (
    <div className="min-h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white px-6 pt-6 pb-24 transition-colors">
       {/* Top Nav */}
       <nav className="flex items-center justify-between mb-8">
         <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">spa</span>
         </div>
         <h2 className="text-lg font-bold">Safe Space</h2>
         <button className="size-10 rounded-full bg-white dark:bg-slate-800 shadow-soft flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">settings</span>
         </button>
       </nav>

       {/* Hero */}
       <div className="flex flex-col items-center text-center mb-8">
         <div className="relative mb-4">
             <img src={avatar} alt={firstName} className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-lg object-cover" />
             <div className="absolute -bottom-1 -right-1 bg-sage p-1.5 rounded-full border-4 border-white dark:border-slate-800">
                <span className="material-symbols-outlined text-white text-xs block font-bold">favorite</span>
             </div>
         </div>
         <h1 className="text-2xl font-bold mb-3">Hello, {firstName}</h1>
         <div className="bg-primary/5 dark:bg-white/5 px-4 py-3 rounded-xl inline-block">
             <p className="text-primary dark:text-primary-light text-sm italic font-medium">"You're doing great just by being here today."</p>
         </div>
       </div>

       {/* Mood Selector */}
       <section className="mb-8">
         <h3 className="font-bold mb-4">How are you feeling?</h3>
         <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {[
                { label: 'Resting', icon: 'cloud', color: 'text-blue-300' },
                { label: 'Calm', icon: 'filter_drama', color: 'text-primary', active: true },
                { label: 'Anxious', icon: 'waves', color: 'text-orange-300' },
                { label: 'Radiant', icon: 'sunny', color: 'text-yellow-400' },
            ].map((mood, idx) => (
                <button key={idx} className={`min-w-[100px] p-4 rounded-2xl flex flex-col items-center gap-2 border transition-all
                    ${mood.active 
                        ? 'bg-primary/10 border-primary/40 dark:bg-primary/20' 
                        : 'bg-white dark:bg-slate-800 border-transparent shadow-soft'}`}>
                    <span className={`material-symbols-outlined text-3xl ${mood.color}`}>{mood.icon}</span>
                    <span className="text-xs font-semibold">{mood.label}</span>
                </button>
            ))}
         </div>
       </section>

       {/* Progress Circle */}
       <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center shadow-soft mb-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Your Progress</h3>
          <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              {/* Decorative Circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="4" className="dark:stroke-slate-700" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#A8C5B9" strokeWidth="4" strokeDasharray="283" strokeDashoffset="100" strokeLinecap="round" />
              </svg>
              <div className="size-24 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-6xl text-sage">eco</span>
              </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Your garden is growing slowly.<br/>Every step matters.</p>
       </section>

       {/* Checklist */}
       <section>
          <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Small Steps</h3>
              <span className="text-xs font-bold bg-sage/20 text-green-800 dark:text-sage px-2 py-1 rounded">2 / 4 today</span>
          </div>
          <div className="space-y-3">
              {[
                  { text: 'Deep breath (1 min)', done: true },
                  { text: 'Hydrate', done: true },
                  { text: 'Walk outside (5 mins)', done: false },
                  { text: 'Write one good thing', done: false },
              ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl flex items-center justify-between shadow-soft bg-white dark:bg-slate-800 border-l-4 ${item.done ? 'border-sage' : 'border-transparent'}`}>
                      <div className="flex items-center gap-3">
                          <span className={`material-symbols-outlined ${item.done ? 'text-sage' : 'text-slate-300'}`}>
                              {item.done ? 'check_circle' : 'radio_button_unchecked'}
                          </span>
                          <span className={`text-sm font-medium ${item.done ? 'line-through text-slate-400' : ''}`}>{item.text}</span>
                      </div>
                      {!item.done && <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>}
                  </div>
              ))}
          </div>
       </section>
    </div>
  );
};

export default ProgressScreen;