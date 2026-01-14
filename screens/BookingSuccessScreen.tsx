import React from 'react';

interface BookingSuccessScreenProps {
  onDone: () => void;
}

const BookingSuccessScreen: React.FC<BookingSuccessScreenProps> = ({ onDone }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col p-6 transition-colors">
      <header className="flex items-center justify-between mb-2">
        <button onClick={onDone} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined dark:text-white">arrow_back</span>
        </button>
        <h1 className="font-bold text-lg dark:text-white">Booking Confirmed</h1>
        <div className="size-10"></div>
      </header>

      <div className="flex-1 flex flex-col">
        {/* Illustration */}
        <div className="w-full h-48 rounded-3xl bg-primary/10 mb-8 overflow-hidden relative border border-primary/5">
            <img src="https://picsum.photos/seed/plant/400/200" alt="Success" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center">
                 {/* Fallback if image fails or just as overlay */}
            </div>
        </div>

        <div className="text-center px-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">You're all set, Alex.</h2>
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed">
                Taking this step is a beautiful act of self-care. We've sent the details to your email.
            </p>
        </div>

        <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-sage/20 px-4 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-sm text-green-800 dark:text-sage">lock</span>
                <span className="text-xs font-bold text-green-800 dark:text-sage">Private & Secure Session</span>
            </div>
        </div>

        {/* Doctor Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-soft border border-gray-100 dark:border-slate-700 mb-6">
            <div className="flex items-center gap-4 mb-4">
                <img src="https://picsum.photos/seed/marcus/100/100" className="size-16 rounded-full object-cover" alt="Dr Aris" />
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Your Therapist</p>
                    <h3 className="text-lg font-bold dark:text-white">Dr. Aris Thorne</h3>
                    <p className="text-sm text-primary font-medium">Clinical Psychologist</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                <div>
                    <p className="text-xs text-slate-500 mb-1">Date</p>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                        <span className="font-bold text-sm dark:text-white">Mon, Oct 12</span>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-slate-500 mb-1">Time</p>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                        <span className="font-bold text-sm dark:text-white">2:00 PM (EST)</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-primary/5 to-sage/10 rounded-2xl p-5 mb-8 border border-primary/10">
            <h3 className="font-bold flex items-center gap-2 mb-4 dark:text-white">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Preparation Tips
            </h3>
            <ul className="space-y-4">
                {[
                    "Find a quiet, comfortable space where you feel safe to talk openly.",
                    "Have a glass of water and some tissues nearby just in case.",
                    "Take five deep breaths before the session begins to ground yourself."
                ].map((tip, i) => (
                    <li key={i} className="flex gap-3">
                        <span className="size-5 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-primary shrink-0 shadow-sm">{i+1}</span>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">{tip}</p>
                    </li>
                ))}
            </ul>
        </div>

        {/* Actions */}
        <div className="mt-auto space-y-3 pb-8">
            <button className="w-full bg-primary text-white font-bold h-14 rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined">event</span>
                Add to Calendar
            </button>
            <button onClick={onDone} className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 font-bold h-14 rounded-2xl text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                Done
            </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessScreen;