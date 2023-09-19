import { FormEvent, useState } from "react";

import { AppDispatch } from "@/store";
import { useAppDispatch } from "@/store/hooks";
import { setAnswers } from "@/store/slices/answersSlice";

import { useRouter } from "next/navigation";

import { Question } from "@/types/survey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const useOptions = (
  question: Question,
  dispatch: AppDispatch,
  push: AppRouterInstance["push"]
) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const choosedAnswer = question.answers.find(
      ({ title }) => title === checkedValues[0]
    );

    dispatch(setAnswers({ type: question.id, values: checkedValues }));

    const isLastQuestion = choosedAnswer!.nextQuestion === "finish";

    const nextPagePathname = isLastQuestion
      ? `/${choosedAnswer!.nextQuestion}`
      : `/question/${choosedAnswer!.nextQuestion}`;

    push(nextPagePathname);
  };

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

  return { checkedValues, handleFormSubmit, handleValueCheck };
};

const useButtons = (
  question: Question,
  dispatch: AppDispatch,
  push: AppRouterInstance["push"]
) => {
  const handleAnswerChoose = (value: string) => {
    const choosedAnswer = question.answers.find(({ title }) => title === value);

    dispatch(setAnswers({ type: question.id, values: [value] }));

    const isLastQuestion = choosedAnswer!.nextQuestion === "finish";

    const nextPagePathname = isLastQuestion
      ? `/${choosedAnswer!.nextQuestion}`
      : `/question/${choosedAnswer!.nextQuestion}`;

    push(nextPagePathname);
  };

  return { handleAnswerChoose };
};

export const useControls = (question: Question) => {
  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const { checkedValues, handleFormSubmit, handleValueCheck } = useOptions(question, dispatch, push);
  const { handleAnswerChoose } = useButtons(question, dispatch, push);

  return { checkedValues, handleFormSubmit, handleValueCheck, handleAnswerChoose };
};
