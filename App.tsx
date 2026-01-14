import React, { useState, useEffect } from 'react';
import { Screen, User } from './types';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ProgressScreen from './screens/ProgressScreen';
import TherapistsScreen from './screens/TherapistsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingSuccessScreen from './screens/BookingSuccessScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import BottomNav from './components/BottomNav';
import { AuthService } from './services/api';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Check for existing session
  useEffect(() => {
      const checkSession = async () => {
          const token = localStorage.getItem('auth_token');
          if (token) {
              try {
                  const userData = await AuthService.me(token);
                  setUser(userData);
                  setCurrentScreen('home');
              } catch (e) {
                  localStorage.removeItem('auth_token');
                  setCurrentScreen('login');
              }
          } else {
              setCurrentScreen('login');
          }
          setIsLoading(false);
      };
      checkSession();
  }, []);

  // Update navbar visibility based on screen
  useEffect(() => {
      const hiddenNavScreens: Screen[] = ['login', 'signup', 'booking_success'];
      setShowNav(!hiddenNavScreens.includes(currentScreen));
  }, [currentScreen]);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleLogin = (userData: User) => {
      setUser(userData);
      localStorage.setItem('auth_token', userData.token || '');
      navigateTo('home');
  };

  const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('auth_token');
      navigateTo('login');
  };

  if (isLoading) {
      return (
          <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-[#111]">
              <div className="animate-pulse flex flex-col items-center">
                  <div className="size-12 rounded-full bg-primary mb-4"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
          </div>
      );
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onNavigate={navigateTo} onLogin={handleLogin} />;
      case 'signup':
        return <SignupScreen onNavigate={navigateTo} onSignup={handleLogin} />;
      case 'home':
        return <HomeScreen onNavigate={navigateTo} user={user} />;
      case 'chat':
        return <ChatScreen isDarkMode={isDarkMode} />;
      case 'progress':
        return <ProgressScreen user={user} />;
      case 'therapists':
        return <TherapistsScreen onBook={() => navigateTo('booking_success')} />;
      case 'booking_success':
        return <BookingSuccessScreen onDone={() => navigateTo('home')} />;
      case 'profile':
        return (
            <ProfileScreen 
                user={user}
                isDarkMode={isDarkMode} 
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
                onLogout={handleLogout} 
            />
        );
      default:
        return <LoginScreen onNavigate={navigateTo} onLogin={handleLogin} />;
    }
  };

  return (
    <div className={`flex justify-center min-h-screen ${isDarkMode ? 'bg-[#111]' : 'bg-gray-50'}`}>
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark h-[100dvh] relative overflow-hidden flex flex-col shadow-2xl transition-colors duration-300">
        <main className="flex-1 overflow-y-auto no-scrollbar relative z-0">
          {renderScreen()}
        </main>
        
        {showNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={navigateTo} />
        )}
      </div>
    </div>
  );
}