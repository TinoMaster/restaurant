import { linksPrincipalMenu } from '@/constants/links_navbar'
import { Logo } from '../ui/globals/Logo'
import { NavBarScroll } from './NavBarScroll'
import { NavbarLink } from './NavbarLink'
import { Registration } from './Registration'
import { CartAndFavorites } from './cartAndFavorites'
import { Cart } from './cartAndFavorites/Cart'
import { Favorites } from './cartAndFavorites/Favorites'

export const NavBar = () => {
   return (
      <section className="flex justify-between items-center text-slate-200 py-3 z-30 lg:pr-5 lg:pl-10 px-3 h-[80px] select-none">
         <Logo />
         <div className="flex items-center justify-end gap-2 lg:gap-4 relative">
            <CartAndFavorites>
               <Cart />
               <Favorites />
            </CartAndFavorites>
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
