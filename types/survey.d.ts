export interface AnswerResult {
  type: Question["type"];
  values: Answer["title"][];
}

export interface Answer {
  title: string;
  nextQuestion: string;
}

export interface Question {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  multiple: boolean;
  answers: Answer[];
}
