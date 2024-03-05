import { linksPrincipalMenu } from '@/constants/links_navbar'
import { Logo } from '../ui/globals/Logo'
import { NavbarLink } from './NavbarLink'
import { Registration } from './Registration'
import { NavBarScroll } from './NavBarScroll'
import { CartAndFavorites } from './CartAndFavorites'
import { Suspense } from 'react'

export const NavBar = () => {
   return (
      <section className="flex justify-between items-center text-slate-200 py-3 z-30 lg:pr-5 lg:pl-10 px-3 h-[80px] select-none">
         <Logo />
         <div className="flex items-center justify-end gap-2 lg:gap-4 relative">
            <Suspense
               fallback={
                  <div className="w-10 h-10 animate-pulse bg-white/10 rounded-full" />
               }
            >
               <CartAndFavorites />
            </Suspense>
            <NavBarScroll />
            <div className="gap-5 hidden lg:flex items-center">
               {linksPrincipalMenu?.map((link) => (
                  <NavbarLink key={link.title} link={link} />
               ))}
               <Registration />
            </div>
         </div>
      </section>
   )
}
