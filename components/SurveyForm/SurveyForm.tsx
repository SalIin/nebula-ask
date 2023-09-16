"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import Button from "../ui/Button";
import RadioGroup from "../ui/RadioGroup";

import { useSurveyStore } from "@/store/SurveyStore";

import { CONDITIONS_REGEXP, VARIABLES_REGEXP } from "@/constants/regexp";

import { Question } from "@/types/survey";

interface SurveyFormProps {
  question: Question;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ question }) => {
  const { push } = useRouter();

  const [answers, setAnswers] = useSurveyStore((state) => [
    state.answers,
    state.setAnswers,
  ]);

  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const choosedAnswer = question.answers.find(
      ({ title }) => title === checkedValues[0]
    );

    setAnswers({ type: question.type, values: checkedValues });

    push(`/question/${choosedAnswer!.nextQuestion}`);
  };

  const handleValueCheck = (value: string) => {
    if (!question.multiple) {
      setCheckedValues([value]);
    } else {
      // Logic...
    }
  };

  const formatQuestionTitle = (title: string) => {
    // Check if question has a variables from store
    const titleWithVariables = title.replace(VARIABLES_REGEXP, (match, p1) => {
      const value = answers.find(({ type }) => type === p1)?.values[0];

      if (!value) return match;

      return value.toLowerCase();
    });

    // Check if question has a condition
    const titleWithResolvedConditions = titleWithVariables.replace(
      CONDITIONS_REGEXP,
      (match) => {
        const [condition, variants] = match.replaceAll(/{|}/g, "").split("?");
        const [positivVariant, negativeVariant] = variants.split(":");

        if (condition.includes("yes")) {
          return positivVariant;
        } else {
          return negativeVariant;
        }
      }
    );

    return titleWithResolvedConditions;
  };

  return (
    <form className="w-full max-w-screen-sm" onSubmit={handleFormSubmit}>
      <h1 className="font-bold text-2xl mb-6 first-letter:capitalize">
        {formatQuestionTitle(question.title)}
      </h1>

      {question.subtitle && (
        <h2 className="italic text-white/80 text-lg mb-8 first-letter:capitalize">
          {question.subtitle}
        </h2>
      )}

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
