"use client";
import { SocialButtons } from "@/components/buttons/SocialButtons";
import { auth } from "@/services/auth";
import Link from "next/link";
import React, { useState } from "react";

const INITIAL_REGISTER_FORM = {
  name: "",
  email: "",
  password: "",
};
export default function Register() {
  const [formRegister, setFormRegister] = useState(INITIAL_REGISTER_FORM);
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    auth.register("/api/register", formRegister);
  };
  return (
    <section className="w-full min-h-screen mt-24 flex flex-col justify-center items-center pb-20">
      <div className="gradient"></div>
      <div className="flex flex-col items-center p-4 rounded-md bg-primary/5 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-slate-200 py-5">
          Registrarse
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col w-96 gap-3 z-10">
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
            type="submit"
            className="bg-primaryPal-600 shadow-md p-3 rounded-md mt-2 text-white"
          >
            Registrarse
          </button>
        </form>
        <div className="pt-5 flex text-gray-100 gap-1">
          <span>Ya tienes cuenta?</span>
          <Link
            href={"/login"}
            className="text-blue-300 border-b border-blue-200"
          >
            iniciar session
          </Link>
        </div>
        {/* Buttons register with google */}
        <p className="text-slate-200 text-center py-5">O registrarse con</p>
        <SocialButtons />
      </div>
    </section>
  );
}
