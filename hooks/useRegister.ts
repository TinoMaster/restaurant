import { REGISTER } from "@/constants/routes.api";
import { auth } from "@/services/auth";
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
  const [formRegister, setFormRegister] = useState(INITIAL_REGISTER_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);
  const router = useRouter();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    ev.preventDefault();
    auth.register(REGISTER, formRegister).then((res) => {
      if (res.success) {
        setFormRegister(INITIAL_REGISTER_FORM);
        setSuccess({ success: true, message: res?.message });
        setLoading(false);
        setTimeout(() => {
          setSuccess(INITIAL_SUCCESS);
          router.push("/login");
        }, 2000);
      } else {
        setError({ error: true, message: res.message });
        setTimeout(() => {
          setError(INITIAL_ERROR);
        }, 3000);
      }
    });
  };

  return {
    formRegister,
    loading,
    error,
    success,
    handleSubmit,
    setFormRegister,
  };
};
