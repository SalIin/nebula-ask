import SurveyForm from "@/components/SurveyForm";

import { getQuestionById, getQuestions } from "@/utils/question";

interface QuestionPageProps {
  params: {
    step: string;
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const question = await getQuestionById(params.step);

  if (!question) return null;

  return (
    <main className="flex min-h-[calc(100dvh_-_6rem)] flex-col items-center justify-center p-24">
      <SurveyForm question={question} />
    </main>
  );
}

export async function generateStaticParams() {
  const questions = await getQuestions();

  return questions.map((question) => ({
    step: question.id,
  }));
}
