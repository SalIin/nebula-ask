import SurveyForm from "@/components/SurveyForm";
import Button from "@/components/ui/Button";
import { getQuestionByStep, getQuestions } from "@/utils/question";

interface QuestionPageProps {
  params: {
    step: string;
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const question = await getQuestionByStep(Number(params.step));

  if (!question) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SurveyForm question={question} />
    </main>
  );
}

export async function generateStaticParams() {
  const questions = await getQuestions();

  return questions.map((question: any) => ({
    step: question.step.toString(),
  }));
}
