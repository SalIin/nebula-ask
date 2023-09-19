"use client";

import OptionsGroup from "@/components/OptionsGroup";
import ButtonsGroup from "@/components/ButtonsGroup";

import { formatQuestionTitle } from "./utils";

import { useAppSelector } from "@/store/hooks";

import { SurveyFormProps } from "./types";

export const SurveyForm: React.FC<SurveyFormProps> = ({ question }) => {
  const answers = useAppSelector((state) => state.answers);

  return (
    <div className="w-full max-w-screen-sm">
      <h1 className="font-bold text-2xl mb-6 first-letter:capitalize">
        {formatQuestionTitle(question.title, answers)}
      </h1>

      {question.subtitle && (
        <h2 className="italic text-white/80 text-lg mb-8 first-letter:capitalize">
          {question.subtitle}
        </h2>
      )}

      {question.multiple ? (
        <OptionsGroup question={question} />
      ) : (
        <ButtonsGroup question={question} />
      )}
    </div>
  );
};
