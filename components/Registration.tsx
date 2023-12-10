"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { LoginButton } from "./buttons/LoginButton";
import { RegistrationButton } from "./buttons/RegistrationButton";

export const Registration = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div
          onClick={() => signOut()}
          className="cursor-pointer w-10 h-10 flex justify-center items-center bg-lightDarkMode rounded-full"
        >
          <p className="text-white font-serif capitalize">{session?.user?.name?.slice(0, 2)}</p>
        </div>
      ) : (
        <div className="flex">
          <LoginButton />
          <RegistrationButton />
        </div>
      )}
    </>
  );
};
