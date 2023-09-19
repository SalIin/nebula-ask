import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useAppSelector } from "@/store/hooks";

import { AnswerResult, Question } from "@/types/survey";

// Cstom hook to handle checkboxes logic
export const useCheckedValues = (
  question: Question,
  checkedValues: string[],
  setCheckedValues: Dispatch<SetStateAction<string[]>>
) => {
  const answers = useAppSelector((state) => state.answers);
  const prevAnswers = answers.find(
    (answer: AnswerResult) => answer.type === question.id
  )?.values;

  useEffect(() => {
    if (prevAnswers?.length) {
      setCheckedValues(prevAnswers);
    }
  }, [prevAnswers]);

  const handleValueCheck = (value: string) => {
    if (!question.multiple) return;

    if (checkedValues.includes(value)) {
      setCheckedValues((prev) =>
        prev.filter((prevValue) => prevValue !== value)
      );
    } else {
      setCheckedValues((prev) => [...prev, value]);
    }
  };

  return { handleValueCheck };
};
