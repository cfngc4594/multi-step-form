import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { MultiStepFormSchema } from "@/modules/multi-step-form/schema";

type MultiStepFormState = {
  formData: Partial<MultiStepFormSchema>;
  setData: (data: Partial<MultiStepFormSchema>) => void;
  clear: () => void;
};

export const useMultiStepFormStore = create<MultiStepFormState>()(
  persist(
    (set) => ({
      formData: {},
      setData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
      clear: () => set({ formData: {} }),
    }),
    {
      name: "multi-step-form-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
