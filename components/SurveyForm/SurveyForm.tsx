"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import Button from "../ui/Button";
import RadioGroup from "../ui/RadioGroup";

import { Question } from "@/types/survey";

interface SurveyFormProps {
  question: Question;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ question }) => {
  const { push } = useRouter();

  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const choosedAnswer = question.answers.find(
      ({ title }) => title === checkedValues[0]
    );

    push(`/question/${choosedAnswer!.nextStep}`);
  };

  const handleValueCheck = (value: string) => {
    if (!question.multiple) {
      setCheckedValues([value]);
    } else {
      // Logic...
    }
  };

  return (
    <form className="w-full max-w-screen-sm" onSubmit={handleFormSubmit}>
      <h1 className="font-bold text-2xl mb-6">{question.title}</h1>

      <RadioGroup
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
