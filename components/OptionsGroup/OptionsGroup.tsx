"use client";

import Option from "../ui/Option";
import Button from "../ui/Button";

import { useOptions } from "./hooks/useOptions";

import { Question } from "@/types/survey";

interface OptionsGroupProps {
  question: Question;
}

export const OptionsGroup: React.FC<OptionsGroupProps> = ({ question }) => {
  const { checkedValues, handleValueCheck, handleFormSubmit } = useOptions(question);

  const values = question.answers.map(({ title }) => title);

  const isChecked = (value: string) => checkedValues.includes(value);

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
