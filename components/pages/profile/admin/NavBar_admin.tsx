'use client'
import { linksAdminPanel } from '@/constants/links_profile'
import { cutPathnameByPiece } from '@/utils/cutPathname'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

export const NavBar_admin = () => {
   const pathName = usePathname()
   const path = cutPathnameByPiece(pathName, 1, 4)
   const [width, setWhidth] = useState(0)
   const element = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      if (element.current) {
         setWhidth(element.current.scrollWidth - element.current.offsetWidth)
      }
   }, [])
   return (
      <motion.header
         ref={element}
         whileTap={{ cursor: 'grabbing' }}
         className="flex lg:justify-end overflow-hidden relative py-4 mb-4 lg:mb-10 px-2 bg-white/10 rounded-lg"
      >
         <motion.nav
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex w-max gap-4 lg:gap-7 cursor-grab md:justify-end min-w-full"
         >
            {linksAdminPanel.map((link) => (
               <Link
                  key={link.title}
                  href={link.href}
                  className={` ${
                     path === link.href
                        ? 'bg-white text-gray-800'
                        : 'hover:text-white'
                  } uppercase text-xs sm:text-xs flex justify-center items-center gap-1 p-2 rounded-lg`}
               >
                  <link.icon className="text-sm" />
                  <span className="leading-3">{link.title}</span>
               </Link>
            ))}
         </motion.nav>
      </motion.header>
   )
}
