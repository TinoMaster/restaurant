"use client";
import useNav from "@/context/navContext";
import { NavbarLink } from "./NabvarLink";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "@/constants/links_navbar";

export const Nabvar_Movil = () => {
  const { menuIsOpen, setMenuIsOpen } = useNav();

  return (
    <section
      className={`fixed transition-transform z-50 ${
        menuIsOpen
          ? "flex flex-col translate-x-0 w-screen bg-darkMode text-white h-screen z-20"
          : "-translate-x-full"
      } `}
    >
      <div className="flex flex-col z-10 grow">
        <button
          onClick={() => setMenuIsOpen(false)}
          className="p-10 flex justify-end text-3xl text-slate-600"
        >
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col text-xl justify-center items-center h-full gap-8">
          {links?.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
        </ul>
      </div>
    </section>
  );
};
