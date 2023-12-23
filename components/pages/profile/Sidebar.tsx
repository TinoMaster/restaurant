"use client";
import { linksProfile } from "@/constants/links_profile";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import useProfile from "@/context/profileContext";
import { ADMIN_PANEL } from "@/constants/routes.app";
import { GrUserAdmin } from "react-icons/gr";

export const Sidebar = () => {
  const { dataSession } = useProfile();
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();

  const handlerBack = () => {
    router.back();
  };

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <nav
      className={`h-full bg-lightDarkMode absolute transition-all z-30 ${
        menuIsOpen ? "w-60" : "w-16"
      }`}
    >
      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex flex-col gap-3 py-2">
          <button onClick={toggleMenu} className="p-2">
            <IoMenu className="text-3xl" />
          </button>
          <button
            onClick={handlerBack}
            className="flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="text-xl" />
            <span className={`${menuIsOpen ? "block" : "hidden"}`}>volver</span>
          </button>
        </div>

        <ul className="p-2 sm:p-4 text-sm font-medium space-y-4">
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
                <span className={`${menuIsOpen ? "block" : "hidden"}`}>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
          {dataSession?.isAdmin && (
            <li>
              <Link
                href={ADMIN_PANEL}
                className={`flex items-center capitalize gap-2 text-gray-400 p-2 rounded-lg ${
                  pathname === ADMIN_PANEL
                    ? "bg-white/90 text-gray-700"
                    : "hover:bg-white/10"
                }   active:bg-primaryPal-900 duration-150`}
              >
                <div className="p-1">
                  <GrUserAdmin />
                </div>
                <span className={`${menuIsOpen ? "block" : "hidden"}`}>
                  Admin Panel
                </span>
              </Link>
            </li>
          )}
        </ul>
        <div className="py-5 sm:px-4 flex">
          <button
            onClick={() => signOut()}
            className="gap-2 flex relative justify-center items-center p-2 rounded-md mt-2 text-primary w-full max-w-sm m-auto"
          >
            <RiLogoutCircleLine />
            <span className={`${menuIsOpen ? "block" : "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
