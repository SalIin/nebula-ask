import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/store/hooks";
import { setAnswers } from "@/store/slices/answersSlice";

import { Question } from "@/types/survey";

// Custom hook to submit form
export const useForm = (question: Question, checkedValues: string[]) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const choosedAnswer = question.answers.find(
      ({ title }) => title === checkedValues[0]
    );
    const multidirectional = !question.answers.every(
      ({ nextQuestion }) => nextQuestion === question.answers[0].nextQuestion
    );

    dispatch(
      setAnswers({ type: question.id, values: checkedValues, multidirectional })
    );

    const isLastQuestion = choosedAnswer!.nextQuestion === "finish";

    const nextPagePathname = isLastQuestion
      ? `/${choosedAnswer!.nextQuestion}`
      : `/question/${choosedAnswer!.nextQuestion}`;

    push(nextPagePathname);
  };

  return { handleFormSubmit };
};
