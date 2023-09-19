"use client";

import Button from "@/components/ui/Button";
import OptionGroup from "@/components/OptionGroup";

import { formatQuestionTitle } from "./utils";

import { useAppSelector } from "@/store/hooks";

import { useControls } from "./hooks";

import { SurveyFormProps } from "./types";

export const SurveyForm: React.FC<SurveyFormProps> = ({ question }) => {
  const {
    checkedValues,
    handleFormSubmit,
    handleValueCheck,
    handleAnswerChoose,
  } = useControls(question);

  const answers = useAppSelector((state) => state.answers);

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
        onChoose={handleAnswerChoose}
      />

      {question.multiple && (
        <Button
          className="w-full mt-8"
          colorSchema="brand"
          disabled={checkedValues.length === 0}
          size="sm"
        >
          Next
        </Button>
      )}
    </form>
  );
};
