import clsx from "clsx";

import { CheckIcon } from "@heroicons/react/24/solid";

interface OptionProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const Option: React.FC<OptionProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  const optionClassNames = clsx(
    "bg-brand-500 border border-brand-200 shadow-base py-6 px-5 hover:opacity-90 rounded-2xl disabled:opacity-50 relative w-full flex justify-center transition-opacity",
    checked && "bg-base text-white"
  );

  const optionCheckboxClassNames = clsx(
    "border border-brand-200 w-6 h-6 bg-white absolute right-5 top-1/2 -mt-3 rounded-full"
  );

  return (
    <label className="cursor-pointer">
      <div className={optionClassNames}>
        {label}

        <div className={optionCheckboxClassNames} />
      </div>
      <input
        name={name}
        className="sr-only"
        type="checkbox"
        value={label}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
