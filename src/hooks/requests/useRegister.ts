import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";
import { toast } from "react-toastify";

const useRegister = () => {
  const { mutateAsync, data, isError, error, isPending, isSuccess } =
    useMutation({
      mutationKey: ["register"],
      mutationFn: async (data: { email: string; password: string }) => {
        const phone_number = localStorage.getItem("phone_number")?.trim() || "";
        const session_token = localStorage.getItem("session_token") ?? "";

        const payload = {
          email: data.email,
          password: data.password,
          phone_number: phone_number,
          session_token: session_token,
        };

        return await api.post("/auth/register", payload);
      },
      onError: (error: any) => {
        toast.error(
          `Registration failed: ${
            error?.response?.data?.message ?? error.message
          }`
        );
      },
    });

  return { mutateAsync, isError, data, error, isPending, isSuccess };
};

export default useRegister;
