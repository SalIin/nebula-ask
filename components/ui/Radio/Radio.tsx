import clsx from "clsx";

interface RadioProps {
  label: string;
  name: string;
  checked: boolean;
  type: "radio" | "checkbox";
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  type,
  checked,
  onChange,
}) => {
  const customRadioClassNames = clsx(
    "bg-white text-black p-5 flex justify-center transition hover:opacity-90 rounded-md",
    checked && "ring-4 ring-green-500 text-green-500"
  );

  return (
    <label className="cursor-pointer">
      <div className={customRadioClassNames}>{label}</div>
      <input
        name={name}
        className="sr-only"
        type={type}
        value={label}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
