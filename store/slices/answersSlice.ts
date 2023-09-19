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
      const answer = action.payload;

      const storeAnswerIdx = state.answers.findIndex(
        ({ type }) => type === answer.type
      );

      console.log(action);

      if (storeAnswerIdx >= 0) {
        state.answers.splice(storeAnswerIdx, 1, answer);
      } else {
        state.answers.push(action.payload);
      }
    },

    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAnswers, resetAnswers } = answersSlice.actions;

export default answersSlice.reducer;
