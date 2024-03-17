'use client'
import { convertPathWithSpacesReverse, cutPathnameByPiece } from '@/libs/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface MenuInfiniteProps {
   links: {
      title: string
      href: string
   }[]
   cutPath: [number, number]
   position?: 'center' | 'right'
}

export const MenuInfinite = ({
   links,
   cutPath,
   position,
}: MenuInfiniteProps) => {
   const pathName = usePathname()
   const path = cutPathnameByPiece(pathName, cutPath[0], cutPath[1])
   const [width, setWidth] = useState(0)
   const element = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      if (element.current) {
         setWidth(element.current.scrollWidth - element.current.offsetWidth)
      }
   }, [])

   return (
      <motion.header
         ref={element}
         whileTap={{ cursor: 'grabbing' }}
         className="flex bg-lightDarkMode overflow-hidden relative py-4 mb-4 lg:mb-10 px-2"
      >
         <motion.nav
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={`${position === 'center' && 'md:justify-center'} ${
               position === 'right' && 'md:justify-end'
            } flex w-max gap-4 lg:gap-7 cursor-grab min-w-full`}
         >
            {links.map(({ href, title }) => (
               <Link
                  key={title}
                  href={href}
                  scroll={false}
                  className={` ${
                     convertPathWithSpacesReverse(path) === href
                        ? 'text-gray-800'
                        : 'hover:text-white'
                  } uppercase text-xs sm:text-sm flex justify-center items-center gap-1 bg-white/5 p-2 rounded-lg relative`}
               >
                  {convertPathWithSpacesReverse(path) === href && (
                     <motion.div
                        layoutId="active2"
                        className="absolute bg-white w-full px-2 h-full rounded-md"
                     ></motion.div>
                  )}
                  <span className="leading-none z-10 w-max flex justify-center items-center">
                     {title}
                  </span>
               </Link>
            ))}
         </motion.nav>
      </motion.header>
   )
}
