import { create } from "zustand";

const useThemeStore = create((set) => ({
  // Global state
  theme: "light",

  // Action to update state
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useThemeStore;