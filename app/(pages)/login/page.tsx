import { SocialButtons } from "@/components/buttons/SocialButtons";
import { facebookLogo, googleLogo } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <section className="w-full min-h-screen mt-24 flex flex-col justify-center items-center pb-20">
      <div className="gradient"></div>
      <div className="flex flex-col items-center p-4 rounded-md bg-primary/5 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-slate-200 py-5">
          Login
        </h2>

        <form className="flex flex-col w-96 gap-3">
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
            className="bg-primaryPal-600 shadow-md p-3 rounded-md mt-2 text-white"
          >
            Entrar
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
        <SocialButtons />
      </div>
    </section>
  );
}
