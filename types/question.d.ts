interface Answer {
  title: string;
  nextStep: number;
}

export interface Question {
  title: string;
  multiple: boolean;
  step: number;
  answers: Answer[];
}
