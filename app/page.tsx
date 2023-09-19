import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getQuestions } from "@/utils/question";
import { ROUTES } from "@/constants/routes";

export default async function HomePage() {
  // const qestions = await getQuestions();

  // const firstQuestionId = qestions[0].id;

  // const headersList = headers();
  // const pathname = headersList.get("x-invoke-path") || "";

  // if (pathname === ROUTES.HOME)
  //   redirect(`${ROUTES.QUESTIONS}/${firstQuestionId}`);

  return <div />;
}
