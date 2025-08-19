import ReactSelect from "react-select";
import type { IOptions } from "../steps/step-2";

interface Props {
  question_text: string;
  options: IOptions[];
  onChange: (answer: string) => void;
}

const Select = ({ question_text, options, onChange }: Props) => {
  // ReactSelect uchun mos formatdagi options yaratish
  const optionsData = options?.map((option) => ({
    value: option.option_value,
    label: option.option_text,
  }));

  // Tanlangan option dan faqat value olish
  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      onChange(selectedOption.value); // Tanlangan option qiymatini yuborish
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <label className="font-semibold text-[#7D8592]">{question_text}</label>
      <ReactSelect
        options={optionsData}
        onChange={handleSelectChange} // Tanlangan option qiymatini yuborish
        styles={{
          indicatorSeparator: (base) => {
            return {
              listStyle: "none",
            };
          },
          control(base) {
            return {
              ...base,
              color: "red",
              border: "1px solid #D8E0F0",
              borderRadius: "14px",
              display: "flex",
              padding: "6px 12px",
            };
          },
          placeholder(base) {
            return {
              ...base,
              color: "#7D8592",
            };
          },
        }}
      />
    </div>
  );
};

export default Select;
