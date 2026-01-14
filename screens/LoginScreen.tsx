import React, { useState } from 'react';
import { Screen, User } from '../types';
import { AuthService } from '../services/api';

interface LoginScreenProps {
  onNavigate: (screen: Screen) => void;
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setLoading(true);
      try {
          const user = await AuthService.login(email, password);
          onLogin(user);
      } catch (err: any) {
          setError(err.message || 'Failed to login');
      } finally {
          setLoading(false);
      }
  };

  return (
    <div className="min-h-full flex flex-col px-8 py-12 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors">
      <div className="flex-1 flex flex-col justify-center">
          <div className="mb-10 text-center">
             <div className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                 <span className="material-symbols-outlined text-4xl">spa</span>
             </div>
             <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
             <p className="text-slate-500 dark:text-slate-400">Sign in to continue your wellness journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl text-center border border-red-100">
                      {error}
                  </div>
              )}
              
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
                  <div className="flex justify-end">
                      <button type="button" className="text-xs font-bold text-primary hover:opacity-80">Forgot Password?</button>
                  </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-dark active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                  {loading ? (
                      <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                      <>
                        <span>Sign In</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </>
                  )}
              </button>
          </form>
      </div>

      <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
              Don't have an account?{' '}
              <button 
                onClick={() => onNavigate('signup')} 
                className="font-bold text-primary hover:underline"
              >
                  Create Account
              </button>
          </p>
      </div>
    </div>
  );
};

export default LoginScreen;