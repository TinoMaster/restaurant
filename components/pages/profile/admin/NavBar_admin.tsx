"use client";
import { linksAdminPanel } from "@/constants/links_profile";
import { cutPathnameByPiece } from "@/utils/cutPathname";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavBar_admin = () => {
  const pathName = usePathname();
  const path = cutPathnameByPiece(pathName, 3);
  return (
    <header className="text-gray-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3">
          {linksAdminPanel.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={` ${
                path === link.href
                  ? "bg-white text-gray-800"
                  : "hover:text-white"
              } mr-5 uppercase text-xs flex items-center gap-1 p-2 rounded-lg`}
            >
              <link.icon className="text-sm" />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
