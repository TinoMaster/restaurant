'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { TLink } from '@/types/common'
import useNav from '@/context/navContext'
import { cutPathnameByPiece } from '@/libs/utils'

interface NavbarLinkProps {
   link: TLink
}

export const NavbarLink = ({ link }: NavbarLinkProps) => {
   const { title, href } = link
   const pathname = usePathname()
   const { setMenuIsOpen } = useNav()
   const pathsUrl = cutPathnameByPiece(pathname, 1, 2)
   const pathHref = cutPathnameByPiece(href, 1, 2)

   return (
      <div
         onClick={() => setMenuIsOpen(false)}
         className=" relative  inline-block"
      >
         {pathsUrl === pathHref ? (
            <motion.div
               layoutId="active"
               className="absolute w-full h-full border-b-2"
            ></motion.div>
         ) : null}
         <Link href={`${href}`} scroll={false} className="">
            {title}
         </Link>
      </div>
   )
}
