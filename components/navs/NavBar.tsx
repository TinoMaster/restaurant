import { GiHotMeal } from "react-icons/gi";
import { links } from "@/data/links_navbar";
import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "../Btn_MenuMovil";
import Link from "next/link";
import { RegistrationButton } from "../buttons/RegistrationButton";

export const NavBar = () => {
  return (
    <section className="flex container justify-between items-center text-slate-200 py-5 z-20">
      {/* Logo */}
      <Link href={"/"} className="flex text-sm flex-col items-center">
        <GiHotMeal className="text-xl" />
        <h1 className="text-3xl">Noah</h1>
      </Link>
      {/* btn open menu */}
      <div className="lg:hidden">
        <Btn_MenuMovil />
      </div>
      {/* Links */}
      <div className="gap-5 text-lg hidden lg:flex items-center">
        {links?.map((link) => (
          <NavbarLink key={link.name} link={link} />
        ))}
        <RegistrationButton />
      </div>
    </section>
  );
};
