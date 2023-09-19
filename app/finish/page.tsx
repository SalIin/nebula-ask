"use client";

import { useEffect } from "react";

import Link from "@/components/ui/Link";

import { useAppDispatch } from "@/store/hooks";
import { resetAnswers } from "@/store/slices/answersSlice";

import { ROUTES } from "@/constants/routes";

export default function FinishPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAnswers());
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
