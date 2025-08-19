import { useEffect, useState } from "react";
import Input from "../ui/Input";
import UniversalInput from "../ui/SelectInput";
import { useGetProfileQuestions } from "../../hooks/requests/useGetProfileQuestions";
import { useStep3Store } from "../../store/Step3Store";

export const Step3 = () => {
  const { answers, setAnswer } = useStep3Store();
  const { data, isFetching } = useGetProfileQuestions(3);
  const questions = data?.data || [];

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswer(questionId, answer);
    setSelectedButton(answer);
  };

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {questions.map((q) => {
        switch (q.question_type) {
          case "text":
          case "email":
          case "password":
            return (
              <Input
                key={q.id}
                inputClassName="w-full"
                type={q.question_type}
                label={q.question_text}
                placeholder={q.question_text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAnswerChange(q.id, e.target.value)
                }
              />
            );

          case "select":
            return (
              <UniversalInput
                key={q.id}
                question_text={q.question_text}
                options={q.options || []}
                onChange={(answer: string) => handleAnswerChange(q.id, answer)}
              />
            );

          case "checkbox":
            return (
              <div key={q.id} className="mt-7">
                <label className="font-semibold text-[#7D8592]">
                  {q.question_text}
                </label>
                <div className="grid grid-cols-4 gap-4 mt-[7px]">
                  {q.options?.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`w-[100px] h-[40px] text-center text-[14px] font-normal rounded-[10px] 
                        ${
                          selectedButton === opt.option_value
                            ? "bg-[#3F8CFF] text-white"
                            : "bg-white text-[#7D8592] border border-[#D8E0F0]"
                        }`}
                      onClick={() => handleAnswerChange(q.id, opt.option_value)}
                    >
                      {opt.option_text}
                    </button>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
