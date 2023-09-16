export interface AnswerResult {
  id: Question["id"];
  values: Answer["title"][];
}

export interface Answer {
  title: string;
  nextStep: number;
}

export interface Question {
  id: string;
  title: string;
  multiple: boolean;
  step: number;
  answers: Answer[];
}
