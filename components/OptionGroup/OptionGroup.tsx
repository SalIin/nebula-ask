"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Option from "../ui/Option";
import Button from "../ui/Button";

import { useAppDispatch } from "@/store/hooks";
import { setAnswers } from "@/store/slices/answersSlice";

import { Question } from "@/types/survey";

interface OptionGroupProps {
  question: Question;
}

export const OptionGroup: React.FC<OptionGroupProps> = ({ question }) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const values = question.answers.map(({ title }) => title);

  const isChecked = (value: string) => checkedValues.includes(value);

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

  return (
    <form onSubmit={handleFormSubmit}>
      <ul className="space-y-5">
        {values.map((value) => (
          <li key={value}>
            <Option
              name="question"
              label={value}
              checked={isChecked(value)}
              onChange={handleValueCheck}
            />
          </li>
        ))}
      </ul>
      <Button
        className="w-full mt-8"
        colorSchema="brand"
        disabled={checkedValues.length === 0}
        size="sm"
      >
        Next
      </Button>
    </form>
  );
};
