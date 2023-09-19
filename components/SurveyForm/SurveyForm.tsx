"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import Button from "@/components/ui/Button";
import OptionGroup from "@/components/ui/OptionGroup";

import { formatQuestionTitle } from "./utils";

import { setAnswers } from "@/store/slices/answersSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { SurveyFormProps } from "./types";

export const SurveyForm: React.FC<SurveyFormProps> = ({ question }) => {
  const { push } = useRouter();

  const answers = useAppSelector((state) => state.answers);
  const dispatch = useAppDispatch();

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
    if (!question.multiple) {
      setCheckedValues([value]);
    } else if (checkedValues.includes(value)) {
      setCheckedValues((prev) =>
        prev.filter((prevValue) => prevValue !== value)
      );
    } else {
      setCheckedValues((prev) => [...prev, value]);
    }
  };

  return (
    <form className="w-full max-w-screen-sm" onSubmit={handleFormSubmit}>
      <h1 className="font-bold text-2xl mb-6 first-letter:capitalize">
        {formatQuestionTitle(question.title, answers)}
      </h1>

      {question.subtitle && (
        <h2 className="italic text-white/80 text-lg mb-8 first-letter:capitalize">
          {question.subtitle}
        </h2>
      )}

      <OptionGroup
        multiple={question.multiple}
        checkedValues={checkedValues}
        values={question.answers.map(({ title }) => title)}
        onChange={handleValueCheck}
      />

      <Button className="w-full mt-8" disabled={checkedValues.length === 0}>
        Next
      </Button>
    </form>
  );
};
