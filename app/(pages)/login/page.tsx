"use client";
import LoadingSkeletonPages from "@/app/loading";
import { SocialButtons } from "@/components/buttons/SocialButtons";
import { NotificationsLogin } from "@/components/notifications/NotificationsLogin";
import { useLogin } from "@/hooks/useLogin";
import { img_PageMenuMovil } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
  const {
    error,
    success,
    formLogin,
    setFormLogin,
    handleSubmit,
    loading,
    status,
  } = useLogin();

  if (status === "loading") {
    return <LoadingSkeletonPages />;
  }

  if (status === "authenticated") {
    redirect("/");
  }

  if (status === "unauthenticated") {
    return (
      <section className="w-full bg-gradient-to-tr from-darkMode via-lightDarkMode to-darkMode min-h-screen flex flex-col justify-center items-center px-2 relative">
        {success?.success && (
          <NotificationsLogin type="success" message={success.message} />
        )}
        {error?.error && (
          <NotificationsLogin type="error" message={error.message} />
        )}
        <Image
          src={img_PageMenuMovil}
          alt="fondo auth"
          className="w-full h-full absolute object-cover brightness-25"
        />
        <div className="flex flex-col items-center p-2 lg:p-8 max-w-md rounded-lg w-full bg-gradient-to-tr from-darkMode/70 via-primary/10 to-darkMode shadow-lg z-10">
          <h2 className="text-3xl font-bold text-center text-slate-200 py-5">
            Login
          </h2>

          <form className="flex flex-col w-96 gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full max-w-sm m-auto">
              <label className="text-slate-200 pl-1" htmlFor="email">
                Correo
              </label>
              <input
                onChange={(e) => {
                  setFormLogin({
                    ...formLogin,
                    email: e.target.value,
                  });
                }}
                value={formLogin.email}
                required
                placeholder="Escriba su correo"
                type="email"
                name="email"
                id="email"
                className="input-register_login"
              />
            </div>
            <div className="flex flex-col w-full max-w-sm m-auto">
              <label className="text-slate-200 pl-1" htmlFor="password">
                Contraseña
              </label>
              <input
                onChange={(e) => {
                  setFormLogin({
                    ...formLogin,
                    password: e.target.value,
                  });
                }}
                value={formLogin.password}
                required
                placeholder="Escriba una contraseña"
                type="password"
                name="password"
                id="password"
                className="input-register_login"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="bg-primaryPal-600 gap-2 flex relative justify-center items-center shadow-md p-2 rounded-md mt-2 text-white w-full max-w-sm m-auto"
            >
              <div className={`w-8 h-8 ${loading && "cursor-wait"}`}>
                {loading && (
                  <div className="animate-spin rounded-full w-full h-full border-t-2 border-primary border-t-primary border-r-2 border-r-primary"></div>
                )}
              </div>
              <span className="mr-[25px]">Entrar</span>
            </button>
          </form>
          <div className="pt-5 flex text-gray-100 gap-1">
            <span>No tienes cuenta?</span>
            <Link
              href={"/register"}
              className="text-blue-300 border-b border-blue-200"
            >
              Registrarse
            </Link>
          </div>
          {/* Buttons login with google */}
          <p className="text-slate-200 text-center mt-10 mb-4">O entre con</p>
          <SocialButtons type="login" />
        </div>
      </section>
    );
  }
}
