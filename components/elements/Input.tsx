import { TInputProps } from "@/types/common";

export const Input = ({
  id,
  type = "text",
  placeholder,
  name,
  onChange,
  value,
  disabled = false,
}: TInputProps) => {
  return (
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
  );
};
