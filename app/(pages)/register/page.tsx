import { Logo } from "@/components/Logo";
import { facebookLogo, googleLogo } from "@/utils/images";
import Image from "next/image";
import React from "react";

export default function Register() {
  return (
    <section className="w-full min-h-screen mt-24 flex flex-col justify-center items-center pb-20">
      <div className="gradient"></div>
      <div className="flex flex-col items-center p-4 rounded-md bg-primary/5 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-slate-200 py-5">
          Registrarse
        </h2>
       {/*  <div className="flex flex-col justify-center border border-darkMode items-center w-32 h-32 text-white bg-primary rounded-full my-4 shadow-md">
          <Logo />
        </div> */}

        <form className="flex flex-col w-96 gap-3 z-10">
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="name">
              Nombre
            </label>
            <input
              required
              placeholder="Escriba su nombre"
              type="text"
              name="name"
              id="name"
              className="input-register_login"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="email">
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
            <label className="text-slate-200" htmlFor="password">
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
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="confirm-password">
              Confirmar contraseña
            </label>
            <input
              required
              placeholder="Confirme su contraseña"
              type="password"
              name="password"
              id="confirm-password"
              className="input-register_login"
            />
          </div>
          <button
            type="submit"
            className="bg-primaryGradient hover-primary-gradient p-3 rounded-md mt-2 text-white"
          >
            Registrarse
          </button>
        </form>
        {/* Buttons register with google */}
        <p className="text-slate-200 text-center mt-10 mb-4">O registrarse con</p>
        <div className="flex flex-col items-baseline w-full gap-2 z-10">
          <button className="bg-slate-100 border border-red-500 w-full p-2 rounded-md text-lightDarkMode flex justify-center items-center gap-2">
            <Image
              src={googleLogo}
              alt="google icon"
              width={32}
              height={32}
              className="rounded-full"
            />
            Registrarse con Google
          </button>
          <button className="bg-slate-100 p-2 w-full rounded-md text-lightDarkMode border border-blue-600 flex justify-center items-center gap-2">
            <Image
              src={facebookLogo}
              alt="facebook icon"
              width={32}
              height={32}
              className="rounded-full"
            />
            Registrarse con Facebook
          </button>
        </div>
      </div>
    </section>
  );
}
