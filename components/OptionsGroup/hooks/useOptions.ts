import { useState } from "react";

import { useForm } from "./useForm";
import { useCheckedValues } from "./useCheckedValues";

import { Question } from "@/types/survey";

// Custom hook to compose checkboxes logic & form logic together
export const useOptions = (question: Question) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const { handleValueCheck } = useCheckedValues(
    question,
    checkedValues,
    setCheckedValues
  );
  const { handleFormSubmit } = useForm(question, checkedValues);

  return { checkedValues, handleValueCheck, handleFormSubmit };
};
