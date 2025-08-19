import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";
import { useQuestionStore } from "../../store/QuestionStore"; // Zustand store
import { toast } from "react-toastify";

// Savolga javob yuborish uchun hook
const useSubmitAnswer = () => {
  const { answers } = useQuestionStore(); // Zustand store`dan javoblarni olish
  const userId = localStorage.getItem("user_id"); // localStorage dan user_id olish

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationKey: ["submitAnswer"],
    mutationFn: async () => {
      // barcha javoblarni yuborish
      const response = await Promise.all(
        Object.keys(answers).map(async (questionId) => {
          const answer = answers[questionId];
          const res = await api.post("/admin/question-answer", {
            question_id: questionId,
            answer_text: answer,
            user_id: userId,
          });
          return res.data;
        })
      );
      return response; // Javob qaytarish
    },
    onError: (error) => {
      toast.error("Failed to submit answers!");
    },
    onSuccess: () => {
      toast.success("Answers successfully submitted!");
    },
  });

  return { mutateAsync, isError, isSuccess };
};

export default useSubmitAnswer;
