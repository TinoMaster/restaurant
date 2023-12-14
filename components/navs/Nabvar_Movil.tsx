"use client";
import useNav from "@/context/navContext";
import { NavbarLink } from "./NabvarLink";
import { AiOutlineClose } from "react-icons/ai";
import { linksPrincipalMenu } from "@/constants/links_navbar";
import { motion } from "framer-motion";
import { Registration } from "./Registration";

export const Nabvar_Movil = () => {
  const { menuIsOpen, setMenuIsOpen } = useNav();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 ${
        menuIsOpen
          ? "flex flex-col translate-x-0 w-screen h-screen justify-center items-center bg-darkMode text-white z-20 overflow-x-hidden"
          : "-translate-x-full"
      } `}
    >
      <div className="flex w-full flex-col z-10 grow">
        <div className="flex w-full justify-end">
          <button
            onClick={() => setMenuIsOpen(false)}
            className="p-10 text-3xl text-slate-300 mr-5"
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className="flex w-[150vw] -translate-x-[25vw] flex-col text-xl justify-center items-center h-full gap-8 bg-lightDarkMode rounded-t-full">
          {linksPrincipalMenu?.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
        </ul>
      </div>
      <div className="flex py-10">
        <small onClick={() => setMenuIsOpen(false)}>
          <Registration />
        </small>
      </div>
    </motion.section>
  );
};
