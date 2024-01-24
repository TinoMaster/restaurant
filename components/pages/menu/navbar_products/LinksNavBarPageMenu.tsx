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
      <ul className="container grid grid-cols-5 text-slate-200 gap-6 uppercase">
         <h4 className='col-span-full text-center text-primary/80 text-3xl font-bold'>CATEGORIAS</h4>
         {categories?.map((link) => (
            <Link
               key={link.name}
               href={`/menu/${link.name}`}
               className="col-span-1 flex justify-center items-center rounded-md py-2 cursor-pointer relative"
            >
               {pathUrl === '/' + link.name ? (
                  <motion.div
                     layoutId="active2"
                     className="absolute bg-white/10 w-full h-full rounded-md"
                  ></motion.div>
               ) : null}
               <span className="text-center text-xl">{link.name}</span>
            </Link>
         ))}
      </ul>
   )
}
