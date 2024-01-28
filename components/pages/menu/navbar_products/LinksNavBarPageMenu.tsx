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
      <ul className="container grid grid-cols-3 md:grid-cols-4 text-slate-200 gap-6 uppercase">
         <h4 className='col-span-full text-center text-secondary/70 text-2xl md:text-3xl font-bold'>CATEGORIAS</h4>
         {categories?.map((link) => (
            <Link
               key={link.name}
               href={`/menu/${link.name}`}
               className="col-span-1 flex justify-center items-center rounded-md py-2 cursor-pointer relative"
            >
               {pathUrl === '/' + link.name ? (
                  <motion.div
                     layoutId="active2"
                     className="absolute bg-sec-500/40 w-full h-full rounded-md"
                  ></motion.div>
               ) : null}
               <span className="text-center text-base md:text-xl">{link.name}</span>
            </Link>
         ))}
      </ul>
   )
}
