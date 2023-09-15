import { getQuestionByStep, getQuestions } from "@/utils/question";

interface QuestionPageProps {
  params: {
    step: string;
  };
}

export async function generateStaticParams() {
  const questions = await getQuestions();

  return questions.map((question: any) => ({
    step: question.step.toString(),
  }));
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const question = await getQuestionByStep(Number(params.step));

  if (!question) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-bold text-2xl">{question.title}</h1>
    </main>
  );
}
