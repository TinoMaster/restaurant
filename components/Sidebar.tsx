"use client";
import { linksProfile } from "@/constants/profile";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <nav className="w-full h-full bg-lightDarkMode space-y-8 sm:w-80">
      <div className="flex flex-col items-center h-full w-full">
        <h2 className="py-10 text-2xl font-bold">User Profile</h2>
        <div className="flex flex-col h-full overflow-auto">
          <ul className="px-4 text-sm font-medium flex-1 space-y-4">
            {linksProfile.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="flex items-center capitalize gap-x-2 text-gray-400 p-2 rounded-lg  hover:bg-white/90 hover:text-gray-700 active:bg-primaryPal-900 duration-150"
                >
                  <item.icon className="text-xl" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-5 px-5 flex items-center">
            <button
              onClick={() => signOut()}
              className="gap-2 flex relative justify-center items-center shadow-md p-2 rounded-md mt-2 text-primary w-full max-w-sm m-auto"
            >
              <RiLogoutCircleLine />
              <span className="">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
