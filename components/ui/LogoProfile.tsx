"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { linksLogoProfile } from "@/constants/links_profile";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { useAppSelector } from "@/redux/hooks";

export const LogoProfile = () => {
  const [menuProfile, setMenuProfile] = useState(false);
  const { image, name } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (menuProfile) {
      window.addEventListener("click", () => {
        setMenuProfile(false);
      });
    }

    return () => {
      window.removeEventListener("click", () => {
        setMenuProfile(false);
      });
    };
  }, [menuProfile]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setMenuProfile(!menuProfile);
      }}
      className="cursor-pointer flex justify-center items-center relative"
    >
      <div className="flex items-center">
        {image ? (
          <Image
            src={image}
            alt="user image"
            width={250}
            height={250}
            className="w-14 h-14 lg:w-8 lg:h-8 rounded-full"
          />
        ) : (
          <p className="text-darkMode font-serif capitalize w-8 h-8 bg-gray-100 rounded-full flex justify-center items-center">
            {name?.slice(0, 2)}
          </p>
        )}
        <CiMenuKebab className="text-3xl lg:text-base" />
      </div>

      {menuProfile && (
        <div className="bg-gradient-to-r from-gray-100 to-white text-darkMode absolute -top-[300px] z-20 lg:top-[48px] lg:right-0 p-4 flex flex-col justify-center gap-2 rounded-lg">
          {linksLogoProfile.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-1 p-2 rounded-lg hover:bg-white/90 hover:text-gray-800 transition-colors duration-150"
            >
              <item.icon className="text-xl" />
              <span className="capitalize text-sm">{item.title}</span>
            </Link>
          ))}
          <button
            onClick={() => signOut()}
            className="flex items-center gap-1 p-2 rounded-lg hover:bg-white/90 hover:text-gray-800 transition-colors duration-150"
          >
            <RiLogoutCircleLine className="text-lg" />
            <span className="capitalize text-sm">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};
