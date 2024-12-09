import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => loginApi({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      navigate("/admin");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { login, isLoading };
}
