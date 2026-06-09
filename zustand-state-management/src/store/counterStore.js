import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  other: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  bumpOther: () => set((state) => ({ other: state.other + 1 })),
}));
