"use client";

import Link from "@/components/ui/Link";

import { useAppDispatch } from "@/store/hooks";
import { resetAnswers } from "@/store/slices/answersSlice";

import { ROUTES } from "@/constants/routes";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    dispatch(resetAnswers());
  };

  return (
    <header className="h-24 px-8 flex items-center border-b border-gray-800 sticky top-0 bg-black z-10">
      <Link
        customClassName="text-3xl tracking-wide font-bold uppercase select-none"
        href={ROUTES.HOME}
        onClick={handleLinkClick}
      >
        Nebula<span className="text-brand-500">Ask</span>
      </Link>
    </header>
  );
};
