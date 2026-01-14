import React from 'react';
import { User } from '../types';

interface ProfileScreenProps {
  user: User | null;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, isDarkMode, toggleDarkMode, onLogout }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-full pb-24 transition-colors">
      <header className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between z-20">
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined dark:text-white">arrow_back</span>
        </button>
        <h1 className="font-bold text-lg dark:text-white">Profile & Settings</h1>
        <button className="text-primary font-bold text-sm hover:opacity-80">Save</button>
      </header>

      <main className="px-4 py-6 space-y-8">
        {/* Profile Card */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-3xl p-6 text-center border border-gray-100 dark:border-slate-700 shadow-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative inline-block mb-4">
                <img src={user?.avatar || "https://picsum.photos/seed/sarah/150/150"} className="size-24 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md" alt="Profile" />
                <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white dark:border-slate-700 shadow-sm hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">edit</span>
                </button>
            </div>
            
            <h2 className="text-xl font-bold dark:text-white">{user?.name || "User Name"}</h2>
            <p className="text-xs text-slate-500 mb-1">{user?.email}</p>
            <div className="flex items-center justify-center gap-1 mt-1 text-primary">
                <span className="material-symbols-outlined text-lg">verified</span>
                <span className="text-sm font-medium">Premium Member</span>
            </div>
        </div>

        {/* Personal Info */}
        <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Personal Information</h3>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-slate-700">
                    <label className="text-xs font-bold text-slate-400 block mb-1">Full Name</label>
                    <input type="text" defaultValue={user?.name} className="w-full bg-transparent font-medium text-slate-900 dark:text-white outline-none" />
                </div>
                <div className="p-4 flex items-center justify-between">
                     <div>
                        <label className="text-xs font-bold text-slate-400 block mb-1">Date of Birth</label>
                        <input type="text" defaultValue="05/12/1994" className="bg-transparent font-medium text-slate-900 dark:text-white outline-none" />
                     </div>
                     <span className="material-symbols-outlined text-slate-400">calendar_month</span>
                </div>
            </div>
        </section>

        {/* Clinical Context */}
        <section>
            <div className="flex justify-between items-center mb-3 px-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Clinical Context
                </h3>
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Private & Encrypted</span>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-4 space-y-4">
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold dark:text-white">Primary Concerns</label>
                        <span className="material-symbols-outlined text-slate-400 text-sm">help</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-100 text-xs font-bold flex items-center gap-1">
                            Anxiety <span className="material-symbols-outlined text-xs cursor-pointer">close</span>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold flex items-center gap-1">
                            Insomnia <span className="material-symbols-outlined text-xs cursor-pointer">close</span>
                        </span>
                        <button className="px-3 py-1 rounded-full bg-gray-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 border border-dashed border-gray-300 dark:border-slate-600 text-xs font-bold flex items-center gap-1 hover:bg-gray-100">
                            <span className="material-symbols-outlined text-xs">add</span> Add
                        </button>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-100 dark:bg-slate-700"></div>
                <div>
                    <label className="text-sm font-bold dark:text-white mb-2 block flex items-center gap-1">
                        Current Medications
                        <span className="material-symbols-outlined text-slate-400 text-sm">info</span>
                    </label>
                    <textarea 
                        className="w-full bg-gray-50 dark:bg-slate-900 rounded-xl p-3 text-sm text-slate-700 dark:text-slate-300 border-none resize-none focus:ring-2 focus:ring-primary/20 outline-none" 
                        rows={2}
                        placeholder="e.g. Sertraline 50mg"
                    ></textarea>
                </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 px-2 leading-relaxed">
                This information helps tailor your therapy sessions. It is strictly confidential.
            </p>
        </section>

        {/* Safety */}
        <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Safety Network</h3>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden divide-y divide-gray-100 dark:divide-slate-700">
                <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 text-left">
                    <div>
                        <p className="text-sm font-bold dark:text-white">Emergency Contact</p>
                        <p className="text-xs text-slate-500">Michael Jenkins (Spouse)</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 text-left">
                    <div>
                        <p className="text-sm font-bold dark:text-white">Crisis Hotline Preference</p>
                        <p className="text-xs text-slate-500">Local (988)</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </button>
            </div>
        </section>

        {/* App Preferences */}
        <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">App Preferences</h3>
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden divide-y divide-gray-100 dark:divide-slate-700">
                {/* Dark Mode Toggle */}
                <div className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                             <span className="material-symbols-outlined text-sm">dark_mode</span>
                         </div>
                         <span className="text-sm font-bold dark:text-white">Dark Mode</span>
                     </div>
                     <button 
                        onClick={toggleDarkMode}
                        className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out ${isDarkMode ? 'bg-primary' : 'bg-gray-300'}`}
                     >
                         <div className={`size-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
                     </button>
                </div>

                {/* Notifications */}
                <div className="p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                             <span className="material-symbols-outlined text-sm">notifications</span>
                         </div>
                         <div>
                            <p className="text-sm font-bold dark:text-white">Daily Check-in</p>
                            <p className="text-xs text-slate-500">Reminders at 8:00 PM</p>
                         </div>
                     </div>
                     <button className="w-12 h-7 rounded-full p-1 bg-primary cursor-pointer">
                         <div className="size-5 bg-white rounded-full shadow-sm translate-x-5"></div>
                     </button>
                </div>
            </div>
        </section>

        <button 
            onClick={onLogout}
            className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-red-500 font-bold py-4 rounded-2xl shadow-sm hover:bg-red-50 dark:hover:bg-slate-700/50 transition-colors"
        >
            Log Out
        </button>
      </main>
    </div>
  );
};

export default ProfileScreen;