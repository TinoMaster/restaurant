"use client";
import useNav from "@/context/navContext";
import { CgMenuHotdog } from "react-icons/cg";

export const Btn_MenuMovil = () => {
  const { setMenuIsOpen } = useNav();

  return (
    <button
      onClick={() => setMenuIsOpen(true)}
      className="text-4xl block p-1 border rounded-md"
    >
      <CgMenuHotdog />
    </button>
  );
};
