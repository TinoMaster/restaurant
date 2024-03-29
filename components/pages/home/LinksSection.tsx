import { getCategories } from '@/services/actions/category.actions'
import { TLink } from '@/types/common'
import { img_PageMenu, prenotazione } from '@/utils/images'
import Image from 'next/image'
import Link from 'next/link'

export const LinksSection = async () => {
   const categories = await getCategories()
   let linkMenu: TLink

   if (!categories) {
      linkMenu = {
         title: 'Menu',
         href: '/menu',
      }
   } else {
      linkMenu = {
         title: 'Menu',
         href: `/menu/${categories[0].name}`,
      }
   }
   
   return (
      <div className="container grid grid-cols-2 gap-4 py-2">
         <div className="col-span-1">
            <Link
               href={linkMenu.href}
               className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tl from-primary/5 to-darkMode/70 shadow-md p-5 rounded-md"
            >
               <div className="w-20 h-20 relative rounded-full border-4 border-white/5 overflow-hidden">
                  <Image
                     width={100}
                     height={100}
                     alt="menu"
                     src={img_PageMenu}
                     className="w-full h-full object-cover"
                     quality={10}
                  />
               </div>
               <p className="text-xl font-bold">Vedi Menu</p>
            </Link>
         </div>
         <div className="col-span-1">
            <Link
               href="/services/events"
               className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 bg-gradient-to-tr from-primary/5 to-darkMode/70 shadow-md p-5 rounded-md"
            >
               <div className="w-20 h-20 relative rounded-full border-4 border-white/5 overflow-hidden">
                  <Image
                     width={100}
                     height={100}
                     alt="menu"
                     src={prenotazione}
                     className="w-full h-full object-cover"
                     quality={10}
                  />
               </div>
               <p className="text-xl font-bold">Prenotare</p>
            </Link>
         </div>
      </div>
   )
}
