import { img_PageMenu } from "@/utils/images";
import Image from "next/image";
import React from "react";

export default function Register() {
  return (
    <section className="w-full min-h-screen mt-24 flex flex-col justify-center items-center pb-20">
      <div className="gradient"></div>
      <div className="flex flex-col items-center p-4 rounded-md bg-primary/5 shadow-lg">
        <h2 className="text-4xl font-bold text-center text-slate-200">
          Registro
        </h2>
        <div className="w-44 h-44 bg-primary rounded-full my-8 shadow-md"></div>

        <form className="flex flex-col w-96 gap-5 z-20">
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-slate-200 rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="email">
              Correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-slate-200 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-slate-200 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-200" htmlFor="password">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-slate-200 rounded-md p-2"
            />
          </div>
          <button className="bg-primaryGradient hover-primary-gradient p-3 rounded-md">
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}
