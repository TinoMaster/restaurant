"use client";
import { SocialButtons } from "@/components/buttons/SocialButtons";
import { NotificationsLogin } from "@/components/notifications/NotificationsLogin";
import { useRegister } from "@/hooks/useRegister";
import { img_PageMenuMovil } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const {
    formRegister,
    error,
    loading,
    success,
    handleSubmit,
    setFormRegister,
  } = useRegister();
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
          Registrarse
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-96 gap-3 z-10"
        >
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="name">
              Nombre
            </label>
            <input
              onChange={(ev) =>
                setFormRegister({
                  ...formRegister,
                  [ev.target.name]: ev.target.value,
                })
              }
              required
              placeholder="Escriba su nombre"
              type="text"
              name="name"
              value={formRegister.name}
              id="name"
              className="input"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="email">
              Correo
            </label>
            <input
              onChange={(ev) =>
                setFormRegister({
                  ...formRegister,
                  [ev.target.name]: ev.target.value,
                })
              }
              required
              placeholder="Escriba su correo"
              type="email"
              name="email"
              value={formRegister.email}
              id="email"
              className="input"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="password">
              Contraseña
            </label>
            <input
              onChange={(ev) =>
                setFormRegister({
                  ...formRegister,
                  [ev.target.name]: ev.target.value,
                })
              }
              required
              placeholder="Escriba una contraseña"
              type="password"
              name="password"
              id="password"
              value={formRegister.password}
              className="input"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-primaryPal-600 gap-2 flex relative justify-center items-center shadow-md p-2 rounded-md mt-2 text-white"
          >
            <div className={`w-8 h-8 ${loading && "cursor-wait"}`}>
              {loading && (
                <div className="animate-spin rounded-full w-full h-full border-t-2 border-primary border-t-primary border-r-2 border-r-primary"></div>
              )}
            </div>
            <span className="pr-[12px]">Registrarse</span>
          </button>
        </form>
        <div className="pt-5 flex text-gray-100 gap-1">
          <span>Ya existe la cuenta? visite → </span>
          <Link
            href={"/login"}
            className="text-blue-300 border-b border-blue-200"
          >
            iniciar session
          </Link>
        </div>
        {/* Buttons register with google */}
        <p className="text-slate-200 text-center py-5">O registrarse con</p>
        <SocialButtons type="register" />
      </div>
    </section>
  );
}
