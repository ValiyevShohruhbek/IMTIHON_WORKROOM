interface Props {
  question_text: string;
  options: { option_text: string; option_value: string }[];
  onChange: (answer: string) => void;
}

const RadioGroup = ({ question_text, options, onChange }: Props) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <label className="font-semibold text-[#7D8592]">{question_text}</label>
      {options.map((option) => (
        <div key={option.option_value} className="flex items-center">
          <input
            type="radio"
            id={option.option_value}
            name={question_text}
            value={option.option_value}
            onChange={handleRadioChange}
          />
          <label htmlFor={option.option_value} className="ml-2">
            {option.option_text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
