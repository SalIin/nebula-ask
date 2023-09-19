import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AnswerResult } from "@/types/survey";

export interface AnswersState {
  answers: AnswerResult[];
}

const initialState: AnswersState = {
  answers: [],
};

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAnswers: (state, action: PayloadAction<AnswerResult>) => {
      state.answers.push(action.payload);
    },

    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswers, resetAnswers } = answersSlice.actions;

export default answersSlice.reducer;
