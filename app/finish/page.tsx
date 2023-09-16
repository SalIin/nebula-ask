"use client";

import { useEffect } from "react";

import Link from "@/components/ui/Link";

import { useSurveyStore } from "@/store/SurveyStore";

import { ROUTES } from "@/constants/routes";

export default function FinishPage() {
  const resetStore = useSurveyStore((state) => state.resetStore);

  useEffect(() => {
    resetStore();
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl mb-6">Survey completed!</h1>
      <Link href={ROUTES.HOME} variant="button">
        Home
      </Link>
    </>
  );
}
