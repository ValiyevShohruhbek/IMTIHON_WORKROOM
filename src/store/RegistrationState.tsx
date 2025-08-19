import { create } from "zustand";

interface RegistrationState {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useRegistrationStore = create<RegistrationState>((set) => ({
  email: "",
  password: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default useRegistrationStore;
