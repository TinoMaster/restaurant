"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TypeLinkNavBar } from "@/types/common";
import useNav from "@/context/navContext";
import { cutPathnameByPiece } from "@/utils/cutPathname";

interface NavbarLinkProps {
  link: TypeLinkNavBar;
}

export const NavbarLink = ({ link }: NavbarLinkProps) => {
  const { name, href } = link;
  const pathname = usePathname();
  const { setMenuIsOpen } = useNav();
  const pathsUrl = cutPathnameByPiece(pathname);
  const pathsLink = cutPathnameByPiece(href);
  const piece1Path = `/${pathsUrl[1]}`;
  const piece1Link = `/${pathsLink[1]}`;

  return (
    <div
      onClick={() => setMenuIsOpen(false)}
      className={`${
        piece1Path === piece1Link ? "" : ""
      } relative  inline-block`}
    >
      {piece1Path === piece1Link ? (
        <motion.div
          layoutId="active"
          className="absolute w-full h-full border-b-2"
        ></motion.div>
      ) : null}
      <Link href={`${href}`} className="">
        {name}
      </Link>
    </div>
  );
};
