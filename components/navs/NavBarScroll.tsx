"use client";
import { linksPrincipalMenu } from "@/constants/links_navbar";
import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "../Btn_MenuMovil";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { Registration } from "../Registration";

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
      } w-full transition-transform fixed top-0 text-slate-200 bg-gradient-to-r from-darkMode/90 via-lightDarkMode/90 to-darkMode/90 shadow-md py-2 z-40`}
    >
      <div className="lg:pr-5 lg:pl-10 px-3 flex justify-between items-center">
        <Logo />
        <div className="lg:hidden">
          <Btn_MenuMovil />
        </div>
        <div className="gap-5 hidden lg:flex items-center">
          {linksPrincipalMenu?.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
          <Registration />
        </div>
      </div>
    </section>
  );
};
