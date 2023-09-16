import { CONDITIONS_REGEXP, VARIABLES_REGEXP } from "@/constants/regexp";

import { AnswerResult } from "@/types/survey";

export const formatQuestionTitle = (title: string, answers: AnswerResult[]) => {
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
