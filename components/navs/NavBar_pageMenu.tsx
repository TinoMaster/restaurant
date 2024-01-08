'use client'
import { linksPageMenu } from '@/constants/links_navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavBar_pageMenu = () => {
   const pathname = usePathname()

   return (
      <ul className="container grid grid-cols-4 text-slate-200 gap-y-6 uppercase">
         {linksPageMenu.map((link) => (
            <Link
               key={link.name}
               href={link.href}
               className={` col-span-1 flex justify-center rounded-md`}
            >
               <span
                  className={`px-4 rounded-md ${
                     pathname === link.href
                        ? 'first:bg-primary text-darkMode shadow'
                        : ''
                  }`}
               >
                  {link.name}
               </span>
            </Link>
         ))}
      </ul>
   )
}
