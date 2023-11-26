"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TypeLinkNavBar } from "@/types/common";
import useNav from "@/context/navContext";

interface NavbarLinkProps {
  link: TypeLinkNavBar;
}

export const NavbarLink = ({ link }: NavbarLinkProps) => {
  const { name, href, hash } = link;
  const pathname = usePathname();
  const currentHash = pathname.slice(1);
  const { setMenuIsOpen } = useNav();

  return (
    <div
      onClick={() => setMenuIsOpen(false)}
      className={`${
        currentHash === hash ? "" : ""
      } relative text-3xl lg:text-xl inline-block`}
    >
      {currentHash === hash ? (
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
