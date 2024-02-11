'use client'
import { TCategory } from '@/types/models/category'
import { cutPathnameByPiece } from '@/utils/cutPathname'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const LinksNavBarPageMenu = async ({
   categories,
}: {
   categories: TCategory[]
}) => {
   const pathname = usePathname()
   const pathUrl = cutPathnameByPiece(pathname, 2, 3)

   return (
      <ul className="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-10 bg-black/5 shadow-md text-slate-200 gap-6 uppercase p-3 rounded-lg">
         {/* <h4 className="col-span-full text-center text-primary/70 text-xl md:text-2xl font-bold">
            CATEGORIES
         </h4> */}
         {categories?.map((link) => (
            <Link
               key={link.name}
               href={`/menu/${link.name}`}
               className="col-span-1 flex justify-center items-center rounded-md py-2 cursor-pointer relative"
            >
               {pathUrl === '/' + link.name ? (
                  <motion.div
                     layoutId="active2"
                     className="absolute bg-white w-full px-2 h-full rounded-md"
                  ></motion.div>
               ) : null}
               <span
                  className={`${
                     pathUrl === '/' + link.name ? 'text-darkMode' : 'text-white'
                  } text-center z-10 text-base md:text-xl font-serif`}
               >
                  {link.name}
               </span>
            </Link>
         ))}
      </ul>
   )
}
