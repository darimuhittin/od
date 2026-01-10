import { create } from "zustand";
import axios from "axios";
import { persist, createJSONStorage } from "zustand/middleware";
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,
      token: null,
      login: async (email, password) => {
        try {
          const res = await axios.post('/api/auth/login', {
            email,
            password,
          });

          if (res.status === 200) {
            const data = res.data;
            console.log("DATA : ", data)
            set({ user: data.user, token: data.token });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Login failed', error);
          return false;
        }
      },
      checkAuth: async () => {
        try {
          set({ isLoading: true });
          const res = await axios.get('/api/auth/me');
          if (res.status === 200) {
            const data = res.data;
            set({ user: data.user });
          } else {
            set({ user: null });
          }
        } catch (error) {
          set({ user: null });
        } finally {
          set({ isLoading: false });
        }
      },
      logout: async () => {
        await axios.post('/api/auth/logout');
        set({ user: null });
      }
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    }
  )
);