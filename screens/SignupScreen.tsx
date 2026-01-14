import React, { useState } from 'react';
import { Screen, User } from '../types';
import { AuthService } from '../services/api';

interface SignupScreenProps {
  onNavigate: (screen: Screen) => void;
  onSignup: (user: User) => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onNavigate, onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
          const user = await AuthService.signup(name, email, password);
          onSignup(user);
      } catch (error) {
          console.error(error);
          setLoading(false);
      }
  };

  return (
    <div className="min-h-full flex flex-col px-8 py-12 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors">
      
      <button 
        onClick={() => onNavigate('login')}
        className="self-start p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 mb-4 text-slate-400"
      >
          <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className="flex-1 flex flex-col justify-center">
          <div className="mb-8">
             <h1 className="text-3xl font-bold mb-2">Create Account</h1>
             <p className="text-slate-500 dark:text-slate-400">Start your journey to a healthier mind today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full h-14 bg-white dark:bg-slate-800 rounded-xl px-4 outline-none border border-transparent focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm dark:text-white"
                    placeholder="Sarah Jenkins"
                  />
              </div>

              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full h-14 bg-white dark:bg-slate-800 rounded-xl px-4 outline-none border border-transparent focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm dark:text-white"
                    placeholder="hello@example.com"
                  />
              </div>

              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full h-14 bg-white dark:bg-slate-800 rounded-xl px-4 outline-none border border-transparent focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm dark:text-white"
                    placeholder="••••••••"
                  />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-dark active:scale-95 transition-all mt-4 flex items-center justify-center gap-2"
              >
                  {loading ? (
                       <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : 'Sign Up'}
              </button>
          </form>
      </div>

      <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <button 
                onClick={() => onNavigate('login')} 
                className="font-bold text-primary hover:underline"
              >
                  Log In
              </button>
          </p>
      </div>
    </div>
  );
};

export default SignupScreen;