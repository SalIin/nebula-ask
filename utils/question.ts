import path from "path";
import fsPromises from "fs/promises";

import { Question } from "@/types/question";

export const getQuestions = async () => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/public/questions.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const parsedData = JSON.parse(jsonData.toString());

  return parsedData as Question[];
};

export const getQuestionByStep = async (question: number) => {
  const questions = await getQuestions();

  const searchedQuestion = questions.find(({ step }) => step === question);

  return searchedQuestion;
};
