import { create } from "zustand";

import { AnswerResult } from "@/types/survey";

interface SurveyState {
  answers: AnswerResult[];
  setAnswers: (answer: AnswerResult) => void;
}

export const useSurveyStore = create<SurveyState>((set, get) => ({
  answers: [],

  setAnswers: (answer) => {
    set({ answers: [...get().answers, answer] });
  },
}));
