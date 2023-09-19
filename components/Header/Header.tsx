"use client";

import Link from "@/components/ui/Link";

import { useAppDispatch } from "@/store/hooks";
import { resetAnswers } from "@/store/slices/answersSlice";

import Image from "next/image";

import { ROUTES } from "@/constants/routes";

import NebulaLogo from "../../public/icons/nebula-logo.svg";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    dispatch(resetAnswers());
  };

  return (
    <header className="h-24 px-8 flex items-center sticky top-0 z-10">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex justify-center">
        <Link href={ROUTES.HOME} onClick={handleLinkClick} customClassName="">
          <Image src={NebulaLogo} alt="Nebula Ask" />
        </Link>
      </div>
      <div className="w-1/3" />
    </header>
  );
};
