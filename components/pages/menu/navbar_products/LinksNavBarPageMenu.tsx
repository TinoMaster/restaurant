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
      <ul className="max-w-screen-xl mx-auto grid grid-cols-3 md:grid-cols-4 text-slate-200 gap-6 uppercase bg-gradient-to-r from-black/30 to-black/50 p-3 rounded-3xl">
         <h4 className="col-span-full text-center text-primary/70 text-xl md:text-2xl font-bold">
            CATEGORIES
         </h4>
         {categories?.map((link) => (
            <Link
               key={link.name}
               href={`/menu/${link.name}`}
               className="col-span-1 flex justify-center items-center rounded-md py-2 cursor-pointer relative"
            >
               {pathUrl === '/' + link.name ? (
                  <motion.div
                     layoutId="active2"
                     className="absolute bg-white w-full h-full rounded-md"
                  ></motion.div>
               ) : null}
               <span
                  className={`${
                     pathUrl === '/' + link.name ? 'text-darkMode' : 'text-white'
                  } text-center z-10 text-base md:text-xl`}
               >
                  {link.name}
               </span>
            </Link>
         ))}
      </ul>
   )
}
