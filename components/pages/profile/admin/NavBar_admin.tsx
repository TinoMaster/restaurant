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
    <header className="text-gray-400 py-4 rounded-lg flex justify-end bg-white/10 mb-5">
      <nav className="md:ml-auto flex flex-wrap items-center justify-center gap-3">
        {linksAdminPanel.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={` ${
              path === link.href ? "bg-white text-gray-800" : "hover:text-white"
            } mr-5 uppercase text-[10px] sm:text-xs flex items-center gap-1 p-2 rounded-lg`}
          >
            <link.icon className="text-sm" />
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
