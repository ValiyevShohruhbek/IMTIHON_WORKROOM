import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";
import { toast } from "react-toastify";
import { useStep3Store } from "../../store/Step3Store";

const useSubmitAnswerStep3 = () => {
  const { answers } = useStep3Store();

  const userId = localStorage.getItem("user_id");
  console.log(answers);

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationKey: ["submitAnswer"],
    mutationFn: async () => {
      const response = await Promise.all(
        answers.map(async (answerOne) => {
          const res = await api.post("/admin/question-answer", {
            ...answerOne,
            user_id: localStorage.getItem("user_id"),
          });
          return res.data;
        })
      );
      return response;
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to submit answers!");
    },
    onSuccess: () => {
      toast.success("Answers successfully submitted!");
    },
  });

  return { mutateAsync, isError, isSuccess };
};

export default useSubmitAnswerStep3;
