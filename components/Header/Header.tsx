"use client";

import Link from "@/components/ui/Link";

import { useSurveyStore } from "@/store/SurveyStore";

import { ROUTES } from "@/constants/routes";

export const Header: React.FC = () => {
  const resetStore = useSurveyStore((state) => state.resetStore);

  const handleLinkClick = () => {
    resetStore();
  };

  return (
    <header className="h-24 px-8 flex items-center border-b border-gray-800 sticky top-0 bg-black">
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
