type InputProps = {
  inputClassName?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  locIcon?: boolean;
  calIcon?: boolean;
};

export default function Input({
  inputClassName,
  label,
  placeholder,
  type = "text",
  locIcon,
  calIcon
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          className={`border rounded-md p-2 w-full ${inputClassName}`}
          type={type.trim()}   
          placeholder={placeholder}
        />
        {locIcon && (
          <span className="absolute left-2 top-2 text-gray-500">📍</span>
        )}
        {calIcon && (
          <span className="absolute right-2 top-2 text-gray-500">📅</span>
        )}
      </div>
    </div>
  );
}
