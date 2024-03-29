import { linksPrincipalMenu } from '@/constants/links_navbar'
import { Logo } from '../ui/globals/Logo'
import { NavBarScroll } from './NavBarScroll'
import { NavbarLink } from './NavbarLink'
import { Registration } from './Registration'
import { CartAndFavorites } from './cartAndFavorites'
import { getCategories } from '@/services/actions/category.actions'
import { TLink } from '@/types/common'

export const NavBar = async () => {
   const categories = await getCategories()
   let links: TLink[]

   if (!categories) {
      links = linksPrincipalMenu
   } else {
      links = linksPrincipalMenu.map((link) => {
         if (link.title === 'Menu') {
            return {
               ...link,
               href: `/menu/${categories[0].name}`,
            }
         }

         return link
      })
   }

   return (
      <section className="flex justify-between items-center text-slate-200 py-3 z-30 lg:pr-5 lg:pl-10 px-3 h-[70px] select-none bg-gradient-to-t from-lightDarkMode to-darkMode">
         <Logo />
         <div className="flex items-center justify-end gap-2 lg:gap-4 relative">
            <CartAndFavorites />
            <NavBarScroll links={links} />
            <div className="gap-5 hidden lg:flex items-center">
               {links?.map((link) => (
                  <NavbarLink key={link.title} link={link} />
               ))}
               <Registration />
            </div>
         </div>
      </section>
   )
}

export const revalidate = 0
