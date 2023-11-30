import { facebookLogo, googleLogo } from "@/utils/images";
import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <section className="w-full min-h-screen mt-24 flex flex-col justify-center items-center pb-20">
      <div className="gradient"></div>
      <div className="flex flex-col items-center p-4 rounded-md bg-primary/5 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-slate-200 py-5">
          Login
        </h2>

        <form className="flex flex-col w-96 gap-3 z-20">
          <div className="flex flex-col">
            <label className="text-slate-200 pl-1" htmlFor="email">
              Correo
            </label>
            <input
              required
              placeholder="Escriba su correo"
              type="email"
              name="email"
              id="email"
              className="input-register_login"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200 pl-1" htmlFor="password">
              Contraseña
            </label>
            <input
              required
              placeholder="Escriba una contraseña"
              type="password"
              name="password"
              id="password"
              className="input-register_login"
            />
          </div>
          <button
            type="submit"
            className="bg-primaryGradient hover-primary-gradient p-3 rounded-md mt-2 text-white"
          >
            Entrar
          </button>
        </form>
        {/* Buttons login with google */}
        <p className="text-slate-200 text-center mt-10 mb-4">O entre con</p>
        <div className="flex flex-col items-baseline w-full gap-2 z-20">
          <button className="bg-slate-100 border border-red-500 w-full p-2 rounded-md text-lightDarkMode flex justify-center items-center gap-2">
            <Image
              src={googleLogo}
              alt="google icon"
              width={32}
              height={32}
              className="rounded-full"
            />
            Entra con Google
          </button>
          <button className="bg-slate-100 p-2 w-full rounded-md text-lightDarkMode border border-blue-600 flex justify-center items-center gap-2">
            <Image
              src={facebookLogo}
              alt="facebook icon"
              width={32}
              height={32}
              className="rounded-full"
            />
            Entra con Facebook
          </button>
        </div>
      </div>
    </section>
  );
}
