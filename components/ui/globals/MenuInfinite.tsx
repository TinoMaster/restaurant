'use client'
import { convertPathWithSpacesReverse, cutPathnameByPiece } from '@/libs/utils'
import { prenotazione } from '@/utils/images'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
         className="flex w-full bg-lightDarkMode overflow-hidden relative py-4 mb-4 lg:mb-10 px-2"
      >
         <Image
            src={prenotazione}
            alt="logo"
            width={100}
            height={100}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-25 z-0"
         />
         <motion.nav
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={`${position === 'center' && 'md:justify-center'} ${
               position === 'right' && 'md:justify-end'
            } flex w-max gap-4 lg:gap-7 cursor-grab mx-auto`}
         >
            {links.map(({ href, title }) => (
               <Link
                  key={title}
                  href={href}
                  className={` ${
                     convertPathWithSpacesReverse(path) === href
                        ? 'text-gray-50'
                        : 'hover:text-white'
                  } uppercase text-sm sm:text-base flex justify-center items-center gap-1 bg-white/5 p-2 rounded-lg relative`}
               >
                  {convertPathWithSpacesReverse(path) === href && (
                     <motion.div
                        layoutId="active2"
                        className="absolute bg-pri-600/70 w-full px-2 h-full rounded-md"
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
