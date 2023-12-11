import { linksPrincipalMenu } from "@/constants/links_navbar";
import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "../buttons/Btn_MenuMovil";
import { Logo } from "../Logo";
import { Registration } from "../Registration";

export const NavBar = () => {
  return (
    <section className="flex justify-between items-center text-slate-200 py-5 z-20 lg:pr-5 lg:pl-10 px-3">
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
    </section>
  );
};
