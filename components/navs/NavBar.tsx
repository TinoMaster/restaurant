import { links } from "@/data/links_navbar";
import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "../Btn_MenuMovil";
import { RegistrationButton } from "../buttons/RegistrationButton";
import { Logo } from "../Logo";
import { LoginButton } from "../buttons/LoginButton";

export const NavBar = () => {
  return (
    <section className="flex justify-between items-center text-slate-200 py-5 z-20 lg:pr-5 lg:pl-10 px-3">
      <Logo />
      <div className="lg:hidden">
        <Btn_MenuMovil />
      </div>
      <div className="gap-5 hidden lg:flex items-center">
        {links?.map((link) => (
          <NavbarLink key={link.name} link={link} />
        ))}
        <div className="flex">
          <LoginButton />
          <RegistrationButton />
        </div>
      </div>
    </section>
  );
};
