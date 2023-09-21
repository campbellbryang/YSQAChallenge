/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserItem } from '../interfaces';

export interface UsersState {
  users: UserItem[];
  loading?: boolean;
}

export interface UsersStore extends UsersState {
  setUsers: (users: UserItem[]) => void;
  setLoading: (loading: boolean) => void;
}

export const initialState: UsersStore = {
  users: [],
  loading: false,
  setUsers: (_users: UserItem[]) => {},
  setLoading: () => {},
};

export const useUsersStore = create<UsersStore>()(
  devtools((set) => ({
    ...initialState,
    setLoading: (loading: boolean) =>
      set((state) => ({
        ...state,
        loading,
      })),
    setUsers: (users: UserItem[]) => {
      return set((state) => ({
        ...state,
        users,
      }));
    },
  })),
);
