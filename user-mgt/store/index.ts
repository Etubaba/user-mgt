import { User } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set: any) => ({
  user: null as User | null,
  authenticateUser: (user: User | null) => {
    set({ user });
  },
});

export const useUserStore = create(
  persist(devtools(userStore), {
    name: "_user",
  })
);
