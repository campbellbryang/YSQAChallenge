import { z } from 'zod';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Api } from '../api';

export const Access = z.enum(['admin', 'user']);

export type AccessType = z.infer<typeof Access>;

const user = z.object({ name: z.string().optional(), id: z.string(), email: z.string().optional() });
export type User = z.infer<typeof user>;

export interface AuthSessionStore {
  authSession: AuthSession;
  initializedUser: boolean;
  checkAuth: (redirectUrl?: string) => Promise<void>;
  getMe: () => Promise<void>;
  resetAuthSession: () => void;
  signIn: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
}

type AuthSession<Y = AccessType, T = boolean> = T extends true
  ? {
      isAuthenticated: T;
      userType: Y;
      userData: User;
    }
  : {
      isAuthenticated: T;
      userType?: never;
      userData?: never;
    };

const initialauthSession: AuthSession = { isAuthenticated: false, userData: undefined, userType: undefined };
const initialUser: User = { name: '', email: '', id: '' };

const initialState: AuthSessionStore = {
  authSession: { ...initialauthSession },
  initializedUser: false,
  checkAuth: async (_redirectUrl?: string) => {},
  getMe: async () => {},
  resetAuthSession: () => {},
  signIn: async (_email: string, _password: string) => initialUser,
  signOut: async () => {},
};

export const useAuthStore = create<AuthSessionStore>()(
  devtools((set, get) => ({
    ...initialState,
    signIn: async (email: string, password: string) => {
      const user: User = await Api.login(email, password);
      set(() => ({ authSession: { userData: user, userType: 'user', isAuthenticated: true } } as AuthSessionStore));
      return user;
    },
    checkAuth: async (_redirectUrl = '/signin') => {
      const { authSession, getMe } = get();

      if (!authSession.isAuthenticated) {
        await getMe();
      }
    },
    signOut: async () => {
      const { authSession } = get();

      const response = await Api.logout(authSession?.userData?.id ?? '123');

      if (response.status === 200) {
        set(() => ({ authSession: initialauthSession, initializedUser: false }));
      }
    },
    resetAuthSession: () => {
      set((state) => ({ ...state, authSession: initialauthSession, initializedUser: false }));
    },
    getMe: async () => {
      set((state) => ({ ...state }));

      try {
        const data = await Api.getMe('123');
        if (data.user) {
          set(
            () =>
              ({ authSession: { userData: data.user, userType: 'user', isAuthenticated: true } } as AuthSessionStore),
          );
        }
      } catch (error) {
        set(() => ({ authSession: initialauthSession, initializedUser: false }));
      }
    },
  })),
);

export const signOutCallback: () => void = () => {
  const closure = useAuthStore.getState().signOut;

  return closure;
};

export async function getUser() {
  await useAuthStore.getState().getMe();
}
