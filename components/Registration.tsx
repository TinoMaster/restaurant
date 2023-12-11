"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { LoginButton } from "./buttons/LoginButton";
import { RegistrationButton } from "./buttons/RegistrationButton";
import Image from "next/image";

export const Registration = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="w-10 h-10 animate-pulse bg-white/10 rounded-full"></div>
    );
  }

  return (
    <>
      {session ? (
        <div
          onClick={() => signOut()}
          className="cursor-pointer w-10 h-10 flex justify-center items-center bg-lightDarkMode rounded-full"
        >
          {session?.user?.image ? (
            <Image
              src={session.user?.image}
              alt="user image"
              width={32}
              height={32}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <p className="text-white font-serif capitalize">
              {session?.user?.name?.slice(0, 2)}
            </p>
          )}
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
