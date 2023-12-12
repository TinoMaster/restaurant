"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { linksLogoProfile } from "@/constants/links_profile";

export const LogoProfile = () => {
  const { data: session } = useSession();
  const [menuProfile, setMenuProfile] = useState(false);
  return (
    <div
      onClick={() => setMenuProfile(!menuProfile)}
      className="cursor-pointer w-10 h-10 flex justify-center items-center bg-lightDarkMode rounded-full relative"
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

      {menuProfile && (
        <div className="bg-gradient-to-r from-primary/10 to-darkMode absolute top-10 right-0 px-8 py-4 flex flex-col justify-center gap-4">
          {linksLogoProfile.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-1"
            >
              <item.icon className="text-xl" />
              <span className="text-white">{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
