import path from "path";
import fsPromises from "fs/promises";

import { Question } from "@/types/survey";

export const getQuestions = async () => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/public/questions.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const parsedData = JSON.parse(jsonData.toString());

  return parsedData as Question[];
};

export const getQuestionById = async (question: string) => {
  const questions = await getQuestions();

  const searchedQuestion = questions.find(({ id }) => id === question);

  return searchedQuestion;
};
