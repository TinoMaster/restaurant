"use client";
import { GiHotMeal } from "react-icons/gi";
import { links } from "@/data/links_navbar";
import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "../Btn_MenuMovil";
import { useEffect, useState } from "react";
import { RegistrationButton } from "../buttons/RegistrationButton";

export const NavBarScroll = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className={`${
        menuVisible ? "translate-y-0" : "-translate-y-full"
      } w-full transition-transform fixed top-0 text-slate-200 bg-gradient-to-r from-darkMode/90 via-lightDarkMode/90 to-darkMode/90 shadow-md py-3 z-40`}
    >
      {/* Logo */}
      <div className="container flex justify-between items-center">
        <article className="flex text-sm flex-col items-center">
          <GiHotMeal className="text-xl" />
          <h1 className="text-xl">Noah</h1>
        </article>
        {/* btn open menu */}
        <div className="lg:hidden">
          <Btn_MenuMovil />
        </div>
        {/* Links */}
        <div className="gap-3 text-lg hidden lg:flex items-center">
          {links?.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
          <RegistrationButton />
        </div>
      </div>
    </section>
  );
};
