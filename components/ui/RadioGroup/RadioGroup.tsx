"use client";

import Radio from "../Radio";

interface RadioGroupProps {
  multiple: boolean;
  checkedValues: string[];
  values: string[];
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
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
          <Radio
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
