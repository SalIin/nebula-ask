import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ROUTES } from "./constants/routes";

import { Question } from "./types/survey";

export async function middleware(request: NextRequest) {
  const response = await fetch(new URL(`/api`, request.url));
  const questions = (await response.json()) as Question[];

  const firstQuestionId = questions[0].id;

  if (request.nextUrl.pathname === ROUTES.HOME) {
    return NextResponse.redirect(
      new URL(
        `${ROUTES.QUESTIONS}/${firstQuestionId}?leading=true`,
        request.url
      )
    );
  }

  NextResponse.next();
}

export const config = {
  matcher: "/",
};
