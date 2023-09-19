export interface AnswerResult {
  type: Question["id"];
  values: Answer["title"][];
  multidirectional: boolean;
}

export interface Answer {
  title: string;
  nextQuestion: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  answers: Answer[];
  multiple: boolean;
}
