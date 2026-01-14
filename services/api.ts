// simulated_backend.ts
// In a real application, this file would be the API Client (e.g., using Axios)
// connecting to a Node.js/Express server with a MongoDB database.

import { Therapist, Message, User } from '../types';

const MOCK_DELAY = 800;

// -- Mock Database --
const USERS_DB: User[] = [
  { id: 'user_1', name: 'Sarah Jenkins', email: 'sarah@example.com', avatar: 'https://picsum.photos/seed/sarah/100/100' }
];

export const AuthService = {
  // Simulates POST /api/auth/login
  login: async (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // In a real Node.js app, we would hash the password and compare it with the hash in MongoDB
        if (password === 'password') { 
             // Mock finding user in MongoDB
             const user = USERS_DB.find(u => u.email === email) || {
                 id: 'user_mock',
                 name: 'Sarah Jenkins', // Default for demo
                 email: email,
                 avatar: 'https://picsum.photos/seed/sarah/100/100'
             };
             
             // In Node.js, we would sign a JWT here: const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
             const token = "mock_jwt_token_" + Date.now();
             
             resolve({ ...user, token });
        } else {
            reject(new Error('Invalid email or password'));
        }
      }, MOCK_DELAY);
    });
  },

  // Simulates POST /api/auth/signup
  signup: async (name: string, email: string, password: string): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In Node.js + MongoDB:
        // 1. Check if email exists: User.findOne({ email })
        // 2. Hash password: bcrypt.hash(password, 10)
        // 3. Create user: User.create({ ... })
        
        const newUser: User = {
            id: `user_${Date.now()}`,
            name,
            email,
            avatar: `https://picsum.photos/seed/${name}/100/100`
        };
        USERS_DB.push(newUser);
        
        const token = "mock_jwt_token_" + Date.now();
        resolve({ ...newUser, token });
      }, MOCK_DELAY);
    });
  },

  // Simulates GET /api/auth/me (Session validation)
  me: async (token: string): Promise<User> => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (token.startsWith("mock_jwt_token")) {
                  resolve(USERS_DB[0]); // Return default user for demo persistence
              } else {
                  reject(new Error("Invalid token"));
              }
          }, 400);
      })
  }
};

export const ApiService = {
  fetchTherapists: async (): Promise<Therapist[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
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
        ]);
      }, MOCK_DELAY);
    });
  },

  sendMessage: async (text: string): Promise<Message> => {
     // Simulates MongoDB insert and AI processing
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve({
                 id: Date.now().toString(),
                 text: `I understand you're saying: "${text}". How does that make you feel?`,
                 sender: 'ai',
                 timestamp: new Date()
             });
         }, 1000);
     });
  }
};
