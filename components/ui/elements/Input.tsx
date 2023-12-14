import { TInputProps } from "@/types/common";

export const Input = ({
  id,
  type = "text",
  placeholder,
  name,
  onChange,
  value,
  disabled = false,
  label,
}: TInputProps) => {
  return (
    <label htmlFor={id} className="col-span-1 space-y-2">
      <span className="font-bold text-gray-300/80 text-sm ml-1">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className="input"
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete="off"
      />
    </label>
  );
};
