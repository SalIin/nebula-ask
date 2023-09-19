import clsx from "clsx";

import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "../Button";

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
    "bg-white text-black p-5 flex justify-center transition hover:opacity-90 rounded-md relative",
    checked && "ring-4 ring-green-500 text-green-500"
  );

  const optionCheckboxClassNames = clsx(
    "border border-black w-4 h-4 absolute right-5 top-1/2 -mt-2 rounded-sm flex items-center justify-center",
    checked && "border-green-500"
  );

  return (
    <label className="cursor-pointer">
      <div className={optionClassNames}>
        {label}

        <div className={optionCheckboxClassNames}>
          {checked && <CheckIcon className="h-w-3/4 w-3/4" />}
        </div>
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
