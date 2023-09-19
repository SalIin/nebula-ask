export interface AnswerResult {
  type: Question["id"];
  values: Answer["title"][];
}

export interface Answer {
  title: string;
  nextQuestion: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  multiple: boolean;
  answers: Answer[];
}
