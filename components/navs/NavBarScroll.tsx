'use client'
import { linksPrincipalMenu } from '@/constants/links_navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { TbMenuDeep } from 'react-icons/tb'
import { NavbarLink } from './NavbarLink'
import { Registration } from './Registration'

export const NavBarScroll = () => {
   const [isActive, setIsActive] = useState(false)

   const variant = {
      open: {
         x: 0,
         opacity: [0, 1],
      },
      closed: {
         x: '100vw',
         opacity: 0,
      },
   }

   return (
      <>
         <motion.div
            onClick={() => setIsActive(false)}
            variants={variant}
            initial={isActive ? 'open' : 'closed'}
            animate={isActive ? 'open' : 'closed'}
            className={`w-screen h-svh min-h-[800px] lg:hidden fixed flex flex-col top-0 right-0 text-slate-200 bg-gradient-to-r from-darkMode via-lightDarkMode to-darkMode shadow-md py-2 overflow-hidden`}
         >
            <div className="py-4 flex justify-center">
               <small onClick={() => setIsActive(false)}>
                  <Registration />
               </small>
            </div>
            <div className="flex w-full flex-col z-10 mt-10 grow">
               <ul className="flex w-[150vw] -translate-x-[25vw] flex-col text-xl justify-center items-center h-full gap-8 bg-lightDarkMode rounded-t-full">
                  {linksPrincipalMenu?.map((link) => (
                     <NavbarLink key={link.name} link={link} />
                  ))}
               </ul>
            </div>
         </motion.div>
         {/* Buttom section */}
         <section
            className={`rounded-l-3xl text-slate-200 z-40`}
         >
            <div className="lg:pr-5 lg:pl-10 lg:hidden px-3 flex justify-between items-center hover:-translate-x-1 transition-transform">
               <div
                  onClick={() => setIsActive(!isActive)}
                  className="lg:hidden select-none"
               >
                  {isActive ? (
                     <IoClose className="text-4xl hover:text-primary hover:cursor-pointer transition-colors" />
                  ) : (
                     <TbMenuDeep className="text-4xl hover:text-primary hover:cursor-pointer transition-colors" />
                  )}
               </div>
            </div>
         </section>
      </>
   )
}
