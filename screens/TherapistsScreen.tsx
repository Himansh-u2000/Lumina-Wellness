import React from 'react';
import { Therapist } from '../types';

interface TherapistsScreenProps {
  onBook: () => void;
}

const TherapistsScreen: React.FC<TherapistsScreenProps> = ({ onBook }) => {
  const therapists: Therapist[] = [
    {
      id: '1',
      name: 'Dr. Elena Moss',
      title: 'Cognitive Behavioral Therapy',
      specialty: 'Depression',
      rating: 4.9,
      image: 'https://picsum.photos/seed/elena/200/200',
      tags: ['Depression', 'Anxiety'],
      description: 'I believe in creating a safe, judgment-free space where your voice is heard and valued...'
    },
    {
      id: '2',
      name: 'Marcus Thorne',
      title: 'Trauma Informed Care',
      specialty: 'Trauma',
      rating: 4.7,
      image: 'https://picsum.photos/seed/marcus/200/200',
      tags: ['Trauma', 'LGBTQ+'],
      description: 'Specializing in gentle recovery pathways for survivors of high-stress environments...'
    },
    {
        id: '3',
        name: 'Dr. Sarah Liao',
        title: 'Holistic Wellness',
        specialty: 'Mindfulness',
        rating: 5.0,
        image: 'https://picsum.photos/seed/sarahliao/200/200',
        tags: ['Anxiety', 'Mindfulness'],
        description: 'Integration of mindfulness and psychological science to find your inner balance...'
      }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-full pb-24 transition-colors">
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
            <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined dark:text-white">arrow_back_ios_new</span>
            </button>
            <h2 className="text-xl font-bold dark:text-white">Find Your Support</h2>
            <button className="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined dark:text-white">help_outline</span>
            </button>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Take your time. We’re here to help you find the right match.</p>
        
        <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">search</span>
            <input 
                type="text" 
                placeholder="Search by name or specialty" 
                className="w-full h-12 bg-gray-100 dark:bg-slate-800 rounded-xl pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none dark:text-white transition-all"
            />
        </div>
      </header>

      <main className="px-6 pt-4">
         {/* Filters */}
         <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-6 px-6 pb-6">
            {['Depression', 'Anxiety', 'LGBTQ+ Friendly', 'Grief'].map((filter, i) => (
                <button key={filter} className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-semibold transition-colors
                    ${i === 0 
                        ? 'bg-primary text-white shadow-md shadow-primary/30' 
                        : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 dark:text-slate-300'}`}>
                    {filter}
                </button>
            ))}
         </div>

         <h3 className="font-bold text-lg mb-4 dark:text-white">Caring Professionals</h3>

         <div className="space-y-5">
            {therapists.map(therapist => (
                <div key={therapist.id} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-soft border border-gray-50 dark:border-slate-700">
                    <div className="flex gap-4 mb-4">
                        <div className="relative shrink-0">
                            <img src={therapist.image} alt={therapist.name} className="w-20 h-20 rounded-2xl object-cover" />
                            <div className="absolute -bottom-1 -right-1 bg-sage p-1 rounded-full border-2 border-white dark:border-slate-800">
                                <span className="material-symbols-outlined text-[10px] text-white block">favorite</span>
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold truncate dark:text-white">{therapist.name}</h4>
                                <div className="flex items-center gap-1 bg-sage/10 px-2 py-0.5 rounded-full shrink-0">
                                    <span className="material-symbols-outlined text-[12px] text-sage">nest_eco_leaf</span>
                                    <span className="text-[10px] font-bold text-sage">{therapist.rating}</span>
                                </div>
                            </div>
                            <p className="text-xs text-primary font-medium mb-2">{therapist.title}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{therapist.description}</p>
                        </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center">
                        <div className="flex gap-2">
                            {therapist.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-md text-[10px] font-medium text-slate-600 dark:text-slate-300">{tag}</span>
                            ))}
                        </div>
                        <button 
                            onClick={onBook}
                            className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors"
                        >
                            Match
                        </button>
                    </div>
                </div>
            ))}
         </div>
      </main>
    </div>
  );
};

export default TherapistsScreen;