import { facebookLogo, googleLogo } from "@/utils/images";
import Image from "next/image";
import React from "react";

interface SocialButtonsProps {
  type: "login" | "register";
}

export const SocialButtons = ({ type }: SocialButtonsProps) => {
  return (
    <div className="flex flex-col items-baseline w-full gap-2 z-10">
      <button className="bg-slate-200 hover:bg-slate-100 w-full p-2 rounded-md text-lightDarkMode flex justify-center items-center gap-2">
        <Image
          src={googleLogo}
          alt="google icon"
          width={32}
          height={32}
          className="rounded-full"
        />
        {type === "login" ? "Entrar con Google" : "Registrarse con Google"}
      </button>
      <button className="bg-slate-200 p-2 w-full rounded-md text-lightDarkMode hover:bg-slate-100 flex justify-center items-center gap-2">
        <Image
          src={facebookLogo}
          alt="facebook icon"
          width={32}
          height={32}
          className="rounded-full"
        />
        {type === "login" ? "Entrar con Facebook" : "Registrarse con Facebook"}
      </button>
    </div>
  );
};
