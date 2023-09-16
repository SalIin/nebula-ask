import Link from "@/components/ui/Link";

import { getQuestions } from "@/utils/question";

import { ROUTES } from "@/constants/routes";

export default async function Home() {
  const qestions = await getQuestions();

  const firstQuestionId = qestions[0].id;

  return (
    <>
      <h1 className="font-bold text-3xl mb-6">Let&apos;s start the journey!</h1>
      <Link href={`${ROUTES.QUESTIONS}/${firstQuestionId}`} variant="button">
        Proceed
      </Link>
    </>
  );
}
