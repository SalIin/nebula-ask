import Link from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";

export const Header: React.FC = () => {
  return (
    <header className="h-24 px-8 flex items-center border-b border-gray-800">
      <Link
        customClassName="text-3xl tracking-wide font-bold uppercase"
        href={`${ROUTES.HOME}`}
      >
        Nebula<span className="text-brand-500">Ask</span>
      </Link>
    </header>
  );
};
