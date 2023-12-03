// Import React module
interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// Create Input functional component
const Input = ({
  id,
  type,
  placeholder,
  name,
  changeHandler,
  value,
}: InputProps) => {
  return (
    <input
      value={value}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      onChange={changeHandler}
    />
  );
};

// Export Input component as default
export default Input;
