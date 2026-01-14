export type Screen = 'login' | 'signup' | 'home' | 'chat' | 'progress' | 'therapists' | 'profile' | 'booking_success';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  token?: string; // Simulating JWT
}

export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  image: string;
  tags: string[];
  description: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface Activity {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  completed: boolean;
}
