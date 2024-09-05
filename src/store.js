import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const users = [
  {
    id: Math.random(),
    label: "Go To Home",
  },
  {
    id: Math.random(),
    label: "Have a Supper",
  },
  {
    id: Math.random(),
    label: "Sleep",
  },
];

export const useStore = create(
  persist(
    (set, get) => ({
      users: users,
      addItem: (text) =>
        set((state) => ({
          users: [...state.users, { id: Math.random(), label: text }],
        })),
      deleteItem: (index) =>
        set((state) => ({
          users: [...state.users.filter((item, index2) => index2 !== index)],
        })),
    }),
    {
      name: "todoList-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
