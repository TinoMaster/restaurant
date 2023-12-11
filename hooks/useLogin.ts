import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

interface IFormLogin {
  email: string;
  password: string;
}

const INITIAL_FORM: IFormLogin = {
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

export const useLogin = () => {
  const { status } = useSession();
  const [formLogin, setFormLogin] = useState<IFormLogin>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email: formLogin.email,
      password: formLogin.password,
      redirect: false,
    });
    if (res?.ok) {
      setFormLogin(INITIAL_FORM);
      setSuccess({ success: true, message: "Login exitoso" });
      setTimeout(() => {
        setSuccess(INITIAL_SUCCESS);
        redirect("/");
      }, 2000);
    } else {
      setError({
        error: true,
        message: "Error de autenticación",
      });
      setTimeout(() => {
        setError(INITIAL_ERROR);
      }, 3000);
    }
    setLoading(false);
  };

  return {
    formLogin,
    loading,
    error,
    success,
    handleSubmit,
    setFormLogin,
    status,
  };
};
