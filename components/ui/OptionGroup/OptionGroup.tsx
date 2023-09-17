"use client";

import Option from "../Option";

interface OptionGroupProps {
  multiple: boolean;
  checkedValues: string[];
  values: string[];
  onChange: (value: string) => void;
}

export const OptionGroup: React.FC<OptionGroupProps> = ({
  multiple,
  checkedValues,
  values,
  onChange,
}) => {
  const isChecked = (value: string) => checkedValues.includes(value);

  return (
    <ul className="space-y-5">
      {values.map((value) => (
        <li key={value}>
          <Option
            type={multiple ? "checkbox" : "radio"}
            name="question"
            label={value}
            checked={isChecked(value)}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
};
