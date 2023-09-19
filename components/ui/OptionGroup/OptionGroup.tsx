"use client";

import Button from "../Button";
import Option from "../Option";

interface OptionGroupProps {
  multiple: boolean;
  checkedValues: string[];
  values: string[];
  onChange: (value: string) => void;
  onChoose: (value: string) => void;
}

export const OptionGroup: React.FC<OptionGroupProps> = ({
  multiple,
  checkedValues,
  values,
  onChange,
  onChoose,
}) => {
  const isChecked = (value: string) => checkedValues.includes(value);

  return (
    <ul className="space-y-5">
      {values.map((value) => (
        <li key={value}>
          {multiple ? (
            <Option
              name="question"
              label={value}
              checked={isChecked(value)}
              onChange={onChange}
            />
          ) : (
            <Button
              className="w-full"
              onClick={() => onChoose(value)}
              type="button"
            >
              {value}
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
