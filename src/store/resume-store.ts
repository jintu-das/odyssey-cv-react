import { resumeFormSchema } from "@/utils/schemas";
import { z } from "zod";
import { create } from "zustand";

type ResumeStore = {
  data: z.infer<typeof resumeFormSchema> | null;
  updateResumeData: (data: z.infer<typeof resumeFormSchema>) => void;
  removeResumeData: () => void;
};

export const useResumeStore = create<ResumeStore>((set) => ({
  data: null,
  updateResumeData: (data) => {
    console.log("dtaa", data);
    set({ data });
  },
  removeResumeData: () => set({ data: null }),
}));
