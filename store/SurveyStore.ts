import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AnswerResult } from "@/types/survey";

interface SurveyState {
  answers: AnswerResult[];
  setAnswers: (answer: AnswerResult) => void;

  resetStore: VoidFunction;
}

export const useSurveyStore = create<SurveyState>()(
  persist(
    (set, get) => ({
      answers: [],

      setAnswers: (answer) => {
        set({ answers: [...get().answers, answer] });
      },

      resetStore: () => set({ answers: [] }),
    }),
    {
      name: "survey-storage",
    }
  )
);
