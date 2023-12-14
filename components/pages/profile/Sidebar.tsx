"use client";
import { linksProfile } from "@/constants/links_profile";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-full bg-lightDarkMode sm:w-80">
      <div className="flex flex-col items-center h-full w-full">
        <h2 className="py-10 hidden sm:block text-2xl font-bold">
          User Profile
        </h2>
        <div className="flex flex-col h-full justify-between">
          <ul className="px-2 sm:px-4 text-sm font-medium space-y-4">
            {linksProfile.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`flex items-center capitalize gap-2 text-gray-400 p-2 rounded-lg ${
                    pathname === item.href
                      ? "bg-white/90 text-gray-700"
                      : "hover:bg-white/10"
                  }   active:bg-primaryPal-900 duration-150`}
                >
                  <item.icon className="text-xl" />
                  <span className="hidden sm:inline">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-5 sm:px-4 flex">
            <button
              onClick={() => signOut()}
              className="gap-2 flex relative justify-center items-center p-2 rounded-md mt-2 text-primary w-full max-w-sm m-auto"
            >
              <RiLogoutCircleLine />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
