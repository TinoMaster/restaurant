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
  const paths = cutPathnameByPiece(pathname);
  const piece1 = `/${paths[1]}`;

  return (
    <div
      onClick={() => setMenuIsOpen(false)}
      className={`${
        piece1 === link.href ? "" : ""
      } relative text-3xl lg:text-xl inline-block`}
    >
      {piece1 === link.href ? (
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
