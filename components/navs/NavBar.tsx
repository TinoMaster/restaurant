import { linksPrincipalMenu } from '@/constants/links_navbar'
import { Logo } from '../ui/globals/Logo'
import { NavbarLink } from './NavbarLink'
import { Registration } from './Registration'

export const NavBar = () => {
   return (
      <section className="flex justify-between items-center text-slate-200 py-3 z-20 lg:pr-5 lg:pl-10 px-3">
         <Logo />
         <div className="gap-5 hidden lg:flex items-center">
            {linksPrincipalMenu?.map((link) => (
               <NavbarLink key={link.name} link={link} />
            ))}
            <Registration />
         </div>
      </section>
   )
}
