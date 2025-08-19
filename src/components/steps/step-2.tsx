import { useGetProfileQuestions } from "../../hooks/requests/useGetProfileQuestions";
import Select from "../ui/SelectInput";
import RadioGroup from "../ui/RadioGroup";
import { useQuestionStore } from "../../store/QuestionStore"; // Zustand store
import useSubmitAnswer from "../../hooks/requests/useSubmitAnswer"; // useMutation

export interface IOptions {
  option_text: string;
  option_value: string;
}

export interface IQuestions {
  id: string;
  question_text: string;
  question_type: string;
  is_required: boolean;
  options?: IOptions[];
}

const Step2 = () => {
  const { data, isError, isSuccess } = useGetProfileQuestions(2); // Savollarni olish
  const { setAnswer } = useQuestionStore(); // Zustand store`ga javoblarni saqlash
  const { mutateAsync } = useSubmitAnswer(); // API so'rovini yuborish

  const questions: IQuestions[] = data?.data;

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswer(questionId, answer); // Javobni Zustand store`ga saqlash
  };

  return (
    <div className="flex flex-col gap-y-6">
      {questions &&
        questions.length >= 1 &&
        questions.map((question) => {
          if (question.question_type === "select") {
            return (
              <Select
                key={question.id}
                question_text={question.question_text}
                options={question.options || []}
                onChange={(answer) => handleAnswerChange(question.id, answer)} // Javobni saqlash
              />
            );
          }
          if (question.question_type === "radio") {
            return (
              <RadioGroup
                key={question.id}
                question_text={question.question_text}
                options={question.options || []}
                onChange={(answer) => handleAnswerChange(question.id, answer)} // Javobni saqlash
              />
            );
          }
          return null; // Agar savol `select` yoki `radio` bo'lmasa, hech narsa render qilinmaydi
        })}
    </div>
  );
};

export default Step2;
