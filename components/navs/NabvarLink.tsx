'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { TLink } from '@/types/common'
import useNav from '@/context/navContext'
import { cutPathnameByPiece } from '@/utils/cutPathname'

interface NavbarLinkProps {
   link: TLink
}

export const NavbarLink = ({ link }: NavbarLinkProps) => {
   const { name, href } = link
   const pathname = usePathname()
   const { setMenuIsOpen } = useNav()
   const pathsUrl = cutPathnameByPiece(pathname, 2)

   return (
      <div
         onClick={() => setMenuIsOpen(false)}
         className={`${pathsUrl === href ? '' : ''} relative  inline-block`}
      >
         {pathsUrl === href ? (
            <motion.div
               layoutId="active"
               className="absolute w-full h-full border-b-2"
            ></motion.div>
         ) : null}
         <Link href={`${href}`} className="">
            {name}
         </Link>
      </div>
   )
}
