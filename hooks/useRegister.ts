import { REGISTER } from "@/constants/routes.api";
import { user } from "@/services/user";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const INITIAL_REGISTER_FORM = {
  name: "",
  email: "",
  password: "",
};

const INITIAL_SUCCESS = {
  success: false,
  message: "",
};
const INITIAL_ERROR = {
  error: false,
  message: "",
};

export const useRegister = () => {
  const { status } = useSession();
  const [formRegister, setFormRegister] = useState(INITIAL_REGISTER_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);
  const router = useRouter();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);

    const signupResponse = await user.register(REGISTER, formRegister);

    if (signupResponse.success) {
      setSuccess({ success: true, message: signupResponse?.message });
      setLoading(false);
      setSuccess(INITIAL_SUCCESS);
      const signinResponse = await signIn("credentials", {
        email: formRegister.email,
        password: formRegister.password,
        redirect: false,
      });

      if (signinResponse?.ok) {
        router.push("/");
      }
    } else {
      setLoading(false);
      setError({ error: true, message: signupResponse.message });
      setTimeout(() => {
        setError(INITIAL_ERROR);
      }, 3000);
    }
  };

  return {
    formRegister,
    loading,
    error,
    success,
    handleSubmit,
    setFormRegister,
    status,
  };
};
