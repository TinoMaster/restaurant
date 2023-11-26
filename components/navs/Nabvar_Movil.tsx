"use client";
import useNav from "@/context/navContext";
import { NavbarLink } from "./NabvarLink";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "@/data/links_navbar";

export const Nabvar_Movil = () => {
  const { menuIsOpen, setMenuIsOpen } = useNav();

  return (
    <section
      className={`fixed transition-transform z-50 ${
        menuIsOpen
          ? "flex flex-col translate-x-0 w-screen bg-gradient-to-tr from-orange-50 via-white to-orange-50 h-screen z-20"
          : "-translate-x-full"
      } `}
    >
      <button
        onClick={() => setMenuIsOpen(false)}
        className="p-10 flex justify-end text-3xl text-slate-600"
      >
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col grow justify-center items-center h-full gap-5">
        {links?.map((link) => (
          <NavbarLink key={link.name} link={link} />
        ))}
      </ul>
    </section>
  );
};
