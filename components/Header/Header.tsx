"use client";

import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";

import { useAppDispatch } from "@/store/hooks";
import { resetAnswers } from "@/store/slices/answersSlice";

import { ROUTES } from "@/constants/routes";

import NebulaLogo from "../../public/icons/nebula-logo.svg";

export const Header: React.FC = () => {
  const { back } = useRouter();

  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    dispatch(resetAnswers());
  };

  const handleBackButtonClick = () => back();

  const isFirstQuestion = searchParams.get("leading");

  return (
    <header className="h-14 px-8 flex items-center">
      <div className="w-1/3 flex items-center">
        {!isFirstQuestion && (
          <Button variant="text" onClick={handleBackButtonClick}>
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
        )}
      </div>
      <div className="w-1/3 flex justify-center">
        <Link href={ROUTES.HOME} onClick={handleLinkClick} customClassName="">
          <Image src={NebulaLogo} alt="Nebula Ask" />
        </Link>
      </div>
      <div className="w-1/3" />
    </header>
  );
};
