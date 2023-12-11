"use client";
import useNav from "@/context/navContext";
import { TbMenuDeep } from "react-icons/tb";

export const Btn_MenuMovil = () => {
  const { setMenuIsOpen } = useNav();

  return (
    <button
      onClick={() => setMenuIsOpen(true)}
      className="text-4xl block p-1 rounded-md"
    >
      <TbMenuDeep />
    </button>
  );
};
